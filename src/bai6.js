import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container:{ backgroundColor:'#ffff', marginTop:50},
    box:{
        width:70,
        height:70,
        justifyContent:'center',
        alignItems:'center',
        margin:20
    }
})

const Square = ({text, bgColor = "#7ce0f9"}) => (
    <View style={[styles.box, {backgroundColor:bgColor}]}>
        <Text>{text}</Text>
    </View>
);

const data =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
export default function bai6(){
    return(
        <ScrollView style={styles.container}>
            {data.map((item,index)=>(<Square key={item} text={`Square ${index + 1}`}/>))}
        </ScrollView>
    );
}