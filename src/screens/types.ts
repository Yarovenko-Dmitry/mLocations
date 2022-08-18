export type SetIsLoggedType = (isLogged: boolean) => void;

export type ScreenType = {
  setIsLogged: SetIsLoggedType;
  GoogleSignin: any;
};

export type EmptyFooType = () => void;
