import React from 'react';
import {Switch,SafeAreaView, View, StyleSheet, Text} from 'react-native';



export default class G2TempOk extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
    switchValue: false,
    tempOk: Boolean,
    };
  }

  Temperatura = (temp= Boolean) =>{
    if (temp==true){
        tempOk= true;
        return tempOk;
    }else{
        tempOk= false;
        return tempOk;
    } 

}
    
/*
    obtenerTemp = () => {
      fetch('proyectoverde.cgeafduyznpl.us-east-2.rds.amazonaws.com')
        .then((respuesta) => {
          if (respuesta.ok) {
            return respuesta.json();
          } else {
            console.log("Error en la conexion")
            alert("Error en la conexion")
          }
        })
        .then(respuestaJson => {
          this.setState({ tempOk: respuestaJson })
        })
        .catch(error => {
          console.log("Error de conexion: " + error);
          alert("Error de conexión: " + error);
        });
    }
    */

render() {
  return(
    <SafeAreaView>
<View style={styles.container}>
        <View styles={styles.item}>
    <Text style={styles.item}>Temperatura de trabajo alcanzada: {this.state.switchValue ? 'OK' :'NO'} {this.state.tempOk}</Text>
    <Switch style={styles.switch}
    value={this.state.switchValue}  
    onValueChange ={(switchValue)=>this.setState({switchValue})}/>
    </View>
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
          switch: {
            alignSelf: 'center'
          }
        });
        