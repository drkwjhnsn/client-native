import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import UserSettings from './UserSettings.js';
import AdminSettings from './AdminSettings.js';

export default class Settings extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>Settings!!!</Text>
        <UserSettings />
        <AdminSettings />
      </ScrollView>
    );
  }
}

// <Button
//   title="View User Settings"
//   color="#000000" />
//   <Button
//     title="View Admin Settings"
//     color="#000000" />
