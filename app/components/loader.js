import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  loaderView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
export default class Loader extends Component {
  render() {
    return (
      <View style={this.props.container && styles.loaderView}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
