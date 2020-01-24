import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantCard = props => {
  const { restaurant } = props;
  return (
    <View style={styles.cardStyle}>
      <Text>{restaurant.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 150,
    width: 250,
    backgroundColor: '#ff0000',
    marginRight: 20
  }
});

export default RestaurantCard;
