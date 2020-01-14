import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import Card from './Card';

export default class Form extends Component {
    state = {
        name: '',
        email: '',
    }
    handleName = (e) => {
        this.setState({
            name: e.nativeEvent.text
        })
        console.log(this.state.name);
        //console.log(e.nativeEvent.text);
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white', width: '100%', padding: 20 }}>
                <TextInput onChange={this.handleName} style={styles.input} placeholder='Usuario'></TextInput>
                <TextInput onChangeText={(email) => this.setState({ email })} style={styles.input} placeholder='Correo eléctronico'></TextInput>
                <Button style={styles.button} title='enviar'
                    onPress={() => {
                        alert("touched");
                    }} />
                <Card name={this.state.name}
                    password={this.state.email}></Card>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#aaa',
        borderRadius: 10,
        height: 40,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: '#345678',
        borderRadius: 20
    },
});