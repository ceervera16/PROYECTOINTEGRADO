import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

export default class CompOnOff extends React.Component {
  colorComp() {
    if (this.props.detectorUp && this.props.detectorDown)
      return "#F44138";

    if (!this.props.detectorUp && this.props.detectorDown)
      return "#7BE756";

    if (!this.props.detectorUp && !this.props.detectorDown)
      return "grey";

    if (this.props.detectorUp && !this.props.detectorDown)
      return "#FAD91F";
  }

  iconComp() {
    if (this.props.detectorUp && this.props.detectorDown)
      return "progress-full";

    if (!this.props.detectorUp && this.props.detectorDown)
      return "progress-two";

    if (!this.props.detectorUp && !this.props.detectorDown)
      return "progress-empty";

    if (this.props.detectorUp && !this.props.detectorDown)
      return "new";
  }

  textComp() {
    if (this.props.detectorUp && this.props.detectorDown)
      return this.props.english ? "Full" : "Llena";

    if (!this.props.detectorUp && this.props.detectorDown)
      return this.props.english ? "Ordinary level" : "Nivel normal";

    if (!this.props.detectorUp && !this.props.detectorDown)
      return this.props.english ? "Empty" : "Vacía";

    if (this.props.detectorUp && !this.props.detectorDown)
      return "Error";
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "rgba(16,110,242,1)" }}>
          <Text style={styles.textT}>{this.props.english ? "Hopper" : "Tolva"}</Text>
        </View>
        <View style={{ backgroundColor: this.colorComp(), alignItems: 'center' }}>
          <Icon style={styles.icon} name={this.iconComp()} />
          <Text style={styles.text}>{this.textComp()}</Text>
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
    marginRight: 5
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
    fontSize: 25,
    color: 'white',
    marginTop: 3,
    marginBottom: 12
  },
  icon: {
    margin: 20,
    fontSize: 40,
    color: "white",
  },
});