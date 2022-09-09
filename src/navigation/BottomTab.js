import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Inicio' component={ HomeScreen } />
            <Tab.Screen name='Perfil' component={ ProfileScreen } />
        </Tab.Navigator>
    );
}

export default BottomTab;