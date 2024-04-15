import React, { useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        margin:5
    },
    box:{
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center'
    }
})

const Square = ({text, bgColor = "#7ce0f9"}) => (
    <View style={[styles.box, {backgroundColor:bgColor}]}>
        <Text>{text}</Text>
    </View>
)

export default function bai5(){
    return(
        <View style={styles.container}>
            <Square text="Square 1"/>
            <Square text="Square 2" bgColor="#4dc2c2"/>
            <Square text="Square 3" bgColor="#ff637c"/>
        </View>
    );
}
