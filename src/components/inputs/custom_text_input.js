import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export const CustomTextInput = ({
  value,
  placeholder,
  maxLength,
  wrapperStyle,
  onChangeText,
  keyboardType,
}) => {
  return (
    <View style={[styled.inputWrapper, wrapperStyle]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#C4C4C4"
        maxLength={maxLength}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        style={{
          width: "100%",
          height: "100%",
          fontSize: 16,
          color: "#231F20",
        }}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  inputWrapper: {
    height: 50,
    width: "100%",
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    borderRadius: 10,
    paddingLeft: 10,
  },
});
