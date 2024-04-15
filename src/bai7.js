import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding:20,
        margin:20
    },
    label:{
        fontWeight:'bold',
        fontSize:18
    },
    input:{
        marginTop:10,
        backgroundColor:'rgba(0,0,0,0.1)',
        padding:10,
        borderRadius:5
    }
})

export default function bai7(){
    const [name, setName] = useState('');
    
    return(
        <View
        style={styles.container}>
            <Text style={styles.label}>What is your name?</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter your name'
            placeholderTextColor="rgba(0,0,0,0.5)"
            onChangeText={(Text) => setName(Text)}
            value={name}/>
            <Button
            title='Say Hello'
            onPress={() => {alert(`Hello, ${name}!`);
            setName("");}}/>
        </View>
    )
}