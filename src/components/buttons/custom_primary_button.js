import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const CustomPrimaryButton = ({
  title,
  wrapperStyle,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[styled.wrapper, wrapperStyle]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  wrapper: {
    height: 50,
    width: "100%",
    backgroundColor: "#D0D0D0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingLeft: 10,
  },
});
