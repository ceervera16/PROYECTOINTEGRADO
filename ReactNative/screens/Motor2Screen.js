import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import GMarcha from '../components/GMarcha';
import GFrecVar from '../components/GFrecVar';
import CompNum from '../components/CompNum';
import CompOnOff from '../components/CompOnOff';
import G2Tol from '../components/G2Tol'
import Header from '../components/Header';

export default class Motor2Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header onModLang={this.props.screenProps.onModLang} english={this.props.screenProps.english}/>
        <View style={{ margin: 7 }}>
          <GMarcha
            GMarcha={this.props.screenProps.variables.G2Marcha}
            english={this.props.screenProps.english}
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.5 }}>
              <GFrecVar
                GFrecVar={this.props.screenProps.variables.G2FrecVar}
                nom={this.props.screenProps.english ? "Extr. motor speed" : "Vel. motor extr."}
                max={60}
                textoPopover={this.props.screenProps.english ? "Extrusion motor speed" : "Velocidad del motor de extrusión"}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <CompNum
                value={this.props.screenProps.variables.G2BobFab}
                nom={this.props.screenProps.english ? "Coils" : "Bobinas"}
                textoPopover={this.props.screenProps.english ? "Number of coils manufactured" : "Cantidad de bobinas fabricadas"}
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.5 }}>
              <CompOnOff
                value={this.props.screenProps.variables.G2TempOk}
                nom={this.props.screenProps.english ? "Work temperature" : "Temp. trabajo"}
                text1={this.props.screenProps.english ? "Reached" : "Alcanzada"}
                text0={this.props.screenProps.english ? "Under" : "Por debajo"}
                icon1="thermometer-plus"
                icon0="thermometer-alert"
                textoPopover={this.props.screenProps.english ? "Optimal working temperature" : "Temperatura de trabajo óptima"}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <G2Tol
                english={this.props.screenProps.english}
                detectorUp={this.props.screenProps.variables.G2TolUp}
                detectorDown={this.props.screenProps.variables.G2TolDown}
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