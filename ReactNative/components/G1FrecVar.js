
import { StyleSheet, TextInput, Text, View, Slider } from 'react-native';
import React, { Component } from './node_modules/react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 25,
            productos:undefined
        };
    }

    componentDidMount(){
        fetch("")
          .then((response)=> response.json())
          .then((json) => {this.setState({productos: json})})
          .catch((error)=> Console.log(error))
        }
      
      componentDidUpdate(){
        fetch("")
          .then((response)=> response.json())
          .then((json) => {this.setState({productos: json})})
          .catch((error)=> Console.log(error))
      }

    cambiarValor(valor) {
        console.log(valor);
        this.setState({ value: valor })

    }
    ponerValor = (number) => {
        console.log(number);
        let valorAGuardar = (number === '' ? 0 : parseFloat(number));
        this.setState({ value: valorAGuardar });

    }

    render() {
        const valor = this.state.value;
        return (
            <View style={styles.componente}>
                <View style={{ flex: 0.5 }} >
                    <Text style={styles.text}>Velocidad: {this.state.value}</Text>

                    <TextInput
                        style={styles.textInput}
                        onChangeText={(v) => this.ponerValor(v)}
                        value={"" + this.state.value}
                    />
                </View>
                <View style={styles.slider}>
                    <Slider
                        step={2}
                        maximumValue={60}
                        onValueChange={(v) => this.cambiarValor(v)}
                        value={valor}
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slider: {
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        width:300,
        top:50,
        backgroundColor:'white',
        position:'absolute'
    },
    componente: {
        flex: 1,
        backgroundColor: 'white',
        color: 'black',
        

    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        position:'absolute',
        borderBottomColor:'black'

    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 100,
        margin: 3,
        fontSize: 15,
        color: 'black',
        flexDirection: 'column',
        position:'absolute',
        left:200,
        fontSize:19,
        textAlign:'center',
    }
});