import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NewOrder extends Component{
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center' ,alignItems: 'center', }}> 
        <Text>This is NewOrder screen</Text>
      </View>
    );
  }
   
}