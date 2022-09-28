import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const CustomDatePicker = ({
  value = "",
  placeholder,
  wrapperStyle,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[styled.wrapper, wrapperStyle]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={{ color: value ? "#231F20" : "#C4C4C4", fontSize: 16 }}>
        {value ? value : placeholder}
      </Text>
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  wrapper: {
    height: 50,
    width: "100%",
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    borderRadius: 10,
    paddingLeft: 10,
  },
});
