import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ name }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        {/* You can add more components here, like a logo */}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;