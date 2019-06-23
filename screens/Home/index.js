import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import Seasons from '../../components/Seasons';
import { Font } from 'expo'
import Load from '../../components/Load'
import { Title } from 'native-base';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = { loading: true };
  }

  componentDidMount() {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    }).then(() => this.setState({ loading: false }));
  }

  static navigationOptions = () => {
    return {
      title: 'Home',
    };
  }

  getData(season) {
    this.props.navigation.navigate('Menu', { season });
  }

  render() {
    if (this.state.loading)
    return (<SafeAreaView><Load/></SafeAreaView>);

    return (
      <SafeAreaView style={styles.container}>
        <Title>F1 - Selecione um ano para ver detalhes</Title>
        <Seasons handleClick={this.getData} />
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

