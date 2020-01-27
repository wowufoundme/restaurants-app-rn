import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';

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
    <View>
      <Text>{restaurant.name}</Text>
      <Image source={{ uri: restaurant.photos[0] }} style={{ height: 200, width: 400 }} />
      <Image source={{ uri: restaurant.photos[1] }} style={{ height: 200, width: 400 }} />
      <Image source={{ uri: restaurant.photos[2] }} style={{ height: 200, width: 400 }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Restaurant;
