import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';

import RNSpeedometer from 'react-native-speedometer';

import Popover from 'react-native-popover-view';

/**
 * Componente que muestra el valor que recibe en un velocímetro.
 *
 * Recibe las siguientes propiedades:
 *   - GFrecVar (bool) El valor que se va a mostrar
 *   - nom (string) Nombre con el que va a aparecer el componente
 *   - max (num) Valor máximo del velocímetro
 *   - textoPopover (string) Texto que se muestra al pulsar el componente
 */
export default class GFrecVar extends React.Component {
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
            <Text style={styles.text}>{this.props.nom}</Text>
          </View>
          <View style={styles.meter}>
            {/**
             * El velocímetro recibe varios propiedades y muestra el value dispuesto en un gráfico de gauge
             * 
             * Recibe las siguientes propiedades:
             *   - value (num) El valor que recibe el componente
             *   - size (num) El tamaño del velocímetro
             *   - maxValue (num) El valor máximo del velocímetro
             *   - labels (object) Las distintas porciones en las que se divide el velocímetro
             */}
            <RNSpeedometer
              value={this.props.GFrecVar != null ? this.props.GFrecVar : 0}
              size={130}
              maxValue={this.props.max}
              labels={[
                {
                  labelColor: '#ff2900',
                  activeBarColor: '#ff2900',
                },
                {
                  labelColor: '#ff5400',
                  activeBarColor: '#ff5400',
                },
                {
                  labelColor: '#f4ab44',
                  activeBarColor: '#f4ab44',
                },
                {
                  labelColor: '#f2cf1f',
                  activeBarColor: '#f2cf1f',
                },
                {
                  labelColor: '#14eb6e',
                  activeBarColor: '#14eb6e',
                },
                {
                  labelColor: '#00ff6b',
                  activeBarColor: '#00ff6b',
                },
              ]}
            />
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
  text: {
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
  meter: {
    margin: 7,
    justifyContent: 'center',
  },
  num: {
    fontSize: 40,
  },
});
