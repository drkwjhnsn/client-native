import React from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';

import PostPreview from './PostPreview.js';

import data from '../../scratchpad.js';
var posts = data.subredditPosts;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log(posts);
  }

  // subreddit axios calls

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FlatList
          data={posts}
          renderItem={ ({item}) => {
            return (
            <TouchableOpacity>
              <PostPreview text={item.text} title={item.title} />
            </TouchableOpacity>
            )}
          }
        />
      </View>
    );
  }
}
