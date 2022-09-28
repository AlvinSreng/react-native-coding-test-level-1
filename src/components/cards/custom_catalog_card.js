import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { CustomPrimaryButton } from "../buttons";

export const CustomCatalogCard = ({
  item,
  index = 0,
  wrapperStyle,
  onPress = () => {},
}) => {
  return (
    <View style={[styled.wrapper, wrapperStyle]}>
      <View style={styled.content}>
        <Text style={styled.title}>{item?.name || ""}</Text>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`,
          }}
          style={styled.imageStyle}
        />
      </View>
      <CustomPrimaryButton
        title="View"
        wrapperStyle={styled.button}
        onPress={onPress}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  wrapper: {
    height: 180,
    width: "100%",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  content: {
    height: 130,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageStyle: {
    width: 120,
    height: 120,
  },
  button: {
    width: 200,
    height: 40,
    alignSelf: "center",
  },
});
