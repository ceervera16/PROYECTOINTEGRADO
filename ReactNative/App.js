import React, { createContext } from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import 'react-native-gesture-handler';

import Motor1Screen from './screens/Motor1Screen';
import Motor2Screen from './screens/Motor2Screen';
import Motor3Screen from './screens/Motor3Screen';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

export const TabNavigator = createBottomTabNavigator(
  {
    "G1": Motor1Screen,
    "G2": Motor2Screen,
    "G3": Motor3Screen,
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#1B4F72",
      shifting: true,
      style: {
        backgroundColor: '#f7f7f7',
        height: 70,
      },
    },
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      tabBarLabel: ({ focused }) => (
        <Text style={{ fontSize: focused ? 20 : 15, textAlign: 'center', color: focused ? 'white' : '#1B4F72', marginBottom: 5, marginTop: -5 }}>
          {(screenProps.english ? "Group " : "Grupo ") + navigation.state.routeName.substring(1, 2)}
        </Text>
      ),
      tabBarIcon: ({ focused }) => (
        <Icon
          name="engine"
          size={focused ? 35 : 30}
          color={
            navigation.state.routeName.substring(1, 2) == 1
              ? (screenProps.variables.G1Marcha ? "#7BE756" : "#F44138")
              : navigation.state.routeName.substring(1, 2) == 2
                ? (screenProps.variables.G2Marcha ? "#7BE756" : "#F44138")
                : (screenProps.variables.G3Marcha ? "#7BE756" : "#F44138")
          }
        />
      ),
    }),
  },
);

const AppContainer = createAppContainer(TabNavigator);

export const VariablesContext = createContext(null)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      english: false,
    }
  }

  onModLang = () => {
    this.setState({ english: !this.state.english });
  }

  getDatos = async () => {
    try {
      const response = await fetch(`http://10.0.2.2:44325/api/Variables`);
      const json = response.ok ? await response.json() : console.log("Error");
      this.setState({ datos: json });
      console.log(this.state.datos);
    }
    catch (error) {
      console.log("Error: " + error);
    }
  }

  componentDidMount = () => {
    this.getDatos();

    setInterval(() => {
      this.getDatos();
    }, 10000);
  }

  render() {
    return (
      <AppContainer
        screenProps={{
          variables: this.state.datos,
          english: this.state.english,
          onModLang: this.onModLang,
        }}
      />
    );
  }
}