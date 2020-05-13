import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/Screens/IndexScreen';
import BlogScreen from './src/Screens/BlogScreen';
import CreateScreen from './src/Screens/CreateScreen';

import { Provider as BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Blog: BlogScreen,
    Create: CreateScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog',
    },
  }
);

const App = createAppContainer(navigator);

// @note  return own-custom component
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
