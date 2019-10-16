import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  imageSize: {
    width: Dimensions.get('window').width - 10,
    height: 300
  },
  formContainer: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width - 15,
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height:55,
    fontSize: 17,
    borderBottomColor: 'white',
    color: 'white'
  },
  inputContainer: {
     backgroundColor: 'black',
     height: 60,
     borderRadius: 5, 
     borderBottomWidth: 0,
     marginLeft: 10
  },
  inputIcon:{
    justifyContent: 'center',
    width: 25, 
    height: 25
  },
  loginButton: {
    elevation: 3, 
    marginTop: 15,
    width:250
  },
  skipButtonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    marginTop: 10,
    width: '50%',
    borderRadius:30
  },
  skipView: { 
    flexDirection: 'row-reverse', 
    marginTop: 30,
    marginLeft: 10
  },
  modelButtonContainer: {
    width: '50%',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'
  },
  modalButton: {
    padding: 10, 
    margin: 0
  }
  
});

export default styles;