import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

export default function IndexScreen() {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      {/* <Text>IndexScreen </Text> */}
      <Button title="Ekle" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title} >{item.title}</Text>
              <Feather name="trash" size={18} color="black" />
            </View>)
            ;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18,

  }

});
