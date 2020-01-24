import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantCard from '../common/RestaurantCard';

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
          return <RestaurantCard restaurant={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#222',
    marginVertical: 20
  },
  titleStyle: {
    fontSize: 20
  }
});

export default Category;
