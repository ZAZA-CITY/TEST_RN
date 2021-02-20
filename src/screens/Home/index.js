import Home from './Home';
import HomeDetail from './HomeDetail';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>

      <HomeStack.Screen
          name="喳·日常"
          component={Home}
          options={{ tabBarLabel: 'Home!' }}
        />
      <HomeStack.Screen name="HomeDetail" component={HomeDetail} />
    </HomeStack.Navigator>
  );
}


export default HomeStackScreen;


// https://reactnavigation.org/docs/hiding-tabbar-in-screens