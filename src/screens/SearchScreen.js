import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import Category from '../components/Category';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchApi, results, errors] = useResults();

  const filterResults = key => {
    return results.filter(result => {
      return result.price === key;
    });
  };

  return (
    <ScrollView>
      <SearchBar
        value={searchValue}
        onChangeSearchValue={newSearchValue => setSearchValue(newSearchValue)}
        onPressDone={() => searchApi(searchValue)}
      />
      <Text>We have found {results.length} results</Text>
      <Text style={styles.errorMessage}>{errors}</Text>
      <Category title="More people, less expenditure" results={filterResults('$')} />
      <Category title="Right in your budget" results={filterResults('$$')} />
      <Category title="Heavy for your wallet" results={filterResults('$$$')} />
      <Category title="Ohhh My Gawd!" results={filterResults('$$$$')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: '#ff0000'
  }
});

export default SearchScreen;
