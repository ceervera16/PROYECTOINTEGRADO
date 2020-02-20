import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Popover from 'react-native-popover-view';

/**
 * Componente que muestra el estado del grupo de máquinas en el que está
 *
 * Recibe las siguientes propiedades:
 *   - GMarcha (bool) El valor que va a mostrar
 *   - english (bool) Determina en que idioma se va a mostrar
 *   - num (num) Número de la pantalla en la que está
 */
export default class GMarcha extends React.Component {
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
   * Devuelve un color dependiendo de la propiedad GMarcha
   */
  colorComp() {
    return this.props.GMarcha ? '#39D009' : '#F44138';
  }

  /**
   * Devuelve un icono dependiendo de la propiedad GMarcha
   */
  iconComp() {
    return this.props.GMarcha ? 'check' : 'window-close';
  }

  textComp() {
    return this.props.GMarcha
      ? this.props.english
        ? 'On'
        : 'Encendido'
      : this.props.english
      ? 'Off'
      : 'Apagado';
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
          <Icon style={styles.icon} name={this.iconComp()} />
          <Text style={styles.text} numberOfLines={1}>
            {this.props.english ? 'Group' : 'Grupo'} {this.props.num} -{' '}
            {this.textComp()}
          </Text>
          {/**
           * Por defecto no es visible hasta que se cambia su estado.
           * Recibe en su propiedad fromView la referencia del touchable para apuntar hacia él.
           * Al pulsar fuera se cierra
           */}
          <Popover
            isVisible={this.state.isVisible}
            fromView={this.touchable}
            onRequestClose={this.togglePopover}>
            <Text style={{margin: 15}}>
              {this.props.english
                ? 'Group status on screen: in operation or stopped. It also shows its status in the navigator below'
                : 'Estado del grupo en pantalla: en funcionamiento o parado. También se muestra su estado en el navegador de abajo'}
            </Text>
          </Popover>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
  },
  icon: {
    fontSize: 40,
    margin: 10,
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    height: 60,
    margin: 7,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'flex-start',
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
});
