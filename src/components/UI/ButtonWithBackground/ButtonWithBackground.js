import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

const buttonWithBackground = props => {
  const content = (
    <View
      style={[
        styles.button,
        { backgroundColor: props.color || 'transparent' },
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text>{props.children}</Text>
    </View>
  );
  if (props.disabled) {
    return content;
  }
  if (Platform.OS === 'android') {
    return <TouchableNativeFeedback onPress={props.onPress}>{content}</TouchableNativeFeedback>;
  }

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5
  },
  disabled: {
    backgroundColor: '#eee',
    borderColor: '#aaa'
  }
});

export default buttonWithBackground;
