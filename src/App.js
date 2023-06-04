import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { SignIn } from './pages/authenticate/SignIn';
import { SignUp } from './pages/authenticate/SignUp';
import { ForgotPassword } from './pages/authenticate/ForgotPassword';
import { ResetPassword } from './pages/authenticate/ResetPassword';
import { Profile } from './pages/authenticate/Profile';
import { UpdateProfile } from './pages/authenticate/UpdateProfile';
import { Item } from './pages/Item';
import { Footer } from './components/Footer';
import AuthProvider from './components/context/auth';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div>
        <AuthProvider>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/item" element={<Item />} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/update-profile/:id" element={<UpdateProfile />} />
            </Routes>
            </BrowserRouter>
            <Footer />
        </AuthProvider>
    </div>
  );
}

export default App;
