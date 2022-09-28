import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { Api } from "../../services";
import { CustomCatalogCard } from "../../components";

export function CatalogScreen() {
  const navigation = useNavigation();

  const [offset, setOffset] = React.useState(0);
  const [pokemonList, setPokemonList] = React.useState([]);
  const [isEnd, setIsEnd] = React.useState(false);

  React.useEffect(() => {
    handleGetPokemonList();
  }, []);

  const handleGetPokemonList = async () => {
    try {
      if (isEnd) return;
      const list = await Api.getPokemonList(offset);
      const { results } = list.data;
      setPokemonList(pokemonList.concat(results));
      setOffset(offset + results.length);
      setIsEnd(results.length < 10 ? true : false);
    } catch (error) {
      console.log("handleGetPokemonListError: ", error);
    }
  };

  const handleItemPress = (index) => {
    navigation.navigate("CatalogDetail", {
      index: index,
    });
  };

  const handleLoadmore = () => {
    handleGetPokemonList();
  };

  const keyExtractor = (item, index) => `${item?.name}${index}`;

  const renderItem = ({ item, index }) => (
    <CustomCatalogCard
      item={item}
      index={index + 1}
      onPress={() => handleItemPress(index + 1)}
    />
  );

  const renderItemSeparator = () => <View style={styled.separator} />;

  return (
    <View style={styled.container}>
      <StatusBar style="auto" />
      <FlatList
        data={pokemonList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={renderItemSeparator}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
        onEndReachedThreshold={1}
        onEndReached={handleLoadmore}
      />
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  separator: {
    width: 10,
    height: 10,
  },
});
