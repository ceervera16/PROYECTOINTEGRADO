import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Popover from 'react-native-popover-view';

export default class GMarcha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    }
  }

  openPopover = () => {
    this.setState({ isVisible: true });
  }

  closePopover = () => {
    this.setState({ isVisible: false });
  }

  colorComp() {
    return this.props.GMarcha ? "#39D009" : "#F44138"
  }

  iconComp() {
    return this.props.GMarcha ? "check" : "window-close"
  }

  textComp() {
    return this.props.GMarcha ? (this.props.english ? "On" : "Encendido") : (this.props.english ? "Off" : "Apagado")
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openPopover} ref={ref => this.touchable = ref} >
        <View style={[styles.container, { backgroundColor: this.colorComp() }]}>
          <Icon style={styles.icon} name={this.iconComp()} />
          <Text style={styles.text}>{this.props.english ? "Group" : "Grupo"} {this.props.num} - {this.textComp()}</Text>

          <Popover
            isVisible={this.state.isVisible}
            fromView={this.touchable}
            onRequestClose={this.closePopover}
          >
            <Text style={{ margin: 15 }}>
              {this.props.english
                ? "Group status on screen: in operation or stopped. It also shows its status in the navigator below"
                : "Estado del grupo en pantalla: en funcionamiento o parado. También se muestra su estado en el navegador de abajo"
              }
            </Text>
          </Popover>

        </View>
      </TouchableWithoutFeedback>
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
    backgroundColor: "#1B4F72",
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