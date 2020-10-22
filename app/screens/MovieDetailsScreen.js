import React from 'react';
import { StyleSheet, ImageBackground, Image, Text } from 'react-native';
import AppButon from '../components/AppButton';
import colors from '../config/colors';
import films from '../config/films';

function MovieDetailsScreen({ route, navigation }) {

    const {movieId} = route.params;

    return (
        <ImageBackground 
            source={films[movieId].image}
            style={styles.container}
            blurRadius={10}
        >
            <Text style={styles.title}>
                {films[movieId].title}
            </Text>
            <Text style={styles.synopsys}>
                {films[movieId].synopsys}
            </Text>
            <AppButon iconName="keyboard-backspace" onPress={ () => navigation.goBack() } />

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    title : {
        color : colors.white,
        fontSize : 50,
        margin : 30,
        marginTop : 30,
    },
    synopsys : {
        color : colors.white,
        fontSize : 20,
        margin : 10,
        marginHorizontal : 30,
        textAlign : "justify"
    }

})

export default MovieDetailsScreen;