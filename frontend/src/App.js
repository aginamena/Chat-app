
import './App.css';
import React, { useEffect, useState } from "react";
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Chat from './pages/Chat';
import UserContext from './Context';


function App() {
  const [userInfo, setUserInfo] = useState(null)
  const [ErrorPopup, setErrorPopup] = useState(false);
  const [isUserValid, setIsUserValid] = useState(false);

  async function validateUser(user) {
    const email = user.email;
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/user/verify/:email`)
    const data = await response.json();
    // if user exists we return true otherwise false
    return data ? true : false;

  }
  useEffect(() => {
    async function getUser() {
      const user = localStorage.getItem("user");
      if (user) {
        // user is in the local storage. we have to validate it
        const parseduser = JSON.parse(user);
        const isValid = await validateUser(parseduser);
        if (isValid) {
          setUserInfo(parseduser)
          setIsUserValid(true);
        }
      }
    }
    getUser()

  }, [])

  const stateValues = {
    userInfo,
    setUserInfo,
    ErrorPopup,
    setErrorPopup,
    isUserValid,
    setIsUserValid
  }
  return (
    <BrowserRouter>
      <UserContext.Provider value={stateValues}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </UserContext.Provider>

    </BrowserRouter>

  );
}

export default App;
