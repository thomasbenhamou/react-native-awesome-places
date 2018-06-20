import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button style={styles.button} title="Locate me" onPress={() => alert('locate')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    margin: 8
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '90%',
    height: 150
  },
  map: {
    width: '100%',
    height: 250
  }
});

export default PickLocation;
