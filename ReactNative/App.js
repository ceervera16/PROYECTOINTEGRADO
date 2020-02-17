import React from 'react';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Motor1Screen from './screens/Motor1Screen';
import Motor2Screen from './screens/Motor2Screen';
import Motor3Screen from './screens/Motor3Screen';
import Header from './components/Header';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const TabNavigator = createMaterialTopTabNavigator(
  {
    "G1": Motor1Screen,
    "G2": Motor2Screen,
    "G3": Motor3Screen,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#f7f7f7',
        height: 56
      },
      indicatorStyle: {
        height: '100%',
        backgroundColor: '#1B4F72'
      }
    },
    tabBarPosition: 'bottom',
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      tabBarLabel: ({ focused }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: focused ? 0 : 8 }}>
          <View style={{ position: 'absolute' }}>
            <Icon
              name="engine"
              size={focused ? 32 : 53}
              color={screenProps.variables[`G${navigation.state.routeName.substring(1, 2)}Marcha`] ? "#39D009" : "#F44138"}
            />
          </View>
          <View style={{ position: 'absolute' }}>
            <Text style={{ fontSize: focused ? 13 : 17, color: 'white', marginTop: focused ? 43 : 6, fontWeight: focused ? 'normal' : 'bold' }}>
              {focused ? (screenProps.english ? 'GROUP ' : 'GRUPO ') : ''}{navigation.state.routeName.substring(1, 2)}
            </Text>
          </View>
        </View>
      ),
    }),
  },
);

const StackNavigator = createStackNavigator(
  {
    screen: {
      screen: TabNavigator,
      navigationOptions: ({ screenProps }) => ({
        header: () => <Header onModLang={screenProps.onModLang} english={screenProps.english} />,
      }),
    },
  },
);

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: {},
      english: false,
    }
  }

  onModLang = () => {
    this.setState({ english: !this.state.english });
  }

  getDatos = async () => {
    try {
      const response = await fetch(`http://10.3.129.150/api/Variables`);
      //const response = await fetch(`http://10.0.2.2:44325/api/Variables`);
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