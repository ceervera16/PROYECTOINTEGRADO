import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Image,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Overlay } from 'react-native-elements';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  toggleOverlay = () => {
    this.setState({ visible: !this.state.visible })
  };

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image source={require('../images/logo3.png')} style={{ height: 80, width: 80, margin: 5 }} />
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight style={styles.button} onPress={this.toggleOverlay}>
              <Icon style={styles.icon} name='information-variant' />
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.props.onModLang}>
              <Icon style={styles.icon} name='translate' />
            </TouchableHighlight>
          </View>
        </View>

        <Overlay isVisible={this.state.visible} onBackdropPress={this.toggleOverlay}>
          <Text style={styles.textoTitle}>¡Bienvenido a nuestra app!</Text>
          <Text style={styles.textoBody}>Esta aplicación está diseñada para mostrar en tiempo real los parámetros de cada grupo de máquinas. Pulsa cada componente y te mostrará una pequeña descripción de su funcionamiento.</Text>
          <Text style={styles.textoBottom}>Desarollada por: {'\n'} Guillermo Martínez Lozano {'\n'} guillermo_m_96@hotmail.com {'\n'}
                                                            {'\n'} Luis Contreras García {'\n'} luiscgarcia1999@gmail.com {'\n'}
                                                            {'\n'} Adrián Cervera San Sebastián {'\n'} ceervera16@gmail.com {'\n'}
                                                            {'\n'} Graciela Zamora Valdés  {'\n'} graciiela10@hotmail.com{'\n'}
                                                            {'\n'} Jose Antonio Delgado {'\n'} 
           </Text>
        </Overlay>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#1B4F72",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    margin: 10,
    fontSize: 40,
    color: "white",
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    margin: 10,
    height: 60,
    width: 60
  },
  textoTitle: {
    padding: 10,
    color: "#1B4F72",
    fontSize: 25,
    textAlign: "center",
    fontWeight: '800'
  },
  textoBody: {
    padding: 15,
    color: "#1B4F72",
    fontSize: 20,
    textAlign: "center"
  },
  textoBottom: {
    padding: 15,
    color: "#1B4F72",
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic"
  }
});