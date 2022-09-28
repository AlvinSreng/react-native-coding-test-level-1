import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { CustomPrimaryButton } from "../../components";

export function MainScreen() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("Register");
  };

  const handleOnCatalogPress = () => {
    navigation.navigate("Catalog");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomPrimaryButton
        title="Contact Us"
        onPress={handleOnPress}
        wrapperStyle={{ width: "50%" }}
      />
      <CustomPrimaryButton
        title="View Catalog"
        onPress={handleOnCatalogPress}
        wrapperStyle={{ width: "50%", marginTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
