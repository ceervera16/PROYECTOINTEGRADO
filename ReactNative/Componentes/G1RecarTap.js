import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToastAndroid } from 'react-native';
import { block } from 'react-native-reanimated';

export default class G1RecarTap extends Component {


    constructor(props) {
        super(props);
        this.state = {
            info: true

        }
    }
    recargaTapones = () =>{
        
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
            <View style={styles.container}>
                <View style = {styles.components}>
                    <Text style={styles.text}>
                         {this.state.info}
                    </Text>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    components:{
        flex: 0.5,
        alignItems: 'stretch' 
    },
    text: {
        fontSize: 22,
        fontWeight: "bold",
        justifyContent: 'flex-start',
        alignItems: "center",
        justifyContent: 'center'
    }
});