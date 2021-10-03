import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import Slider from "react-native-slider";

const SliderComponent = ({
  color,
  iconColor,
  BackgroundColor,
  setBackgroundColor,
  setAllowScroll,
}) => {
  return (
    <View style={styles.row}>
      <View style={[styles.icon, { backgroundColor: iconColor }]}></View>
      <Slider
        onSlidingStart={() => {
          setAllowScroll(false);
        }}
        onSlidingComplete={() => setAllowScroll(true)}
        style={styles.slider}
        minimumValue={0}
        maximumValue={255}
        onValueChange={(value) =>
          setBackgroundColor({ ...BackgroundColor, [color]: value })
        }
        step={1}
        minimumTrackTintColor={iconColor}
        thumbTintColor="#fff"
        thumbStyle={styles.thumb}
        value={BackgroundColor[color]}
      />
      <Text allowFontScaling={false} style={styles.text}>
        {BackgroundColor[color]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  row: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 22,
    width: 40,
    textAlign: "right",
  },
  slider: { width: "60%", height: 40 },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});

export default SliderComponent;
