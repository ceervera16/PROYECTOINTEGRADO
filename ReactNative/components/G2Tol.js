import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

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
      <TouchableWithoutFeedback onPress={this.openPopover} ref={ref => this.touchable = ref} >
        <View style={styles.container}>
          <View style={{ backgroundColor: "#1B4F72" }}>
            <Text style={styles.textT}>{this.props.english ? "Hopper" : "Tolva"}</Text>
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
            <Text style={{ margin: 15 }}>{this.props.english ? "Hopper material level" : "Nivel de material de la tolva"}</Text>
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