import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Popover from 'react-native-popover-view';

/**
 * Componente que muestra dos estados dependiendo del valor que se le pase.
 *
 * Recibe las siguientes propiedades:
 *   - value (bool) El valor que se va a mostrar
 *   - nom (string) Nombre con el que va a aparecer el componente
 *   - text1 (string) Texto que muestra el componente si el valor es true
 *   - text0 (string) Texto que muestra el componente si el valor es false
 *   - icon1 (string) Icono que aparece si el valor es true
 *   - icon1 (string) Icono que aparece si el valor es false
 *   - textoPopover (string) Texto que se muestra al pulsar el componente
 */
export default class CompOnOff extends React.Component {
  constructor(props) {
    super(props);
    /**
     * isVisible determina si se muestra el Popover o no
     */
    this.state = {
      isVisible: false,
    };
  }

  /**
   * Muestra u oculta el Popover
   */
  togglePopover = () => {
    this.setState({isVisible: !this.state.isVisible});
  };

  /**
   * Devuelve un color dependiendo de la propiedad value
   */
  colorComp() {
    return this.props.value ? '#39D009' : '#F44138';
  }

  /**
   * Devuelve un icono dependiendo de la propiedad value.
   * Los iconos que devuelve los recibe como propiedades
   */
  iconComp() {
    return this.props.value ? this.props.icon1 : this.props.icon0;
  }

  /**
   * Devuelve un texto dependiendo de la propiedad value.
   * Los textos que devuelve los recibe como propiedades
   */
  textComp() {
    return this.props.value ? this.props.text1 : this.props.text0;
  }

  render() {
    return (
      /**
       * Abre el Popover al pulsarlo y también crea una referencia para que
       * el Popover apunte a él al pulsarlo
       */
      <TouchableWithoutFeedback
        onPress={this.togglePopover}
        ref={ref => (this.touchable = ref)}>
        <View style={[styles.container, {backgroundColor: this.colorComp()}]}>
          <View style={{backgroundColor: '#1B4F72'}}>
            <Text style={styles.textT} numberOfLines={1}>
              {this.props.nom}
            </Text>
          </View>
          <View
            style={{
              flexGrow: 1,
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Icon style={styles.icon} name={this.iconComp()} />
            <Text style={styles.text}>{this.textComp()}</Text>
          </View>
          {/**
           * Por defecto no es visible hasta que se cambia su estado.
           * Recibe en su propiedad fromView la referencia del touchable para apuntar hacia él.
           * Al pulsar fuera se cierra
           */}
          <Popover
            isVisible={this.state.isVisible}
            fromView={this.touchable}
            onRequestClose={this.togglePopover}>
            <Text style={{margin: 15}}>{this.props.textoPopover}</Text>
          </Popover>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  textT: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#1B4F72',
    margin: 3,
    marginLeft: 5,
    marginRight: 5,
  },
  container: {
    margin: 7,
    height: 150,
    backgroundColor: '#1B4F72',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 8,
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  icon: {
    fontSize: 40,
    color: 'white',
  },
});
