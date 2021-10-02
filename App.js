import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  View,
  ScrollView,
} from "react-native";
import Colors from "./components/Colors";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function App() {
  const [MenuVisibility, setMenuVisibility] = useState(true);
  const [BackgroundColor, setBackgroudColor] = useState({
    red: 255,
    green: 255,
    blue: 255,
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        /* setBackgroudColor({ ...BackgroundColor, blue: 0 }); */
        setMenuVisibility(!MenuVisibility);
      }}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: `rgb(${BackgroundColor.red},${BackgroundColor.green},${BackgroundColor.blue})`,
          },
        ]}
      >
        <View
          style={
            MenuVisibility ? styles.scrollContainer : styles.scrollContainerHide
          }
          onStartShouldSetResponder={() => true}
        >
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToInterval={WIDTH - 15}
            decelerationRate="normal"
          >
            <View style={[styles.menuElements, { marginLeft: 20 }]}></View>
            <View style={[styles.menuElements, { marginRight: 20 }]}>
              <Colors></Colors>
            </View>
          </ScrollView>
        </View>
        <StatusBar hidden />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-end",
  },
  scrollContainer: {
    width: "100%",
    height: 200,
  },
  scrollContainerHide: {
    top: HEIGHT,
  },
  menuElements: {
    marginVertical: 20,
    marginRight: 10,
    borderRadius: 20,
    width: WIDTH - 40,
    backgroundColor: "#0000001A",
  },
});
