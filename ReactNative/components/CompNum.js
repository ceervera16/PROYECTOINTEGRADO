import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import Popover from 'react-native-popover-view';

export default class CompNum extends React.Component {
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

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openPopover} ref={ref => this.touchable = ref} >
        <View style={styles.container}>
          <View style={{ backgroundColor: "#1B4F72" }}>
            <Text style={styles.textT}>{this.props.nom}</Text>
          </View>
          <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
            <Text style={styles.text}>{this.props.value != null ? this.props.value : 0}</Text>
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
    marginRight: 5,
  },
  container: {
    margin: 7,
    height: 150,
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
  text: {
    fontSize: 86,
    color: '#1B4F72',
  },
});