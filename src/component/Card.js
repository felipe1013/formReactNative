import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';

export default class Card extends Component {
    render() {
        return (
            <View  style={styles.cardContainer}>
                <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'green' }}>
                    <Image style={styles.img} source={{ uri: 'https://media-cdn.tripadvisor.com/media/photo-s/14/b3/3e/cf/restaurante-ispal.jpg' }} />
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>{this.props.name}</Text>
                    <Text style={styles.description}>{this.props.password} </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        height: 200,
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 300,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        backgroundColor: 'white',
        borderRadius: 10
    },
    img: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#555'
    },
    description: {
        color: '#555'
    }
});
