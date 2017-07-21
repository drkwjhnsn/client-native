import React from 'react';
import { Text, View, Image } from 'react-native';

export default PostPreview = (props) => (
  <View>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Image source={{uri: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}}
      style={{width: 50, height: 50}} />
    <Text> {props.text} </Text>
    <Text>Upvotes: {props.upvotes}</Text>
    </View>
  </View>
);
