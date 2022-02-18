import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Main from "./page/Main";
import Login from "./page/Login";

function App() {
  let [loginState, setLoginState] = useState(false);

  const handleLogin = () => {
    setLoginState(true);
  };

  return (
    <BrowserRouter>
      {loginState ? <Main></Main> : <Login handleLogin={handleLogin}></Login>}
    </BrowserRouter>
  );
}

export default App;
