import yelp from '../api/yelp';
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CONSTANTS } from '../common/Constants';

const Restaurant = props => {
  const { navigation } = props;
  const rest = navigation.getParam('restaurant');
  const [restaurant, setRestaurant] = useState(null);
  const getId = rest.id;

  useEffect(() => {
    console.log(getId);
    getRestaurant(getId);
  }, []);

  const getRestaurant = async id => {
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  if (!restaurant) {
    return null;
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.restaurantTitle}>{restaurant.name}</Text>
      <View style={styles.locationContainer}>
        <Icon name="location-on" type="evilicons" iconStyle={styles.iconStyle} />
        <Text>
          Location: {restaurant.location.display_address[0]},{' '}
          {restaurant.location.display_address[1]}
        </Text>
      </View>
      <Text>Phone: {restaurant.display_phone}</Text>
      <Image source={{ uri: restaurant.photos[0] }} style={{ height: 200, width: 400 }} />
      <Image source={{ uri: restaurant.photos[1] }} style={{ height: 200, width: 400 }} />
      <Image source={{ uri: restaurant.photos[2] }} style={{ height: 200, width: 400 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10
  },
  iconStyle: {
    fontSize: 20,
    paddingHorizontal: 3,
    color: CONSTANTS.PRIMARY_COLOR
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  restaurantTitle: {
    fontSize: 24,
    fontFamily: CONSTANTS.FONT.BOLD
  }
});

export default Restaurant;
