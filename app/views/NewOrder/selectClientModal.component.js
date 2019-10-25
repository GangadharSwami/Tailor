import React, { Component } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../helpers/colors';
import styles from './styles';
import { Input, Button, Card } from 'react-native-elements';
import Modal from "react-native-modal";
import { Clients as TempClients } from './data';

export default class ClientsModal extends Component{
  constructor(props){
    super(props)
    this.state = { clients: [], clientName: '' }
  }

  componentDidMount(){
    this.fetchClients()
  }

  fetchClients = () => {
    this.setState({ clients: TempClients})
  }

  filterClients = (search) =>{
    const searchedData = TempClients.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = search.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({ clients: searchedData, clientName: search });
  }

  render(){
    return(
      <Modal
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        isVisible={this.props.modalVisible}
        onBackButtonPress={() => {
          this.props.toggleModal()
        }}>
          <Card>
            <View>
              <Input
                placeholder='Select Client / Enter name'
                containerStyle={{width: '80%', padding: 0}}
                onChangeText={(clientName) => this.filterClients(clientName)}
              />
              <Button
                icon={ this.props._renderIcon('checkbox-marked-circle-outline') }
                type="clear"
                title="Select"
                containerStyle = {{width: '20%', justifyContent: 'center'}}
                onPress= {()=> { this.props.selectClient(this.state.clientName) }}
              />
            </View>
            <FlatList
              //ListEmptyComponent = { <NoDataMessage message="No toppers to show !"/> }
              data={ this.state.clients }
              renderItem = { ({ item }) => (
                <Card containerStyle={ styles.cardContainer }>
                  <Text>Name: {item.name}</Text>
                  <Text>Mobile: { item.mobile }</Text>
                </Card>
              )}
              keyExtractor={item => item.id}
            />
          </Card>
        
          
      </Modal>
    )
  }
}