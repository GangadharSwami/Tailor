import Login from './views/Login/index';
import Home from './views/Home/index';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Auth_stack = createSwitchNavigator({
  Home: { screen: Home } ,
  Login: { screen: Login }
}, {
  initialRouteName: 'Login'
});
export default createAppContainer(Auth_stack);
