import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../helpers/colors';
import styles from './styles';
import { Input, Button } from 'react-native-elements';
import ClientsModal from './selectClientModal.component';

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

  constructor(props){
    super(props)
    this.state = { modalVisible: false, selectedClient: ''}
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

  selectClient = (client) => {
    this.setState({ selectedClient: client, modalVisible: false })
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible })
  }

  render() {
    return(
      <View style={ styles.mainContainer }> 
        <ClientsModal 
          modalVisible = {this.state.modalVisible}
          selectedClient = { this.state.selectedClient}
          selectClient = { this.selectClient.bind(this) }
          toggleModal = {this.toggleModal.bind(this)}
          _renderIcon = { this._renderIcon.bind(this)}
        />
        <ScrollView>
          <View style={ styles.clientNameContainer }>
            <Input
              placeholder='Select Client / Enter name'
              leftIcon={ this._renderIcon("account") }
              containerStyle={{width: '80%', padding: 0}}
              editable={false}
              value = {this.state.selectedClient}
            />
            <Button
              icon={ this._renderIcon('account-plus') }
              type="outline"
              title="Select"
              iconContainerStyle={{ paddingRight: 20}}
              containerStyle = {{width: '20%', justifyContent: 'center'}}
              onPress= { this.toggleModal }
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}