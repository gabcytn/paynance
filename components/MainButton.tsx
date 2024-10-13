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
  onPress: () => void;
  touchOpacity: number;
};
const MainButton = ({ text, styles, touchOpacity, onPress }: PropTypes) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={touchOpacity}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;
