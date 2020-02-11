import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class GMarcha extends React.Component {
  colorComp() {
    return this.props.GMarcha ? "#7BE756" : "#F44138"
  }

  iconComp() {
    return this.props.GMarcha ? "check" : "window-close"
  }

  textComp() {
    return this.props.GMarcha ? (this.props.english ? "On" : "Encendido") : (this.props.english ? "Off" : "Apagado")
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.colorComp() }]}>
        <Icon style={styles.icon} name={this.iconComp()} />
        <Text style={styles.text}>{this.textComp()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    marginLeft: 20,
    fontSize: 30,
    color: "white"
  },
  icon: {
    margin: 10,
    marginLeft: 20,
    fontSize: 40,
    color: "white",
  },
  container: {
    flexDirection: 'row',
    margin: 7,
    backgroundColor: "rgba(16,110,242,1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
});