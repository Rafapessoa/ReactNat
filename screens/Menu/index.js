import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Button } from 'native-base';

export default class Menu extends React.Component {


  state = {
    season: []
  };

  componentDidMount() {
    const season = this.props.navigation.getParam('season');
    console.log('>>>>>>.' + season)
    this.setState({season})  
  }

  static navigationOptions = () => {
    return {
      title: 'Menu',
    };
  }

  getData(season) {
    this.props.navigation.navigate('Season',{season});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button onPress={() => this.getData(this.state.season)} >
          <Text> Temporadas </Text>
        </Button>
        <Button onPress={() => this.getData(this.state.season)}>
          <Text> Pilotos </Text>
        </Button>
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