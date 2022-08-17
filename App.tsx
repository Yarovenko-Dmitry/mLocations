import React, {FC, useState} from 'react';

import {AuthScreen} from './src/screens/AuthScreen';
import {MainScreen} from './src/screens/MainScreen';

export const App: FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  console.log(' isLogged :', isLogged);

  if (isLogged) {
    return <MainScreen />;
  } else {
    return <AuthScreen setIsLogged={setIsLogged} />;
  }
};
