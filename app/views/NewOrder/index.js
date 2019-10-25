import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../helpers/colors';

export default class NewOrder extends Component{
  static navigationOptions = {
    tabBarLabel:'NewOrder',
    tabBarIcon: ({ tintColor }) => (
      <View>
        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>
      </View>),
    activeColor: Colors.Blue,
    inactiveColor: Colors.InactiveBlue,
    barStyle: { backgroundColor: Colors.LightBlue },
  }
  
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center' ,alignItems: 'center', }}> 
        <Text>This is NewOrder screen</Text>
      </View>
    );
  }
}