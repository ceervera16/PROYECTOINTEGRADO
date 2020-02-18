import React from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Motor1Screen from './screens/Motor1Screen';
import Motor2Screen from './screens/Motor2Screen';
import Motor3Screen from './screens/Motor3Screen';
import Header from './components/Header';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

/**
 * Navegador por tabs formado por las pantallas por grupos de máquinas.
 * Se ha utilizado el MaterialTopTabNavigator porque permite la navegación por gestos
 */
const TabNavigator = createMaterialTopTabNavigator(
  {
    G1: Motor1Screen,
    G2: Motor2Screen,
    G3: Motor3Screen,
  },
  {
    /**
     * Opciones de la barra de navegación
     */
    tabBarOptions: {
      style: {
        backgroundColor: '#f7f7f7',
        height: 56,
      },
      indicatorStyle: {
        height: '100%',
        backgroundColor: '#1B4F72',
      },
    },
    /**
     * Posición de la barra de navegación
     */
    tabBarPosition: 'bottom',
    /**
     * Opciones de navegación por defecto
     */
    defaultNavigationOptions: ({navigation, screenProps}) => ({
      /**
       * cada botón de la barra de navegación cambia dependiendo de si es la pantalla que recibe el foco.
       * Además, el icono cambia de color dependiendo de si el grupo de máquinas está encendido o no
       */
      tabBarLabel: ({focused}) => (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: focused ? 0 : 8,
          }}>
          <View style={{position: 'absolute'}}>
            <Icon
              name="engine"
              size={focused ? 32 : 53}
              color={
                screenProps.variables[
                  `G${navigation.state.routeName.substring(1, 2)}Marcha`
                ]
                  ? '#39D009'
                  : '#F44138'
              }
            />
          </View>
          <View style={{position: 'absolute'}}>
            <Text
              style={{
                fontSize: focused ? 13 : 17,
                color: 'white',
                marginTop: focused ? 43 : 6,
                fontWeight: focused ? 'normal' : 'bold',
              }}>
              {focused ? (screenProps.english ? 'GROUP ' : 'GRUPO ') : ''}
              {navigation.state.routeName.substring(1, 2)}
            </Text>
          </View>
        </View>
      ),
    }),
  },
);

/**
 * Navegador stack que contiene el navegador por tabs para poder mostrar un header común a todas
 */
const StackNavigator = createStackNavigator({
  screen: {
    screen: TabNavigator,
    navigationOptions: ({screenProps}) => ({
      header: () => (
        <Header
          onModLang={screenProps.onModLang}
          english={screenProps.english}
        />
      ),
    }),
  },
});

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    /**
     * En el estado están los datos que recibe de la base de datos y el idioma
     */
    this.state = {
      datos: {},
      english: false,
    };
  }

  /**
   * Función para modifica el idioma de toda la aplicación
   */
  onModLang = () => {
    this.setState({english: !this.state.english});
  };

  /**
   * Función para recibir los datos de la base de datos
   */
  getDatos = async () => {
    try {
      const response = await fetch(`http://10.3.129.150/api/Variables`);
      //const response = await fetch(`http://10.0.2.2:44325/api/Variables`);
      const json = response.ok ? await response.json() : console.log('Error');
      this.setState({datos: json});
      console.log(this.state.datos);
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  /**
   * Cuando se inicia la aplicación se cargan los datos y se activa un timer que los va
   * recargando cada diez segundos
   */
  componentDidMount = () => {
    this.getDatos();

    setInterval(() => {
      this.getDatos();
    }, 10000);
  };

  render() {
    return (
      <AppContainer
        /**
         * screenProps son las propiedades que comparten todas las pantallas en el AppContainer,
         * en este caso son los datos de la base de datos, el idioma y la función para cambiar el idioma
         */
        screenProps={{
          variables: this.state.datos,
          english: this.state.english,
          onModLang: this.onModLang,
        }}
      />
    );
  }
}
