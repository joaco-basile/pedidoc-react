import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
    return (
        <View style={{padding: 10}}>
            <Text>Home</Text>
            <Icon name='home'/>
        </View>    
    )
}

export default HomeScreen;