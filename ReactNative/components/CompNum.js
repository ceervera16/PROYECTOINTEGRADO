import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class CompNum extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "rgba(16,110,242,1)" }}>
          <Text style={styles.textT}>{this.props.nom}</Text>
        </View>
        <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
          <Text style={styles.text}>{this.props.value}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textT: {
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(16,110,242,1)",
    margin: 3,
    marginLeft: 5,
    marginRight: 5,
  },
  container: {
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
  text: {
    margin: 20,
    fontSize: 85,
    color: 'rgba(16,110,242,1)',
    marginTop: 3,
    marginBottom: 12
  },
  icon: {
    margin: 20,
    fontSize: 40,
    color: "white",
  },
});