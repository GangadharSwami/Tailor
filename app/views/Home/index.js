import { createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Dashboard from '../Dashboard/index';
import PendingOrders from '../PendingOrders/index';
import NewOrder from '../NewOrder/index';

const TabNavigator = createMaterialBottomTabNavigator(  
  {
    Dashboard: { screen: Dashboard },  
    PendingOrders: { screen: PendingOrders },
    NewOrder: { screen: NewOrder }
  },
  {
    initialRouteName: "Dashboard",
  },
);

export default createAppContainer(TabNavigator);