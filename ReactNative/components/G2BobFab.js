import React from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';



export default class G2BobFab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosG2BobFab: [],
    };
  }

  obtenerDato() {
    fetch('proyectoverde.cgeafduyznpl.us-east-2.rds.amazonaws.com')  
      .then((respuesta) => {
        if (respuesta.ok) {
          return respuesta.json();
        } else {
          console.log("Error en la conexion con proyectoverde.cgeafduyznpl.us-east-2.rds.amazonaws.com")
          alert("Error en la conexion con proyectoverde.cgeafduyznpl.us-east-2.rds.amazonaws.com")
        }
      })
      .then(respuestaJson => {
        this.setState({ 
          datosG2BobFab: respuestaJson }) 
      })
      .catch(error => {
        console.log("Error de conexion: " + error);
        alert("Error de conexión: " + error);
      });
    
    }


render() {
  return(
    <SafeAreaView>
        <View styles={styles.item}>
    <Text style={styles.item}>Cantidad de bobinas fabricadas: {this.state.datosG2BobFab}</Text>

    </View>
    </SafeAreaView>
  )
}
  }
  

        // estilos
        const styles = StyleSheet.create({
          container: {
            flex: 1,
          },
          item: {
            fontSize: 18,
            backgroundColor: 'grey',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
          },
          title: {
            fontSize: 32,
          },
        });
        
  