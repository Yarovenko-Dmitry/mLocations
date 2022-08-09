import React, {FC} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import {AuthScreenType, SetIsLoggedType} from "./types";

GoogleSignin.configure({
    // webClientId is in the google-services.json file, in the "client_id" field, above "client_type": 3 (!!!)
    webClientId: '486133882145-r8ahvo21ec07f5f4ud6vmbr5l37dirv8.apps.googleusercontent.com',
});

async function onGoogleButtonPress(setIsLogged: SetIsLoggedType) {
    try {
        console.log(' onGoogleButtonPress :')
        const { idToken } = await GoogleSignin.signIn();
        console.log(" idToken :", idToken);
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const isAuth = auth().signInWithCredential(googleCredential);
        setIsLogged(true)
        console.log(' isAuth :', isAuth)
    } catch (err) {
        setIsLogged(false)
    }
}

export const AuthScreen : FC<AuthScreenType>= ({setIsLogged}) => {
    return (
        <View style={styles.auth}>
            <Text>AuthScreen</Text>
            <Button
                title="Google Sign-In"
                onPress={() => onGoogleButtonPress(setIsLogged).then(() => console.log('Signed in with Google!'))}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    auth: {
        marginTop: 192,
        paddingHorizontal: 24,
    }
});
