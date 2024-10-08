import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
type PropTypes = {
  text: string;
  styles: {
    button: StyleProp<ViewStyle>;
    text: StyleProp<TextStyle>;
  };
};
const MainButton = ({ text, styles }: PropTypes) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
