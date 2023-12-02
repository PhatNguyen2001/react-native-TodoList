import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationProps,
  BottomNavigationTab,
  Icon,
  IconElement,
} from '@ui-kitten/components';

import React from 'react';
import HomeScreen from 'src/view/Screens/HomeScreen';

const {Navigator, Screen} = createBottomTabNavigator();

const PersonIcon = (props: any): IconElement => (
  <Icon {...props} name="person-outline" />
);

const BellIcon = (props: any): IconElement => (
  <Icon {...props} name="bell-outline" />
);

const EmailIcon = (props: any): IconElement => (
  <Icon {...props} name="email-outline" />
);

const useBottomNavigationState = (initialState = 0): BottomNavigationProps => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return {selectedIndex, onSelect: setSelectedIndex};
};

const BottomTabBar = ({navigation, state}: any): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <BottomNavigationTab icon={PersonIcon} title="To DO List" />
      <BottomNavigationTab icon={BellIcon} title="Account" />
      <BottomNavigationTab icon={EmailIcon} title="Log Out" />
    </BottomNavigation>
  );
};

const TabNavigator = () => (
  <Navigator
    screenOptions={{headerShown: false}}
    tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeScreen} />
  </Navigator>
);

export default TabNavigator;
