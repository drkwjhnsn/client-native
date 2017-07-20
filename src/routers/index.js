import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomeScreen from '../components/HomeScreen.js';
import SignIn from '../components/SignIn.js';
import Settings from '../components/settings/Settings.js';
import CreatePost from '../components/CreatePost.js';

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: { title: 'Settings' }
  },
});
const SignInStack = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: { title: 'Sign in' }
  },
});
const CreatePostStack = StackNavigator({
  CreatePost: {
    screen: CreatePost,
    navigationOptions: { title: 'Create Post'}
  }
});

const Drawer = DrawerNavigator({
  Home: { screen: HomeScreen },
  SignInStack: {
    screen: SignInStack
  },
  SettingsStack: {
    screen: SettingsStack,
  },
  CreatePostStack: {
    screen: CreatePostStack,
  },
});

export { Drawer };
