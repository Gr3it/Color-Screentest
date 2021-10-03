import React from "react";
import { View, StyleSheet } from "react-native";
import ColorsBox from "./ColorBox";

const Colors = ({ setBackgroundColor }) => {
  const colorSet = {
    row1: [
      { color: "#000000", red: 0, green: 0, blue: 0 },
      { color: "#333333", red: 51, green: 51, blue: 51 },
      { color: "#555555", red: 85, green: 85, blue: 85 },
      { color: "#777777", red: 119, green: 119, blue: 119 },
      { color: "#999999", red: 153, green: 153, blue: 153 },
      { color: "#BBBBBB", red: 187, green: 187, blue: 187 },
      { color: "#DDDDDD", red: 221, green: 221, blue: 221 },
      { color: "#FFFFFF", red: 255, green: 255, blue: 255 },
    ],
    row2: [
      { color: "#4455BB", red: 68, green: 85, blue: 187 },
      { color: "#1199EE", red: 17, green: 153, blue: 238 },
      { color: "#55CCFF", red: 85, green: 204, blue: 255 },
      { color: "#22CCDD", red: 34, green: 204, blue: 221 },
      { color: "#22AA99", red: 34, green: 170, blue: 153 },
      { color: "#66BB66", red: 102, green: 187, blue: 102 },
      { color: "#99CC66", red: 153, green: 204, blue: 102 },
      { color: "#CCDD33", red: 204, green: 221, blue: 51 },
    ],
    row3: [
      { color: "#7755CC", red: 119, green: 85, blue: 204 },
      { color: "#BB66CC", red: 187, green: 102, blue: 204 },
      { color: "#FF88AA", red: 255, green: 136, blue: 170 },
      { color: "#EE4444", red: 238, green: 68, blue: 68 },
      { color: "#FF7744", red: 255, green: 119, blue: 68 },
      { color: "#FFAA22", red: 255, green: 170, blue: 34 },
      { color: "#FFCC66", red: 255, green: 204, blue: 102 },
      { color: "#FFEE66", red: 255, green: 238, blue: 102 },
    ],
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {colorSet.row1.map((color) => (
          <ColorsBox
            key={color.color}
            color={color}
            setBackgroundColor={(color) => setBackgroundColor(color)}
          ></ColorsBox>
        ))}
      </View>
      <View style={styles.row}>
        {colorSet.row2.map((color) => (
          <ColorsBox
            key={color.color}
            color={color}
            setBackgroundColor={(color) => setBackgroundColor(color)}
          ></ColorsBox>
        ))}
      </View>
      <View style={styles.row}>
        {colorSet.row3.map((color) => (
          <ColorsBox
            key={color.color}
            color={color}
            setBackgroundColor={(color) => setBackgroundColor(color)}
          ></ColorsBox>
        ))}
      </View>
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
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default Colors;
