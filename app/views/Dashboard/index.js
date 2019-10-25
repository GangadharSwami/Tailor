import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../helpers/colors';

export default class Dashboard extends Component{
  static navigationOptions = {
    tabBarLabel:'Dashboard',
    tabBarIcon: ({ tintColor }) => (
      <View>
        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
      </View>),
    activeColor: Colors.White,
    inactiveColor: Colors.InactiveGreen,
    barStyle: { backgroundColor: Colors.Green },
  }

  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center' ,alignItems: 'center', }}> 
        <Text>This is Dashboard screen</Text>
      </View>
    );
  }
   
}