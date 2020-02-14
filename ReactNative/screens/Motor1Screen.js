import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

import GMarcha from '../components/GMarcha';
import GFrecVar from '../components/GFrecVar';
import CompOnOff from '../components/CompOnOff';
import G1Almgav from '../components/G1AlmGav';
import Header from '../components/Header';

export default class Motor1Screen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Header onModLang={this.props.screenProps.onModLang} english={this.props.screenProps.english}/>
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
                  textoPopover={this.props.screenProps.english ? "Speed ​​of the tape drive" : "Velocidad del variador de la cinta"}
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
                  textoPopover={this.props.screenProps.english ? "Crusher running or stopped" : "Trituradora en marcha o parada"}
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
                  textoPopover={this.props.screenProps.english ? "Refill of caps in operation or stopped" : "Recarga de tapones en funcionamiento o parada"}
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