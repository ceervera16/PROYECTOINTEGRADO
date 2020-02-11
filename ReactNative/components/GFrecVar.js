import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import RNSpeedometer from 'react-native-speedometer'

export default class GFrecVar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "rgba(16,110,242,1)" }}>
          <Text style={styles.text}>{this.props.nom}</Text>
        </View>
        <View style={styles.meter}>
          <RNSpeedometer
            value={this.props.GFrecVar}
            size={100}
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(16,110,242,1)",
    margin: 3,
    marginLeft: 5,
    marginRight: 5
  },
  container: {
    margin: 7,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  meter: {
    margin: 20,
    marginBottom: 50,
    justifyContent: 'center'
  },
  num: {
    fontSize: 40
  }
});