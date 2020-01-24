import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { CONSTANTS } from '../common/Constants';

const SearchBar = props => {
  const { searchValue, onChangeSearchValue, onPressDone } = props;
  return (
    <View style={styles.searchContainer}>
      <Icon
        name="search"
        type="evilicons"
        containerStyle={styles.iconContainer}
        iconStyle={styles.iconStyle}
      />
      <TextInput
        value={searchValue}
        onChangeText={text => onChangeSearchValue(text)}
        placeholder="Search"
        autoCompleteType="off"
        autocorrect={false}
        style={styles.inputStyle}
        onEndEditing={() => onPressDone()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: CONSTANTS.GRAY,
    height: 40,
    borderRadius: CONSTANTS.BORDER_RADIUS,
    margin: 15,
    marginBottom: 0,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: CONSTANTS.PRIMARY_COLOR,
    justifyContent: 'center',
    borderTopLeftRadius: CONSTANTS.BORDER_RADIUS,
    borderBottomLeftRadius: CONSTANTS.BORDER_RADIUS
  },
  iconStyle: {
    color: CONSTANTS.BLACK,
    fontSize: 18
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10,
    color: CONSTANTS.BLACK,
    fontSize: 14
  }
});

export default SearchBar;
