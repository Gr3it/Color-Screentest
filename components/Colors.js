import React from "react";
import { View, StyleSheet } from "react-native";

const Colors = () => {
  colorSet = {
    row1: {
      color1: {
        red: 0,
        green: 0,
        blue: 0,
      },
      color2: {
        red: 51,
        green: 51,
        blue: 51,
      },
      color3: {
        red: 85,
        green: 85,
        blue: 85,
      },
      color4: {
        red: 119,
        green: 119,
        blue: 119,
      },
      color5: {
        red: 153,
        green: 153,
        blue: 153,
      },
      color6: {
        red: 187,
        green: 187,
        blue: 187,
      },
      color7: {
        red: 221,
        green: 221,
        blue: 221,
      },
      color8: {
        red: 255,
        green: 255,
        blue: 255,
      },
    },
    row2: {
      color1: {
        red: 68,
        green: 85,
        blue: 187,
      },
      color2: {
        red: 17,
        green: 153,
        blue: 238,
      },
      color3: {
        red: 85,
        green: 204,
        blue: 255,
      },
      color4: {
        red: 34,
        green: 204,
        blue: 221,
      },
      color5: {
        red: 34,
        green: 170,
        blue: 153,
      },
      color6: {
        red: 102,
        green: 187,
        blue: 102,
      },
      color7: {
        red: 153,
        green: 204,
        blue: 102,
      },
      color8: {
        red: 204,
        green: 221,
        blue: 51,
      },
      row3: {
        color1: {
          red: 119,
          green: 85,
          blue: 204,
        },
        color2: {
          red: 187,
          green: 102,
          blue: 204,
        },
        color3: {
          red: 255,
          green: 136,
          blue: 170,
        },
        color4: {
          red: 238,
          green: 68,
          blue: 68,
        },
        color5: {
          red: 255,
          green: 119,
          blue: 68,
        },
        color6: {
          red: 255,
          green: 170,
          blue: 34,
        },
        color7: {
          red: 255,
          green: 204,
          blue: 102,
        },
        color8: {
          red: 255,
          green: 238,
          blue: 102,
        },
      },
    },
  };
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default Colors;
