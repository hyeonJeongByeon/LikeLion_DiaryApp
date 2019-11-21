import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import MainScreen from './Components/MainScreen';
AppRegistry.registerComponent('instagram', ()=>point);

export default function App() extends React.Component {
  render(){
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createAppContainer(
  createStackNavigator({
    Main:{
      screen: MainScreen
    }
  })
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
