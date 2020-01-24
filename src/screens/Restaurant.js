import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';

const Restaurant = props => {
  const [restaurant, setRestaurant] = useState(null);
  const { navigation } = props;
  const getId = navigation.getParam('id');

  const getRestaurant = async id => {
    const response = await yelp.get(`/${id}`);
    console.log(response.data.name);
    setRestaurant(response.data);
    console.log(restaurant.name);
  };

  useEffect(() => {
    getRestaurant(getId);
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      {/* <Image source={{ uri: restaurant.image_url }} style={{ height: 200, width: 400 }} /> */}
      <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Restaurant;
