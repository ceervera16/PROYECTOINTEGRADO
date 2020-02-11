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

export default class Motor3Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../images/logo3.png')} style={{ height: 80, width: 80, margin: 5 }} />
          <TouchableHighlight style={styles.button} onPress={this.props.screenProps.onModLang}>
            <Icon style={styles.icon} name='translate' />
          </TouchableHighlight>
        </View>
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
    justifyContent: 'space-between'
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