import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RestaurantCard = props => {
  const { restaurant } = props;
  return (
    <View style={styles.cardStyle}>
      <View>
        <Image
          source={{ uri: restaurant.image_url }}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>
      <View>
        <Text>{restaurant.name}</Text>
      </View>
      <View>
        <Text>{restaurant.review_count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 150,
    width: 250,
    backgroundColor: '#ff0000',
    marginTop: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 100,
    width: 250
  }
});

export default RestaurantCard;
