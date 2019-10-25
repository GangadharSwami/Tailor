import React from 'react';
import { View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Dashboard from '../Dashboard/index';
import PendingOrders from '../PendingOrders/index';
import NewOrder from '../NewOrder/index';
import Colors from '../../helpers/colors';

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
    PendingOrders: { screen: PendingOrders },
    NewOrder: { screen: NewOrder }
  },
  {
    initialRouteName: "Dashboard",
    activeColor: Colors.White,
    inactiveColor: Colors.InactiveGreen,
    barStyle: { backgroundColor: Colors.Green },
  },
);

export default createAppContainer(TabNavigator);