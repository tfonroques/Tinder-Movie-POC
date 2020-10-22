import React from "react";
import { ImageBackground, View, StyleSheet, Text, TouchableOpacity } from "react-native";


import borders from "../config/borders";
import colors from "../config/colors";
import films from "../config/films";


function MovieTile({onPress, id }) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
    >
      <ImageBackground
        style={styles.previewMovie}
        imageStyle={{ borderRadius: borders.radius }}
        source={films[id].image}
      >
        <View style={styles.shortInfo}>
          <Text style={styles.title}>{films[id].title}</Text>
          <Text style={styles.subtile} numberOfLines={2}>
            {films[id].synopsys}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    borderRadius: borders.radius,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
    overflow: "hidden",
  },
  previewMovie: {
    flex: 1,
    justifyContent: "flex-end",
  },
  shortInfo: {
    backgroundColor: 'rgba(100,100,100,0.7)',
  },
  subtile: {
    color: colors.light,
    fontSize: 20,
    marginHorizontal: 20,
    marginRight: 50,
    marginBottom: 20,
    
  },
  title: {
    margin: 20,
    fontSize: 28,
    color: colors.light,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default MovieTile;
