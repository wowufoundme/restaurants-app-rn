import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View>
      <SearchBar
        value={searchValue}
        onChangeSearchValue={newSearchValue => setSearchValue(newSearchValue)}
        onPressDone={() => console.log('Done editing')}
      />
      <Text>This is the search screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
