import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import Restaurant from './src/screens/Restaurant';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurant: Restaurant
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurants'
    }
  }
);

export default createAppContainer(navigator);
