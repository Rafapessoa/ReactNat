import React from 'react';
import { StyleSheet, View } from 'react-native';

import Seasons from './components/Seasons';

export default class App extends React.Component {

  getData(season){    
    fetch(`http://ergast.com/api/f1/${season}.json`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Seasons handleClick= { this.getData}/>
      </View>
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
