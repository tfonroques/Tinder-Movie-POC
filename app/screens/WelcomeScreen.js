import React, { useState } from "react";
import {  StatusBar, View, StyleSheet } from "react-native";

import AppButon from "../components/AppButton";
import MovieTile from "../components/MovieTile";
import Screen from "../components/Screen";
import colors from "../config/colors";
import films from "../config/films";
import routes from "../navigation/routes";




function WelcomeScreen ({ navigation }) {
const [id, setId] = useState(films[0].id);

  return (
    <Screen style={styles.background}>
      <StatusBar 
        barStyle = "light-content" 
        hidden = {false} 
        backgroundColor = "#00BCD4" 
        translucent = {true}
      />
      <View style={styles.movieTileContainer}>
      <MovieTile 
        onPress={() => navigation.navigate(routes.MOVIE_DETAILS , { movieId : id })} 
        id={id} 
      />
      </View>
      <View style={styles.footer}>
        <AppButon 
          onPress={() => console.log("it works x!")} 
          iconName="delete"
          colorIcon="danger" />

        <AppButon
          onPress={() => id === 2 ? setId(0) :setId(id + 1) }
          iconName="check"
          colorIcon="validation" />


        <AppButon
          onPress={() => console.log("it works blacklist!")}
          iconName="skull"
          colorIcon="black" />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.palette1,
  },
  footer: {
    height: 100,
    width: "100%",
    backgroundColor: colors.palette2,
    flexDirection: "row",
    padding: 20,
    alignItems: "center",

  },
  header: {
    height: 100,
    width: "100%",
    backgroundColor: colors.secondary,
  },
  movieTileContainer : {
    flex : 1 ,
    justifyContent : "center",
    alignItems : "center",
    paddingHorizontal : 15,
    paddingBottom : 15,
  }
});

export default WelcomeScreen;
