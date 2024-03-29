import React, {useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import GMarcha from '../components/GMarcha';
import CompNum from '../components/CompNum';
import CompOnOff from '../components/CompOnOff';

/**
 * Pantalla 3 de la aplicación, que recibe por screenProps:
 *   - variables (object) Objeto que recibe desde la base de datos con las variables
 *   - english (bool) Determina en que idioma se va a mostrar
 */
export default class Motor3Screen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{margin: 7}}>
          <GMarcha
            GMarcha={this.props.screenProps.variables.G3Marcha}
            english={this.props.screenProps.english}
            num={3}
          />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.5}}>
              <CompNum
                value={this.props.screenProps.variables.G3Gripper}
                nom="Gripper"
                textoPopover={
                  this.props.screenProps.english
                    ? 'Robot mounted tool'
                    : 'Herramienta montada en el robot'
                }
              />
            </View>
            <View style={{flex: 0.5}}>
              <CompOnOff
                value={this.props.screenProps.variables.G3AvisoCelda}
                nom={
                  this.props.screenProps.english
                    ? 'Robot cell'
                    : 'Celda del robot'
                }
                text1={this.props.screenProps.english ? 'Open' : 'Abierta'}
                text0={this.props.screenProps.english ? 'Closed' : 'Cerrada'}
                icon1="lock-open"
                icon0="lock"
                textoPopover={
                  this.props.screenProps.english
                    ? 'Robot cell status warning'
                    : 'Aviso del estado de la celda del robot'
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flex: 10,
  },
});
