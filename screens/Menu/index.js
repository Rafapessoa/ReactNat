import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Title, Content, Button, Text } from 'native-base';
import { SafeAreaView } from 'react-navigation'

export default class Menu extends React.Component {


  state = {
    season: []
  };

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    this.setState({ season })
  }

  static navigationOptions = () => {
    return {
      title: 'Menu',
    };
  }

  goNext(option,season) { 
    this.props.navigation.navigate(option, { season });
  }

  render() {
    return (
       <SafeAreaView style={styles.container}>
        <Container>
            <Content>
              <Title>F1 - Selecione uma categoria</Title>
              <Button large block success onPress={() => this.goNext('Races',this.state.season)}>
                <Text>Corridas</Text>
              </Button>
              <Button large block info onPress={() => this.goNext('Pilot',this.state.season)}>
                <Text>Pilotos</Text>
              </Button>            
            </Content>
        </Container>
      </SafeAreaView>
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