import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Popover from 'react-native-popover-view';

export default class G1AlmGav extends React.Component {
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

  colorGav(value) {
    switch (value) {
      case 0:
        return "grey";

      case 1:
        return "#F44138";

      case 2:
        return "#128FE5";

      case 3:
        return "white";

      default: 
       return "#D4C817";
    }
  }

  colorText(value) {
    switch (value) {
      case 3:
        return "black";

      default:
        return "white";
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openPopover} ref={ref => this.touchable = ref} >
        <View style={[styles.container, { flex: 9 }]} >
          <View style={{ backgroundColor: "#1B4F72" }}>
            <Text style={styles.textT}>{this.props.english ? "Drawers" : "Gavetas"}</Text>
          </View>
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav1) }]}>
              <Text style={[styles.text, { color: this.colorText(this.props.G1AlmGav1) }]}>1</Text>
            </View>
            <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav2) }]}>
              <Text style={[styles.text, { color: this.colorText(this.props.G1AlmGav2) }]}>2</Text>
            </View>
            <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav3) }]}>
              <Text style={[styles.text, { color: this.colorText(this.props.G1AlmGav3) }]}>3</Text>
            </View>
          </View>
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav4) }]}>
              <Text style={[styles.text, { color: this.colorText(this.props.G1AlmGav4) }]}>4</Text>
            </View>
            <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav5) }]}>
              <Text style={[styles.text, { color: this.colorText(this.props.G1AlmGav5) }]}>5</Text>
            </View>
            <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav6) }]}>
              <Text style={[styles.text, { color: this.colorText(this.props.G1AlmGav6) }]}>6</Text>
            </View>
          </View>
          <View style={{ flex: 3, flexDirection: 'row' }}>
            <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav7) }]}>
              <Text style={[styles.text, { color: this.colorText(this.props.G1AlmGav7) }]}>7</Text>
            </View>
            <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav8) }]}>
              <Text style={[styles.text, { color: this.colorText(this.props.G1AlmGav8) }]}>8</Text>
            </View>
            <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav9) }]}>
              <Text style={[styles.text, { color: this.colorText(this.props.G1AlmGav9) }]}>9</Text>
            </View>
          </View>

          <Popover
            isVisible={this.state.isVisible}
            fromView={this.touchable}
            onRequestClose={this.closePopover}
          >
            <Text style={{ margin: 15 }}>
              {this.props.english
                ? "Warehouse drawer information:\n  · Empty in gray\n  · Filled with red caps in red\n  · Filled with blue caps in blue\n  · Fill with shredded material in white"
                : "Información de las gavetas del almacén:\n  · Vacía en color gris\n  · Llena con tapones rojos en rojo\n  · Llena con tapones azules en azul\n  · Llena con triturado en blanco"
              }
            </Text>
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
    marginBottom: 3,
    textAlign: 'center',
  },
  icon: {
    margin: 5,
    fontSize: 20,
    color: "white",
  },
  section: {
    flex: 1,
    justifyContent: 'center'
  }
});