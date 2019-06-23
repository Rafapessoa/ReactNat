import React from 'react';
import { Container, Content, List, Title, Text, Card, CardItem } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import ergastService from '../../services/ergastService';
import Load from '../../components/Load'
import FormatData from '../../components/Util/FormatData'

export default class Races extends React.Component {

    state = {
        races: [],
        loading: true
    };

    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        ergastService.getRaces(season)
            .then(races => this.setState({ races, loading: false }))
            .catch(e => alert(e));
    }

    static navigationOptions = () => {
        return {
            title: 'Races',
        };
    }

    renderContent() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <Container>
                        <Content>
                            <List>
                                {this.state.races.map(this.renderItem)}
                            </List>
                        </Content>
                    </Container>
                </ScrollView>
            </SafeAreaView>
        )
    }

    renderItem(item, i) {
        return (
            <Card key={`race-${i}`}>
                <CardItem>
                    <Title>Corrida: {item.round} | {item.raceName}</Title>
                </CardItem>
                <CardItem>
                    <Text>Data: {FormatData.FormatData(item.date)}</Text>
                </CardItem>
            </Card>
        )
    }

    render() {
        if (this.state.loading)
            return (<SafeAreaView><Load /></SafeAreaView>);

        return (
            this.renderContent()
        );
    }
}
