import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = ({ places, onSelect }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemSelected={() => onSelect(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
