import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, ScrollView} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Settings from './src/settings/Settings.js';
import AdminSettings from './src/settings/AdminSettings.js';
import UserSettings from './src/settings/UserSettings.js';
import ModalBar from './src/ModalBar.js';
import CreatePosts from './src/CreatePosts.js';
import PostList from './src/PostList.js';
import PostPreview from './src/PostPreview.js';
import PostView from './src/PostView.js';
import SignIn from './src/SignIn.js';
import HomeScreen from './HomeScreen.js';
import { createStore } from 'redux';
import topReducer from './src/reducers/index.js';
import { sampleStore } from './scratchpad.js';

const store = createStore((state = sampleStore, action) => state);

class AwesomeProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Settings />
        <ModalBar />
        <CreatePosts />
        <PostList />
        <PostPreview />
        <PostView />
        <SignIn />
        <HomeScreen />
      </ScrollView>
    );
  }
}

// const AwesomeProject = StackNavigator({
//   Home: { screen: HomeScreen },
//   Settings: { screen: Settings },
//   AdminSettings: { screen: AdminSettings },
//   UserSettings: { screen: UserSettings },
//   PostView: { screen: PostView },
//   SignIn: { screen: SignIn },
//   CreatePosts: { screen: CreatePosts },
// });


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
