import React, { useState } from 'react';
import { View, Button, Text} from 'react-native';

export default function bai4(){
    const [pressCount, setPressCount] = useState(0);
    return(
        <View style={{alignItems:'center', marginTop:20, marginBottom:50}}>
            <Text>You are pressed the button: {pressCount} time(s)</Text>
            <Button
            title={`Pressed ${pressCount} time(s)`}
            onPress={() => setPressCount(pressCount + 1)}/>
        </View>
    );
}