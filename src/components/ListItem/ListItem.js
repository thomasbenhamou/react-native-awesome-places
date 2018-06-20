import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = ({ placeName, onItemSelected, placeImage }) => (
  <TouchableOpacity onPress={onItemSelected}>
    <View style={styles.listItem}>
      <Image source={placeImage} style={styles.placeImage} resizeMode="contain" />
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    maxHeight: 30,
    width: 30
  }
});

export default listItem;
