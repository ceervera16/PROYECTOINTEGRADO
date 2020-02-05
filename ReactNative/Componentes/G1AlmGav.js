import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToastAndroid } from 'react-native';
import { block, color } from 'react-native-reanimated';

export default class G1AlmGav extends Component {


    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "",
        }
    }

    cambiarColor = () => {
        switch (this.props.valor) {
            case 0:
                this.setState({ backgroundColor: "grey" });
                break;

            case 1:
                this.setState({ backgroundColor: "red" });
                break;
            case 2:
                this.setState({ backgroundColor: "blue" });
                break;
            case 3:
                this.setState({ backgroundColor: "black" });
                break;
        }
    }

    componentDidMount() {
        this.cambiarColor();
    }


    render() {
        return (
            <View>
                <View style={{ backgroundColor: this.state.backgroundColor}}>
                    <Text style={styles.components}>
                        {this.props.gaveta}
                    </Text>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    components: {
        width: '100%',
        fontSize: 25,
        color: 'white',
        margin: 5,
        marginLeft:30,
        marginRight: 30   

        
    }
});