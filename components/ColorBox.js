import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const ColorsBox = ({ color, setBackgroundColor }) => {
  return (
    <TouchableOpacity
      style={styles.boxContainer}
      onPress={() =>
        setBackgroundColor({
          red: color.red,
          green: color.green,
          blue: color.blue,
        })
      }
    >
      <View style={[styles.box, { backgroundColor: color.color }]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    padding: "1.5%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
  box: {
    width: "100%",
    borderRadius: 7,
    aspectRatio: 1,
  },
});

export default ColorsBox;
