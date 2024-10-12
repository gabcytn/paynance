import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

type PropTypes = {
  placeholder: string;
  isSecure: boolean;
  onFocus: () => {};
  onBlur: () => {};
  styles: {
    container: StyleProp<ViewStyle>;
  };
};
const InputBox = ({
  placeholder,
  isSecure,
  onFocus,
  onBlur,
  styles,
}: PropTypes) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isSecure}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({});
