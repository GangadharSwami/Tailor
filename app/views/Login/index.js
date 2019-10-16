import React, { Component } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import styles from './style';
import { Input } from 'react-native-elements';

export default class Login extends Component {
  render() {
  
    return (   
      <View style={ styles.container }>
        <ImageBackground
         source={require('../../assets/images/login-background.jpg')}
         style={{width: '100%', height: '100%'}}
         blurRadius={1}>
          <Text style={{fontFamily: 'monospace', fontWeight: 'bold', fontSize: 40, textAlign: 'center', marginTop: 20}}>TAILOR</Text>
          <KeyboardAvoidingView behavior='padding' style={ styles.formContainer}>
            <Input
              placeholder='User Name'
              leftIcon={
                <Image source={require('../../assets/icons/user.png')} style={{ height: 25, width: 25, justifyContent: 'center'}} />
              }
              containerStyle={ styles.inputContainer}
              inputStyle={ styles.input}
            />
            <Input
              placeholder='Password'
              leftIcon={
                <Image source={require('../../assets/icons/lock.png')} style={{ height: 25, width: 25, justifyContent: 'center'}} />
              }
              containerStyle={ [styles.inputContainer, {marginTop: 10}]}
              inputStyle = { styles.input }
            />
            <Button
              title="Login"
              buttonStyle={ styles.loginButton }
            />
          </KeyboardAvoidingView>
          
          <TouchableOpacity >
            <View style={styles.skipView} >
              <Text style={{color: 'black', fontStyle: 'italic'}}>SKIP</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        </View> 
    );
  }
}