import React from 'react';
import { StyleSheet,
     View, Text , Button, TouchableOpacity} from 'react-native';
import FirstView from './FirstView';
import Style from './Style';
import CalculadoraNormal from './CalculadoraNormal';
import CalculadoraCientifica from './CalculadoraCientifica';
import { createStackNavigator, createAppContainer } from "react-navigation"
export default class App extends React.Component {

  render() {
    return (
     <AppContainer/>
    );
  }

}

const AppNavigator = createStackNavigator({
  Home: FirstView,
  CalculadoraN: CalculadoraNormal,
  CalculadoraC: CalculadoraCientifica
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50
  }
});