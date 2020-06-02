import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator initialRouteName="Home">
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
};

export default AppRoutes;
