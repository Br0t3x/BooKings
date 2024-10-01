import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";
import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    invoke("is_logged").then((value: unknown) => {
      setIsLogged(value as boolean);
    });
  });

  return (isLogged ? <MainPage /> : <LoginPage />);
}

export default App;
