import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../helpers/colors';

export default class PendingOrders extends Component{
  static navigationOptions = {
    tabBarLabel:'Pending Order',
    tabBarIcon: ({ tintColor }) => (
      <View>
        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>
      </View>),
    activeColor: Colors.Red,
    inactiveColor: Colors.InactiveRed,
    barStyle: { backgroundColor: Colors.Orange },
  }
  
  render() {
    return(
      <View style={{ flex: 1, justifyContent: 'center' ,alignItems: 'center', }}> 
        <Text>This is PendingOrders screen</Text>
      </View>
    );
  }
   
}