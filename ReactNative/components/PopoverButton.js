import React from 'react';
import { Text } from 'react-native';

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
      <Popover
        isVisible={this.state.isVisible}
        fromView={this.props.referedComp}
        onRequestClose={this.closePopover}
      >
        <Text style={{ margin: 15 }}>{this.props.texto}</Text>
      </Popover>
    )
  }
}