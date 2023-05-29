import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SignIn } from './pages/authenticate/SignIn';
import { SignUp } from './pages/authenticate/SignUp';
import { ForgotPassword } from './pages/authenticate/ForgotPassword';
import { ResetPassword } from './pages/authenticate/ResetPassword';
import { Profile } from './pages/authenticate/Profile';

import { Footer } from './components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
