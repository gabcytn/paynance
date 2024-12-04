import {
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import constants from "@/constants";
type PropTypes = {
  placeholder: string;
  isSecure: boolean;
  isError?: boolean;
  errorMessage?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  styles: {
    inputContainer: StyleProp<ViewStyle>;
  };
};
const InputBox = ({
  placeholder,
  isSecure,
  isError,
  errorMessage,
  styles,
  value,
  setValue,
}: PropTypes) => {
  return (
    <>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: isError
              ? "red"
              : value
                ? constants.colors.mainColor
                : constants.colors.softBlack,
            borderWidth: 1.25,
          },
        ]}
      >
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          secureTextEntry={isSecure}
          autoCapitalize="none"
          style={{ fontFamily: "Poppins" }}
        />
      </View>
      {isError ? (
        <Text
          style={{
            textAlign: "left",
            fontFamily: "Poppins",
            fontSize: 10,
            color: "red",
            width: 250,
            marginLeft: 5,
          }}
        >
          {errorMessage}
        </Text>
      ) : null}
    </>
  );
};

export default InputBox;
