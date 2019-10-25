import { StyleSheet } from 'react-native';
import  Colors from '../../helpers/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.primaryBackground,
  },
  clientNameContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent:'space-between'
  }
});

export default styles;