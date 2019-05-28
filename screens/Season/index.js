import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Card, CardItem } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export default class Season extends React.Component {

    state = {
        season: []
    };

    componentDidMount() {
        const season = this.props.navigation.getParam('season');
        const name = this.props.navigation.getParam('name');
        this.getData(season)
        console.log(season, name);
    }

    getData(season) {
        fetch(`http://ergast.com/api/f1/${season}.json`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    season: data['MRData']['RaceTable']['Races']
                })
                console.log(this.props.navigation);
            });
    }

    static navigationOptions = () => {
        return {
            title: 'Season',
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
                        <Text>{item.raceName}</Text>
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
