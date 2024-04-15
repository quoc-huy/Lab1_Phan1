import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

const Button=(props)=>(
    <TouchableOpacity
    onPress={props.onPress}
    style={{backgroundColor:'#ff637c',
        alignSelf:'center',
        padding:10,
        margin:10,
        ...props.buttonStyle,}}>
        <Text style={{color:'#ffff'}}>{props.text}</Text>
    </TouchableOpacity>
);

export default function bai3(){
    return(
        <View
        style={{flex:1,
            justifyContent:'center', margin:40}}>
            <Button Text="Say Hello!" onPress={() => alert("Hello!")}/>
            <Button Text="Say Goodbye!" onPress={() => alert("Goodbye!")}
            buttonStyle={{backgroundColor:'#4dc2c2'}}/>
        </View>
    );
}