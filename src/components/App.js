import GlobalStyle from "../globalstyles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createContext } from "react";
import LoginPage from "../pages/LoginPage";

const CurrentUserContext = createContext(null);

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/cadastro" />
          <Route path="/habitos" />
          <Route path="/hoje" />
          <Route path="/historico" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
