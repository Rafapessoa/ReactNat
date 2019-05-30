import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import Seasons from '../../components/Seasons';

//components
//https://docs.nativebase.io/Components.html 

export default class Home extends React.Component {

constructor(props){
  super(props);
  this.getData = this.getData.bind(this);
}

  static navigationOptions = () => {
    return {
      title: 'Home',
    };
  }

  getData(season){    
      this.props.navigation.navigate('Menu',{season}); 
  }

  render() {
      return (
        <SafeAreaView style={styles.container}>
          <Seasons handleClick={ this.getData } />
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

