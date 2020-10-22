import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../config/colors';


function ErrorMessage({ error }) {
    if (!error) return null
    return (
    <Text style={styles.error}> {error} </Text>
    );
}

const styles = StyleSheet.create({
    error : {
        color : colors.palette3,
        marginHorizontal : 20,
    },
})

export default ErrorMessage;