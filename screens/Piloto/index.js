import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Card, CardItem } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export default class Piloto extends React.Component {

    state = {
        season: []
    };

    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        this.getData(season)

    }

    getData(season) {
        console.log('sesion >>>>>>' + season);
        fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    season: data['MRData']['DriverTable']['Drivers']
                })
                console.log(this.props.navigation);
            });
    }

    static navigationOptions = () => {
        return {
            title: 'Piloto',
        };
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
                                {this.state.season.map(this.renderItem)}
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
                    <ListItem>
                        <Text>{item.givenName} {item.familyName} </Text>
                    </ListItem>
                </CardItem>
            </Card>
        )
    }

    render() {
        return (
            this.renderContent()
        );
    }
}
