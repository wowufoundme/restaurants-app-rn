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
        placeholder="Pasta... Pizza... Lasagna..."
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
    height: 40,
    borderRadius: CONSTANTS.BORDER_RADIUS,
    margin: 15,
    marginBottom: 0,
    flexDirection: 'row',
    overflow: 'hidden',
    elevation: 2
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
    color: CONSTANTS.WHITE,
    fontSize: 18
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 10,
    color: CONSTANTS.BLACK,
    fontFamily: CONSTANTS.FONT.REGULAR,
    fontSize: 14,
    backgroundColor: CONSTANTS.WHITE
  }
});

export default SearchBar;
