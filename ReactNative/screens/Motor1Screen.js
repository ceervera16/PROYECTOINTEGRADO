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
import CompOnOff from '../components/CompOnOff';
import G1Almgav from '../components/G1AlmGav';

export default class Motor1Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../images/logo1.png')} style={{ height: 55, width: 70, margin: 10 }} />
          <TouchableHighlight style={styles.button} onPress={this.props.screenProps.onModLang}>
            <Icon style={styles.icon} name='translate' />
          </TouchableHighlight>
        </View>
        <View style={{ margin: 7 }}>
          <GMarcha
            GMarcha={this.props.screenProps.variables.G1Marcha}
            english={this.props.screenProps.english}
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.5 }}>
              <GFrecVar
                GFrecVar={this.props.screenProps.variables.G1FrecVar}
                nom={this.props.screenProps.english ? "Speed tape drive" : "Vel. variador cinta"}
                max={60}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <CompOnOff
                value={this.props.screenProps.variables.G1Tritur}
                nom={this.props.screenProps.english ? "Crusher" : "Trituradora"}
                text1={this.props.screenProps.english ? "On going" : "En marcha"}
                text0={this.props.screenProps.english ? "Stopped" : "Parada"}
                icon1="check"
                icon0="window-close"
              />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.5 }}>
              <CompOnOff
                value={this.props.screenProps.variables.G1RecarTap}
                nom={this.props.screenProps.english ? "Cap refill" : "Recar. de tapones"}
                text1={this.props.screenProps.english ? "On going" : "En marcha"}
                text0={this.props.screenProps.english ? "Stopped" : "Parada"}
                icon1="check"
                icon0="window-close"
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <G1Almgav
                english={this.props.screenProps.english}
                G1AlmGav1={this.props.screenProps.variables.G1AlmGav1}
                G1AlmGav2={this.props.screenProps.variables.G1AlmGav2}
                G1AlmGav3={this.props.screenProps.variables.G1AlmGav3}
                G1AlmGav4={this.props.screenProps.variables.G1AlmGav4}
                G1AlmGav5={this.props.screenProps.variables.G1AlmGav5}
                G1AlmGav6={this.props.screenProps.variables.G1AlmGav6}
                G1AlmGav7={this.props.screenProps.variables.G1AlmGav7}
                G1AlmGav8={this.props.screenProps.variables.G1AlmGav8}
                G1AlmGav9={this.props.screenProps.variables.G1AlmGav9}
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
    backgroundColor: "rgba(16,110,242,1)",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    margin: 10,
    fontSize: 40,
    color: "white",
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 10,
    height: 60,
    width: 60
  }
});