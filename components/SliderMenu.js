import React from "react";
import { View, StyleSheet } from "react-native";
import SliderComponent from "./SliderComponent";

const SliderMenu = ({
  BackgroundColor,
  setBackgroundColor,
  setAllowScroll,
}) => {
  return (
    <View style={styles.container}>
      <SliderComponent
        color={"red"}
        iconColor={"#EE4444"}
        BackgroundColor={BackgroundColor}
        setBackgroundColor={(color) => setBackgroundColor(color)}
        setAllowScroll={(value) => setAllowScroll(value)}
      ></SliderComponent>
      <SliderComponent
        color={"green"}
        iconColor={"#66BB66"}
        BackgroundColor={BackgroundColor}
        setBackgroundColor={(color) => setBackgroundColor(color)}
        setAllowScroll={(value) => setAllowScroll(value)}
      ></SliderComponent>
      <SliderComponent
        color={"blue"}
        iconColor={"#4455BB"}
        BackgroundColor={BackgroundColor}
        setBackgroundColor={(color) => setBackgroundColor(color)}
        setAllowScroll={(value) => setAllowScroll(value)}
      ></SliderComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "space-around",
    alignContent: "center",
  },
});

export default SliderMenu;
