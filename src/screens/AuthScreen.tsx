import React, {FC} from 'react';

import auth from '@react-native-firebase/auth';
import {Button, StyleSheet, Text, View} from 'react-native';

import {PasswordReset} from '../components/PasswordReset';
import {EmptyFooType, ScreenType} from './types';

export const AuthScreen: FC<ScreenType> = props => {
  const {GoogleSignin, setIsLogged} = props;

  const onGoogleButtonPress: EmptyFooType = async () => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      auth().signInWithCredential(googleCredential);
      setIsLogged(true);

      console.log('Signed in with Google!');
    } catch (err) {
      setIsLogged(false);
    }
  };

  return (
    <View style={styles.auth}>
      <Text>AuthScreen</Text>
      <Button title='Google Sign-In' onPress={onGoogleButtonPress} />
      <PasswordReset />
    </View>
  );
};

const styles = StyleSheet.create({
  auth: {
    marginTop: 192,
    paddingHorizontal: 24,
  },
});
