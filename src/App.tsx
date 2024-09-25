import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";
import "./App.css";
import { MainPage } from "pages/MainPage";
import { LoginPage } from "pages/LoginPage";

function App() {
  const [isLogged, setIsLogged] = useState("");

  useEffect(() => {
    const getIsLogged = async () => {
      setIsLogged(await invoke("is_logged"));
    }

    getIsLogged();
  });

  return (
    {isLogged ? <MainPage /> : <LoginPage />}
  );
}

export default App;
