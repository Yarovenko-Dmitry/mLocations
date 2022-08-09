import React, { FC, useState } from "react";

import { MainScreen } from "./src/screens/MainScreen";
import { AuthScreen } from "./src/screens/AuthScreen";

const App: FC = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  console.log(' isLogged :', isLogged)

  if (isLogged) {
    return <MainScreen />;
  } else {
    return <AuthScreen setIsLogged={setIsLogged}/>;
  }
};

export default App;
