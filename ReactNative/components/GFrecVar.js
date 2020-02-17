import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import RNSpeedometer from 'react-native-speedometer';

import Popover from 'react-native-popover-view';

export default class GFrecVar extends React.Component {
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
            <Text style={styles.text}>{this.props.nom}</Text>
          </View>
          <View style={styles.meter}>
            <RNSpeedometer
              value={this.props.GFrecVar != null ? this.props.GFrecVar : 0}
              size={130}
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
  text: {
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
    margin: 7,
    justifyContent: 'center',
  },
  num: {
    fontSize: 40
  }
});