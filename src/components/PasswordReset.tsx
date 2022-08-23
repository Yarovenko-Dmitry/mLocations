import React, {FC} from 'react';

import {sendPasswordResetEmail} from '@firebase/auth';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {Button} from 'react-native';

import {EmptyFooType} from '../screens/types';

const firebaseConfig_STUB = {
  apiKey: 'AIzaSyA05lrC8JRONbymPfs-x_ix4Q32FQ2sNUU',
  appId: '1:486133882145:web:c7f417c96eff7cbe5bb260',
  authDomain: 'mlocations-5ead1.firebaseapp.com',
  messagingSenderId: '486133882145',
  projectId: 'mlocations-5ead1',
  storageBucket: 'mlocations-5ead1.appspot.com',
};

const app = initializeApp(firebaseConfig_STUB);

const authInfo = getAuth(app);

export const PasswordReset: FC = () => {
  const emailName_STUB = 'yarovenkojob@gmail.com';
  const onResetPassword: EmptyFooType = async () => {
    await sendPasswordResetEmail(authInfo, emailName_STUB);
  };

  return <Button title='Reset password' onPress={onResetPassword} />;
};
