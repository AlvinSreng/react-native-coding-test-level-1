import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import _ from "lodash";
import { Api } from "../../services";

export const CatalogDetailScreen = () => {
  const route = useRoute();

  const [detail, setDetail] = React.useState({});

  React.useEffect(() => {
    handleGetPokemonDetail();
  }, []);

  const handleGetPokemonDetail = async () => {
    const res = await Api.getPokemonDetail(route.params?.index);
    setDetail(res.data);
  };

  const renderData = (data) =>
    _.isEmpty(data)
      ? null
      : data.map((e, index) => {
          return (
            <Text key={index.toString()} style={styled.subDescription}>{`${
              index + 1
            }: ${e.ability.name}`}</Text>
          );
        });

  const renderType = (data) =>
    _.isEmpty(data)
      ? null
      : data.map((e, index) => {
          return (
            <Text key={index.toString()} style={styled.subDescription}>{`${
              index + 1
            }: ${e.type.name}`}</Text>
          );
        });

  const renderStat = (data) =>
    _.isEmpty(data)
      ? null
      : data.map((e, index) => {
          return (
            <Text key={index.toString()} style={styled.subDescription}>{`${
              index + 1
            }: ${e.stat.name}`}</Text>
          );
        });

  const renderMove = (data) =>
    _.isEmpty(data)
      ? null
      : data.map((e, index) => {
          return (
            <Text key={index.toString()} style={styled.subDescription}>{`${
              index + 1
            }: ${e.move.name}`}</Text>
          );
        });

  return (
    <View style={styled.container}>
      <ScrollView contentContainerStyle={styled.scrollView}>
        <View style={styled.imageContainer}>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${route.params?.index}.png`,
            }}
            style={styled.image}
          />
        </View>
        <View style={styled.titleContainer}>
          <Text style={styled.title}>{detail?.name || ""}</Text>
        </View>
        <View style={styled.subTitleContainer}>
          <Text style={styled.subTitle}>More Detail</Text>
          <Text style={styled.description}>{`height: ${
            detail?.height || 0
          }`}</Text>
          <Text style={styled.description}>{`Experience: ${
            detail?.base_experience || 0
          }`}</Text>
          <Text style={styled.description}>Abilities:</Text>
          {renderData(detail?.abilities || [])}
          <Text style={styled.description}>Types:</Text>
          {renderType(detail?.types || [])}
          <Text style={styled.description}>Stats:</Text>
          {renderStat(detail?.stats || [])}
          <Text style={styled.description}>Moves:</Text>
          {renderMove(detail?.moves || [])}
        </View>
      </ScrollView>
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollView: {
    paddingBottom: 20,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: 100,
    height: 100,
  },
  titleContainer: {
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitleContainer: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#979797",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#979797",
    marginBottom: 5,
  },
  subDescription: {
    fontSize: 16,
    color: "#979797",
    marginBottom: 5,
    paddingLeft: 15,
  },
});
