import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export function MainScreen() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button title="Contact Us" onPress={handleOnPress} />
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
