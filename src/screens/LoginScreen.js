import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity, AppState
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import AuthForm from '../components/shop/AuthForm';
import {Colors} from '../constants/Colors';
import {Context as AuthContext} from '../context/auth/AuthContext';

const textColor = `rgb(${Colors.text.primary})`;
const primaryLightColor = `rgba(${Colors.primary}, 0.8)`;

const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', ()=>{})
    return () => {
      subscription.remove()
    }
   }, [])

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View>
        <KeyboardAwareScrollView contentContainerStyle={{paddingTop: 40}}>
          <AuthForm
            buttonTitle="Login"
            onSubmit={async props =>  login({...props})}
          />
        </KeyboardAwareScrollView>
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Sign up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'space-between',
  },
  linkContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 30,
  },
  linkText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: textColor,
  },
  link: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: primaryLightColor,
  },
});
