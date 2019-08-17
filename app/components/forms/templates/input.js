import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon } from "react-native-elements";
export default (inputTemplate = ({
  onChange,
  config: {
    placeholder,
    password,
    secureTextEntry,
    iconName,
    iconType,
    iconSize,
    iconColor
  }
}) => {
  return (
    <View style={styles.viewContainer}>
      <Input
        placeholder={placeholder}
        password={password}
        secureTextEntry={secureTextEntry}
        rightIcon={
          <Icon
            type={iconType}
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
        }
        onChangeText={v => onChange(v)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  viewContainer: { marginBottom: 15 }
});
