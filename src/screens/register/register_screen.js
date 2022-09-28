import React from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  CustomTextInput,
  CustomDatePicker,
  CustomPrimaryButton,
} from "../../components";
import {
  checkIsEmail,
  checkEmptyText,
  checkOnlyString,
  dateFormatter,
} from "../../utils";

export function RegisterScreen() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [isDatePickerVisible, setIsDatePickerVisible] = React.useState(false);

  const handleChooseDate = () => {
    setIsDatePickerVisible(true);
  };

  const handleOnConfirm = (value) => {
    handleCloseModal();
    setDateOfBirth(dateFormatter(value));
  };

  const handleCloseModal = () => {
    setIsDatePickerVisible(false);
  };

  const handleOnUsernameChange = (value) => {
    setUsername(value);
  };

  const handleOnEmialChange = (value) => {
    setEmail(value);
  };

  const handleOnSubmit = () => {
    if (checkEmptyText(username)) {
      Alert.alert("please input username");
      return;
    }

    if (checkOnlyString(username)) {
      Alert.alert("username contant only string");
      return;
    }

    if (checkEmptyText(email)) {
      Alert.alert("please input email");
      return;
    }

    if (!checkIsEmail(email)) {
      Alert.alert("please input the correct email");
      return;
    }

    if (checkEmptyText(dateOfBirth)) {
      Alert.alert("please select your date of birth");
      return;
    }

    Alert.alert(
      `Username: ${username} \n Email: ${email} \n Date of Birth: ${dateOfBirth}`
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomTextInput
        placeholder="Username"
        wrapperStyle={{ marginTop: 10 }}
        value={username}
        maxLength={50}
        onChangeText={(value) => handleOnUsernameChange(value)}
      />
      <CustomTextInput
        placeholder="Email"
        wrapperStyle={{ marginTop: 10 }}
        value={email}
        onChangeText={(value) => handleOnEmialChange(value)}
        keyboardType="email-address"
      />
      <CustomDatePicker
        placeholder="Date of Birth"
        wrapperStyle={{ marginTop: 10 }}
        onPress={handleChooseDate}
        value={dateOfBirth}
      />
      <CustomPrimaryButton
        title="Submit"
        wrapperStyle={{ marginTop: 15 }}
        onPress={handleOnSubmit}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(value) => handleOnConfirm(value)}
        onCancel={handleCloseModal}
        themeVariant="light"
        maximumDate={new Date()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
});
