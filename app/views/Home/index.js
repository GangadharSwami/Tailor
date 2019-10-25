import React from 'react';
import { View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Dashboard from '../Dashboard/index';
import PendingOrders from '../PendingOrders/index';
import NewOrder from '../NewOrder/index';

const TabNavigator = createMaterialBottomTabNavigator(  
  {  
    Dashboard: { screen: Dashboard,  
      navigationOptions:{ 
        tabBarLabel:'Dashboard',  
        tabBarIcon: ({ tintColor }) => (
          <View>  
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
          </View>),  
      }  
    },  
    PendingOrders: { screen: PendingOrders,
      navigationOptions:{  
        tabBarLabel:'Pending Order',  
        tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          </View>),  
        activeColor: '#f60c0d',  
        inactiveColor: '#f65a22',  
        barStyle: { backgroundColor: '#f69b31' },  
      }  
    },  
    NewOrder: { screen: NewOrder,  
      navigationOptions:{  
        tabBarLabel:'NewOrder',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
            </View>),  
        activeColor: '#615af6',  
        inactiveColor: '#46f6d7',  
        barStyle: { backgroundColor: '#67baf6' },  
      }  
    } 
  },  
  {  
    initialRouteName: "Dashboard",  
    activeColor: '#f0edf6',  
    inactiveColor: '#226557',  
    barStyle: { backgroundColor: '#3BAD87' },  
  },  
);  

export default createAppContainer(TabNavigator);  