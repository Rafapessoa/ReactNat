import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './screens/Home';
import Races from './screens/Races';
import Menu from './screens/Menu';
import Pilot from './screens/Pilot';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Menu: {
      screen: Menu,
    },
    Races: {
      screen: Races,
    },    
    Pilot: {
      screen: Pilot,
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