import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import Popover from 'react-native-popover-view';

export default class PopoverButton extends React.Component {
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
      <TouchableWithoutFeedback onPress={this.openPopover} ref={ref => this.container = ref} >
        <Popover
          isVisible={this.state.isVisible}
          fromView={this.container}
          onRequestClose={this.closePopover}
        >
          <Text style={{ margin: 15 }}>{this.props.textoPopover}</Text>
        </Popover>
      </TouchableWithoutFeedback>
    )
  }
}