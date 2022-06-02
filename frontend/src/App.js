
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
