import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './screens/Home';
import Season from './screens/Season';
import Menu from './screens/Menu';
import Piloto from './screens/Piloto';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Menu: {
      screen: Menu,
    },
    Season: {
      screen: Season,
    },    
    Piloto: {
      screen: Piloto,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
export default createAppContainer(AppNavigator);