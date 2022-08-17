export type SetIsLoggedType = (isLogged: boolean) => void;

export type AuthScreenType = {
  setIsLogged: SetIsLoggedType;
};

export type onGoogleButtonPressType = (setIsLogged: SetIsLoggedType) => void;
