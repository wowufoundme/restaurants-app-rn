import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Category = props => {
  const { results, title } = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  titleStyle: {
    fontSize: 20
  }
});

export default Category;
