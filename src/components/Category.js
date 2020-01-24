import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantCard from '../common/RestaurantCard';
import { CONSTANTS } from '../common/Constants';

const Category = props => {
  const { results, title } = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      {results.length === 0 ? (
        <Text style={{ marginTop: 10 }}>Sorry no restaurants found in this category.</Text>
      ) : null}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
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
    marginVertical: 5,
    padding: 10
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: 'Product Sans Regular',
    color: CONSTANTS.PRIMARY_COLOR
  }
});

export default Category;
