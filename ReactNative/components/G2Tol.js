import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

import Popover from 'react-native-popover-view';

/**
 * Componente que muestra el estado de la tolva utilizando los dos
 * detectores que tiene (uno arriba y otro abajo).
 *
 * Recibe las siguientes propiedades:
 *   - english (bool) Determina en que idioma se va a mostrar
 *   - detectorUp (bool) Valor del detector de arriba, en la bd G2TolUp
 *   - detectorDown (bool) Valor del detector de abajo, en la bd G2TolDown
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
   * Devuelve el color de fondo dependiendo de las propiedades que le pasen
   */
  colorComp() {
    switch (true) {
      case this.props.detectorUp && this.props.detectorDown: //Si están los dos detectores encendidos
        return '#F44138'; //mostrará que está lleno
      case !this.props.detectorUp && this.props.detectorDown: //Si el de arriba está apagado y el de abajo encendido
        return '#39D009'; //mostrará que tiene un nivel medio
      case !this.props.detectorUp && !this.props.detectorDown: //Si están los dos apagados
        return 'grey'; //mostrará que está vacío
      case this.props.detectorUp && !this.props.detectorDown: //Si está el de arriba encendido y el de abajo apagado
        return '#FAD91F'; //dará error
    }
  }

  /**
   * Devuelve el icono dependiendo de las propiedades que le pasen
   */
  iconComp() {
    switch (true) {
      case this.props.detectorUp && this.props.detectorDown:
        return 'progress-full';
      case !this.props.detectorUp && this.props.detectorDown:
        return 'progress-two';
      case !this.props.detectorUp && !this.props.detectorDown:
        return 'progress-empty';
      case this.props.detectorUp && !this.props.detectorDown:
        return 'new';
    }
  }

  /**
   * Devuelve el texto dependiendo de las propiedades que le pasen
   */
  textComp() {
    switch (true) {
      case this.props.detectorUp && this.props.detectorDown:
        return this.props.english ? 'Full' : 'Llena';
      case !this.props.detectorUp && this.props.detectorDown:
        return this.props.english ? 'Ordinary level' : 'Nivel normal';
      case !this.props.detectorUp && !this.props.detectorDown:
        return this.props.english ? 'Empty' : 'Vacía';
      case this.props.detectorUp && !this.props.detectorDown:
        return 'Error';
    }
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
              {this.props.english ? 'Hopper' : 'Tolva'}
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
            <Text style={{margin: 15}}>
              {this.props.english
                ? 'Hopper material level'
                : 'Nivel de material de la tolva'}
            </Text>
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
    margin: 13,
    fontSize: 25,
    color: 'white',
    marginTop: 3,
  },
  icon: {
    margin: 13,
    fontSize: 40,
    color: 'white',
  },
});
