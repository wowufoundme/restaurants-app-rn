import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchApi, results, errors] = useResults();

  return (
    <View>
      <SearchBar
        value={searchValue}
        onChangeSearchValue={newSearchValue => setSearchValue(newSearchValue)}
        onPressDone={() => searchApi(searchValue)}
      />
      <Text>We have found {results.length} results</Text>
      <Text style={styles.errorMessage}>{errors}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: '#ff0000'
  }
});

export default SearchScreen;
