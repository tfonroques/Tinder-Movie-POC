import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function Screen({children}) {
    return (
        <View style={styles.screen}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor : colors.palette1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: "flex-end",
        flex: 1,
    }
})

export default Screen;