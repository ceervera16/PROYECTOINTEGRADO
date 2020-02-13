import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import GMarcha from '../components/GMarcha';
import CompNum from '../components/CompNum';
import CompOnOff from '../components/CompOnOff';
import Header from '../components/Header';

export default class Motor3Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header onModLang={this.props.screenProps.onModLang}/>
        <View style={{ margin: 7 }}>
          <GMarcha
            GMarcha={this.props.screenProps.variables.G3Marcha}
            english={this.props.screenProps.english}
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.5 }}>
              <CompNum
                value={this.props.screenProps.variables.G3Gripper}
                nom="Gripper"
                textoPopover={this.props.screenProps.english ? "Robot mounted tool" : "Herramienta montada en el robot"}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <CompOnOff
                value={this.props.screenProps.variables.G3AvisoCelda}
                nom={this.props.screenProps.english ? "Robot cell" : "Celda del robot"}
                text1={this.props.screenProps.english ? "Open" : "Abierta"}
                text0={this.props.screenProps.english ? "Closed" : "Cerrada"}
                icon1="lock-open"
                icon0="lock"
                textoPopover={this.props.screenProps.english ? "Robot cell status warning" : "Aviso del estado de la celda del robot"}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 10
  },
  header: {
    backgroundColor: "#1B4F72",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    margin: 10,
    fontSize: 40,
    color: "white",
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 10,
    height: 60,
    width: 60
  }
});