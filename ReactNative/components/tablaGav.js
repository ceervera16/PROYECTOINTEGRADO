import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToastAndroid } from 'react-native';
import { block } from 'react-native-reanimated';
import G1AlmGav from './G1AlmGav';

export default class TablaGAv extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // infoMaquina = () => {
    //   fetch(this.DB_URL+'/usuaris?userName='+this.state.user+'&contrasenya='+this.state.password)
    //     .then(resp => resp.json())
    //     .then(data => {
    //       if (data.length>0) {
    //         this.props.navigation.navigate('Home', {user: data[0]});
    //       } else {
    //         ToastAndroid.showWithGravity('Usuario o contraseña incorrectos', ToastAndroid.LONG, ToastAndroid.TOP);
    //       }
    //     });
    // }


    render() {
        return (
            <View >
                <View>
                    <View  style={styles.tabla}>
                        <View>
                            <G1AlmGav valor={this.props.g1} gaveta="1"></G1AlmGav>
                        </View>
                        <View>
                            <G1AlmGav valor={this.props.g2} gaveta="2"></G1AlmGav>
                        </View>
                        <View>
                            <G1AlmGav valor={this.props.g3} gaveta="3"></G1AlmGav>
                        </View>
                    </View>
                    <View  style={styles.tabla}>
                        <View>
                            <G1AlmGav valor={this.props.g4} gaveta="4"></G1AlmGav>
                        </View>
                        <View>
                            <G1AlmGav valor={this.props.g5} gaveta="5"></G1AlmGav>
                        </View>
                        <View>
                            <G1AlmGav valor={this.props.g6} gaveta="6"></G1AlmGav>
                        </View>
                    </View>
                    <View  style={styles.tabla}>
                        <View style>
                            <G1AlmGav valor={this.props.g7} gaveta="7"></G1AlmGav>
                        </View>
                        <View>
                            <G1AlmGav valor={this.props.g8} gaveta="8"></G1AlmGav>
                        </View>
                        <View>
                            <G1AlmGav valor={this.props.g9} gaveta="9"></G1AlmGav>
                        </View>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    components: {
        flex: 1,
        alignItems: 'stretch'
    },
    tabla: {
        flexDirection: "row"
    },
    celda: {
        margin: 4
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        justifyContent: 'flex-start',
        alignItems: "center",
        justifyContent: 'center'
    },

});