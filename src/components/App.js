import GlobalStyle from "../globalstyles";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import { AuthContext, Progress } from "../Context";
import TodayPage from "../pages/TodayPage";


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [percentage, setPercentage] = useState(0)

  return (
    <>
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        <Progress.Provider value={{percentage, setPercentage}}>
          <BrowserRouter>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<RegistrationPage />} />
              <Route path="/habitos" />
              <Route path="/hoje" element={<TodayPage />} />
              <Route path="/historico" />
            </Routes>
          </BrowserRouter>
        </Progress.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
