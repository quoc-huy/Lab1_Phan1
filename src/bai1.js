import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function bai1() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>chao ban</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:100,
        height:100,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:5
    },
    textStyle:{
        color:'black'
    }
})