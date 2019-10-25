import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../helpers/colors';
import styles from './styles';
import { Input, Button } from 'react-native-elements';

export default class NewOrder extends Component{
  static navigationOptions = {
    tabBarLabel:'New Order',
    tabBarIcon: ({ tintColor }) => (
      <View>
        <Icon style={[{color: tintColor}]} size={25} name={'cart-plus'}/>
      </View>),
    activeColor: Colors.Blue,
    inactiveColor: Colors.InactiveBlue,
    barStyle: { backgroundColor: Colors.LightBlue },
  }

  _renderIcon = (name) => {
    return(
      <Icon
        name={name}
        size={20}
        color='#2089dc'
      />
    )
  }

  render() {
    return(
      <View style={ styles.mainContainer }> 
        <ScrollView>
          <View style={ styles.clientNameContainer }>
            <Input
              placeholder='Select Client / Enter name'
              leftIcon={ this._renderIcon("account") }
              containerStyle={{width: '80%', padding: 0}}
            />
            <Button
              icon={ this._renderIcon('account-plus') }
              type="outline"
              title="Add"
              iconContainerStyle={{ paddingRight: 20}}
              containerStyle = {{width: '20%', justifyContent: 'center'}}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}