import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

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
      case 1:
        return "#FF0000";

      case 2:
        return "#0000FF";

      case 3:
        return "#FF9A9C";

      case 4:
        return "#9CCFFF";

      default:
        return "#78767C";
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.openPopover} ref={ref => this.touchable = ref} >
        <View style={[styles.container, { flex: 9 }]} >
          <View style={{ backgroundColor: "#1B4F72" }}>
            <Text style={styles.textT}>{this.props.english ? "Drawers" : "Gavetas"}</Text>
          </View>
          <View style={{ margin: 2, backgroundColor: 'white', flex: 9 }}>
            <View style={{ flex: 3, flexDirection: 'row' }}>
              <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav1) }]}>
                <Text style={styles.text}>1</Text>
              </View>
              <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav2) }]}>
                <Text style={styles.text}>2</Text>
              </View>
              <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav3) }]}>
                <Text style={styles.text}>3</Text>
              </View>
            </View>
            <View style={{ flex: 3, flexDirection: 'row' }}>
              <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav4) }]}>
                <Text style={styles.text}>4</Text>
              </View>
              <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav5) }]}>
                <Text style={styles.text}>5</Text>
              </View>
              <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav6) }]}>
                <Text style={styles.text}>6</Text>
              </View>
            </View>
            <View style={{ flex: 3, flexDirection: 'row' }}>
              <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav7) }]}>
                <Text style={styles.text}>7</Text>
              </View>
              <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav8) }]}>
                <Text style={styles.text}>8</Text>
              </View>
              <View style={[styles.section, { backgroundColor: this.colorGav(this.props.G1AlmGav9) }]}>
                <Text style={styles.text}>9</Text>
              </View>
            </View>
          </View>

          <Popover
            isVisible={this.state.isVisible}
            fromView={this.touchable}
            onRequestClose={this.closePopover}
          >
            <Text style={{ margin: 15 }}>
              {this.props.english
                ? "Warehouse drawer information:\n  · Empty in gray\n  · Filled with red caps in red\n  · Filled with blue caps in blue\n  · Filled with red shredded material in light red\n  · Filled with blue shredded material in light blue"
                : "Información de las gavetas del almacén:\n  · Vacía en color gris\n  · Llena con tapones rojos en rojo\n  · Llena con tapones azules en azul\n  · Llena con triturado rojo en rojo claro\n  · Llena con triturado azul en azul claro"
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
    margin: 20,
    fontSize: 25,
    color: 'white',
    marginTop: 3,
    marginBottom: 3,
    textAlign: 'center',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    margin: 2,
  }
});