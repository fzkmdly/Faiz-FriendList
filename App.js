import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FriendList from './components/FriendList';
import FriendDetail from './components/FriendDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FriendList">
        <Stack.Screen name="FriendList" component={FriendList} />
        <Stack.Screen name="FriendDetail" component={FriendDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
