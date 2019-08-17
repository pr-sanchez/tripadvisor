import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
export default class TopFive extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TopFive</Text>
      </View>
    );
  }
}
