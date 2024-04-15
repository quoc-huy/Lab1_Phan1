import React from 'react';
import { StyleSheet, Button, View, TouchableOpacity, Text} from 'react-native';

export default function bai2() {
  return (
    <View style={StyleSheet.container}> 
        <Button title="Button 1" onPress={()=> alert("Hello!")} />
        <TouchableOpacity 
        onPress={()=> alert("Hello 2!")}
        style={StyleSheet.Button}>
            <Text style={styles.Text}>Button 2</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    Button:{
        backgroundColor:'blue',
        marginTop:10,
        alignItems:'center',
        padding:10
    },
    Text:{
        color:'black',
        fontSize:18
    }
})