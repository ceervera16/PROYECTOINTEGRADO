import React from 'react';
import {StyleSheet, View, TouchableHighlight, Image, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Overlay} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

/**
 * Componente que muestra el header de la aplicación, con un botón para cambiar el idioma
 * y otro que muestra información sobre la aplicación mediante un overlay
 *
 * Recibe las siguientes propiedades:
 *   - onModlang (function) Función para cambiar el idioma en la clase App
 *   - english (bool) Determina en que idioma se va a mostrar
 */
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    /**
     * isVisible determina si se muestra el Overlay o no
     */
    this.state = {
      isVisible: false,
    };
  }

  /**
   * Muestra u oculta el Overlay
   */
  toggleOverlay = () => {
    this.setState({isVisible: !this.state.isVisible});
  };

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image
            source={require('../images/robotBlanco.png')}
            style={styles.logo}
          />
          <View style={{flexDirection: 'row'}}>
            {/**
             * Botón que muestra u oculta el overlay
             */}
            <TouchableHighlight
              style={styles.button}
              onPress={this.toggleOverlay}>
              <Icon style={styles.icon} name="information-variant" />
            </TouchableHighlight>
            {/**
             * Botón que cambia el idioma utilizando la función que recibe por propiedades desde App
             */}
            <TouchableHighlight
              style={[styles.button, {marginRight: 15}]}
              onPress={this.props.onModLang}>
              <Icon style={styles.icon} name="translate" />
            </TouchableHighlight>
          </View>
        </View>
        {/**
         * Por defecto no es visible hasta que se cambia su estado.
         * Al pulsar fuera se cierra
         */}
        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={this.toggleOverlay}
          height="70%">
          <View>
            <ScrollView>
              <Text style={styles.textoTitle}>
                {this.props.english
                  ? 'Welcome to our app'
                  : '¡Bienvenido/a a nuestra app'}
                , CapBot Monitor!
              </Text>
              <Text style={styles.textoBody}>
                {this.props.english
                  ? 'This application is designed to show, in real time, the parameters of each group of machines of a cap recycling robot visually. Press each component and it will show you a small description of its behaviour.'
                  : 'Esta aplicación está diseñada para mostrar, en tiempo real, los parámetros de cada grupo de máquinas de un robot de reciclaje de tapones de forma visual. Pulsa cada componente y te mostrará una pequeña descripción de su funcionamiento.'}
              </Text>
              <Text style={styles.textoBottom}>
                Developers:
                {'\n'}
                {'\n'}Guillermo Martínez Lozano
                {'\n'}guillermo_m_96@hotmail.com
                {'\n'}
                {'\n'}Luis Alberto Contreras García
                {'\n'}luiscgarcia1999@gmail.com
                {'\n'}
                {'\n'}Adrián Cervera San Sebastián
                {'\n'}ceervera16@gmail.com
                {'\n'}
                {'\n'}Graciela Zamora Valdés
                {'\n'}graciiela10@hotmail.com
                {'\n'}
                {'\n'}Joan Banyuls Sánchez
                {'\n'}jobanyuls@gmail.com
                {'\n'}
                {'\n'}Jose Antonio Delgado Muñoz
                {'\n'}jose5598vlc@gmail.com
                {'\n'}
              </Text>
              <Text style={styles.textoIcon}>
                App icon by "xnimrodx" from "https://www.flaticon.es/".
              </Text>
            </ScrollView>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1B4F72',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    margin: 10,
    fontSize: 40,
    color: 'white',
  },
  button: {
    backgroundColor: '#4f8bf5',
    margin: 10,
    height: 60,
    width: 60,
  },
  textoTitle: {
    padding: 10,
    color: '#1B4F72',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '800',
  },
  textoBody: {
    padding: 15,
    color: '#1B4F72',
    fontSize: 19,
    textAlign: 'center',
  },
  textoBottom: {
    padding: 12,
    color: '#1B4F72',
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  textoIcon: {
    padding: 12,
    color: '#1B4F72',
    fontSize: 13,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  logo: {
    height: 70,
    width: 70,
    margin: 12,
    marginHorizontal: 16,
  },
});
