import React from 'react';
import { Container, Button, Content, List, Title, Text, Card, CardItem } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import ergastService from '../../services/ergastService';
import Load from '../../components/Load';
import FormatData from '../../components/Util/FormatData'

export default class Pilot extends React.Component {

    constructor(props) {
        super(props);
        this.getInfo = this.getInfo.bind(this);
        this.state = { loading: true };
    }

    state = {
        pilots: [],
        loading: true
    };

    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        ergastService.getPilots(season)
            .then(pilots => this.setState({ pilots ,  loading: false }))
            .catch(e => alert(e));
    }

    static navigationOptions = () => {
        return {
            title: 'Pilotos',
        };
    }

    getInfo(season) {
        this.props.navigation.navigate('PilotInfo', { season });
    }

    renderContent() {
        const { season } = this.state
        console.log(season)
        return (
            <SafeAreaView>
                <ScrollView>
                    <Container>
                        <Content>
                            <List>
                                {this.state.pilots.map(this.renderItem)}
                            </List>
                        </Content>
                    </Container>
                </ScrollView>
            </SafeAreaView>
        )
    }

    renderItem(item, i) {

        return (

            <Card key={`pilot-${i}`}>
                <CardItem>
                    <Title>Piloto: {item.givenName} {item.familyName}</Title>
                </CardItem>
                <CardItem>
                    <Text>Nacionalidade: {item.nationality} </Text>
                </CardItem>
                <CardItem>
                    <Text>Nascimento: {FormatData.FormatData(item.dateOfBirth)}</Text>
                </CardItem>
            </Card>
        )
    }

    render() {
        if (this.state.loading)
        return (<SafeAreaView><Load/></SafeAreaView>);

        return (
            this.renderContent()
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
