import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import { CONSTANTS } from '../common/Constants';

const RestaurantCard = props => {
  const { restaurant, navigation } = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Restaurant', { id: restaurant.id })}>
      <View style={styles.cardStyle}>
        <View>
          <Image
            source={{ uri: restaurant.image_url }}
            style={styles.imageStyle}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={styles.nameStyle}>{restaurant.name}</Text>
        </View>
        <View>
          <Text style={styles.detailedStyle}>
            {restaurant.rating} Stars, {restaurant.review_count} Reviews
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 150,
    width: 250,
    marginTop: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 100,
    width: 250
  },
  nameStyle: {
    fontFamily: CONSTANTS.FONT.BOLD,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    color: CONSTANTS.BLACK
  },
  detailedStyle: {
    color: '#777777',
    fontFamily: CONSTANTS.FONT.REGULAR
  }
});

export default withNavigation(RestaurantCard);
