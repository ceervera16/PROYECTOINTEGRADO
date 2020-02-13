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
import { ScrollView } from 'react-native-gesture-handler';

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
          <Image source={require('../images/robotBlanco.png')} style={styles.logo} />
          <View style={{ flexDirection: "row" }}>
            <TouchableHighlight style={styles.button} onPress={this.toggleOverlay}>
              <Icon style={styles.icon} name='information-variant' />
            </TouchableHighlight>
            <TouchableHighlight style={[styles.button, { marginRight: 15 }]} onPress={this.props.onModLang}>
              <Icon style={styles.icon} name='translate' />
            </TouchableHighlight>
          </View>
        </View>

        <Overlay isVisible={this.state.visible} onBackdropPress={this.toggleOverlay} height="85%">
          <View>
            <ScrollView>
              <Text style={styles.textoTitle}>¡Bienvenido a nuestra app!</Text>
              <Text style={styles.textoBody}>
                Esta aplicación está diseñada para mostrar, en tiempo real, los parámetros de cada grupo de máquinas de un robot de reciclaje de tapones de forma visual.
                Pulsa cada componente y te mostrará una pequeña descripción de su funcionamiento.
              </Text>
              <Text style={styles.textoBottom}>
                Desarollada por:
                {'\n'} Guillermo Martínez Lozano {'\n'} guillermo_m_96@hotmail.com {'\n'}
                {'\n'} Luis Alberto Contreras García {'\n'} luiscgarcia1999@gmail.com {'\n'}
                {'\n'} Adrián Cervera San Sebastián {'\n'} ceervera16@gmail.com {'\n'}
                {'\n'} Graciela Zamora Valdés {'\n'} graciiela10@hotmail.com {'\n'}
                {'\n'} Joan Banyuls Sánchez {'\n'} jobanyuls@gmail.com {'\n'} 
                {'\n'} Jose Antonio Delgado Muñoz {'\n'} jose5598vlc@gmail.com {'\n'}
              </Text>
              <Text style={styles.textoIcon}>
                {'\n'} Iconos diseñados por "xnimrodx" from "https://www.flaticon.es/".
              </Text>
            </ScrollView>
          </View>
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
    backgroundColor: '#4f8bf5',
    margin: 10,
    height: 60,
    width: 60,
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
    fontSize: 19,
    textAlign: "center"
  },
  textoBottom: {
    padding: 12,
    color: "#1B4F72",
    fontSize: 15,
    textAlign: "center",
    fontStyle: "italic"
  },
  textoIcon: {
    padding: 12,
    color: "#1B4F72",
    fontSize: 13,
    textAlign: "center",
    fontStyle: "italic"
  },
  logo: {
    height: 70,
    width: 70,
    marginLeft: 20,
  }
});