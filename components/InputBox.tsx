import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";
import colors from "@/colors";
type PropTypes = {
  placeholder: string;
  isSecure: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  styles: {
    inputContainer: StyleProp<ViewStyle>;
  };
};
const InputBox = ({
  placeholder,
  isSecure,
  styles,
  value,
  setValue,
}: PropTypes) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[
        styles.inputContainer,
        {
          borderColor: isFocused ? colors.mainColor : colors.softBlack,
          borderWidth: isFocused ? 2 : 1,
        },
      ]}
    >
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        style={{ fontFamily: "Poppins" }}
      />
    </View>
  );
};

export default InputBox;

const styles2 = StyleSheet.create({});
