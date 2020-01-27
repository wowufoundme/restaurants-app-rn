import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantCard from '../common/RestaurantCard';
import { CONSTANTS } from '../common/Constants';

const Category = props => {
  const { results, title } = props;
  if (!results.length) {
    return null;
  }
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
    marginLeft: 10,
    paddingVertical: 30,
    paddingLeft: 10,
    backgroundColor: CONSTANTS.WHITE,
    borderRadius: 5,
    elevation: 5
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: 'Product Sans Regular',
    color: CONSTANTS.PRIMARY_COLOR
  }
});

export default Category;
