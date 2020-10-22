import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import colors from '../config/colors';



const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.palette2,
          },
          headerTintColor : colors.palette3,
        }}
        >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Details" 
          component={MovieDetailsScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
)

export default AuthNavigator;