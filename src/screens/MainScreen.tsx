import React, {FC} from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

import {EmptyFooType, ScreenType} from './types';

export const MainScreen: FC<ScreenType> = ({GoogleSignin, setIsLogged}) => {
  const onSignOutPress: EmptyFooType = async () => {
    try {
      await GoogleSignin.signOut();
      setIsLogged(false);

      console.log('GoogleSignin.signOut :');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.main}>
      <Text>MainScreen</Text>
      <Button title='SignOut' onPress={onSignOutPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 192,
    paddingHorizontal: 24,
  },
});
