import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import Popover from 'react-native-popover-view';

/**
 * Componente que muestra el valor que recibe por propiedades.
 *
 * Recibe las siguientes propiedades:
 *   - value (bool) El valor que se va a mostrar
 *   - nom (string) Nombre con el que va a aparecer el componente
 *   - textoPopover (string) Texto que se muestra al pulsar el componente
 */
export default class CompNum extends React.Component {
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

  render() {
    return (
      /**
       * Abre el Popover al pulsarlo y también crea una referencia para que
       * el Popover apunte a él al pulsarlo
       */
      <TouchableWithoutFeedback
        onPress={this.togglePopover}
        ref={ref => (this.touchable = ref)}>
        <View style={styles.container}>
          <View style={{backgroundColor: '#1B4F72'}}>
            <Text style={styles.textT}>{this.props.nom}</Text>
          </View>
          <View style={{backgroundColor: 'white', alignItems: 'center'}}>
            <Text style={styles.text}>
              {this.props.value != null ? this.props.value : 0}
            </Text>
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
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  text: {
    fontSize: 86,
    color: '#1B4F72',
  },
});
