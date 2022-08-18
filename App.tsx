import React, {FC, useState} from 'react';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {iosClientId, webClientId} from './devSettings';
import {AuthScreen} from './src/screens/AuthScreen';
import {MainScreen} from './src/screens/MainScreen';

GoogleSignin.configure({iosClientId, webClientId});

export const App: FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return isLogged ? (
    <MainScreen setIsLogged={setIsLogged} GoogleSignin={GoogleSignin} />
  ) : (
    <AuthScreen setIsLogged={setIsLogged} GoogleSignin={GoogleSignin} />
  );
};
