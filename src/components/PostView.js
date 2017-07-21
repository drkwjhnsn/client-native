import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

export default class PostView extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View>
        <Text>PostView!!!</Text>
        <Text style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>Title:</Text>
        <Text style={{height: 40, borderWidth: 1, borderRadius: 5}} placeholder="Title">{this.props.navigation.state.params.title}</Text>
        <Text style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>Message:</Text>
        <Text style={{height: 100, borderWidth: 1, borderRadius: 5}} placeholder="Title">{this.props.navigation.state.params.text}</Text>
      </View>
    );
  }
}
