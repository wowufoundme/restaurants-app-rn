import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import Category from '../components/Category';
import { CONSTANTS } from '../common/Constants';

const SearchScreen = props => {
  const { navigation } = props;
  const [searchValue, setSearchValue] = useState('');
  const [searchApi, results, errors] = useResults();

  const filterResults = key => {
    return results.filter(result => {
      return result.price === key;
    });
  };

  return (
    <View style={styles.searchView}>
      <SearchBar
        value={searchValue}
        onChangeSearchValue={newSearchValue => setSearchValue(newSearchValue)}
        onPressDone={() => searchApi(searchValue)}
      />
      <Text style={styles.errorMessage}>{errors}</Text>
      <ScrollView>
        <Category title="More people, less expenditure" results={filterResults('$')} />
        <Category title="Right in your budget" results={filterResults('$$')} />
        <Category title="Heavy for your wallet" results={filterResults('$$$')} />
        <Category title="Ohhh My Gawwwwwwd!" results={filterResults('$$$$')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    flex: 1,
    backgroundColor: CONSTANTS.PRIMARY_BACKGROUND
  },
  errorMessage: {
    color: '#ff0000'
  }
});

export default SearchScreen;
