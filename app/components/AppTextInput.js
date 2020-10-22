import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';
import defaultStyles from '../config/styles'

function AppTextInput({ icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons  name={icon} size={20} color={colors.palette3} style={styles.icon} />}
            <TextInput style={[defaultStyles.text, {width: "100%"}]} {...otherProps} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.palette2,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,

    },
    icon: {
        marginRight : 10,

    },
    
})

export default AppTextInput;