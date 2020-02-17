import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Popover from 'react-native-popover-view';

export default class CompOnOff extends React.Component {
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
    return this.props.value ? "#39D009" : "#F44138"
  }

  iconComp() {
    return this.props.value ? this.props.icon1 : this.props.icon0
  }

  textComp() {
    return this.props.value ? this.props.text1 : this.props.text0
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openPopover} ref={ref => this.touchable = ref} >
        <View style={styles.container}>
          <View style={{ backgroundColor: "#1B4F72" }}>
            <Text style={styles.textT}>{this.props.nom}</Text>
          </View>
          <View style={{ backgroundColor: this.colorComp(), alignItems: 'center' }}>
            <Icon style={styles.icon} name={this.iconComp()} />
            <Text style={styles.text}>{this.textComp()}</Text>
          </View>

          <Popover
            isVisible={this.state.isVisible}
            fromView={this.touchable}
            onRequestClose={this.closePopover}
          >
            <Text style={{ margin: 15 }}>{this.props.textoPopover}</Text>
          </Popover>

        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  textT: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#1B4F72",
    margin: 3,
    marginLeft: 5,
    marginRight: 5
  },
  container: {
    margin: 7,
    height: 150,
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
  text: {
    margin: 13,
    fontSize: 25,
    color: 'white',
    marginTop: 3,
  },
  icon: {
    margin: 13,
    fontSize: 40,
    color: "white",
  },
});