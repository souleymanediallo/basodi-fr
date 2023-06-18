import React from 'react';
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

import Contact from './pages/Contact';
import About from './pages/footer/About';
import Condition from './pages/footer/Condition';
import Conseils from './pages/footer/Conseils';
import Faq from './pages/footer/Faq';
import Mention from './pages/footer/Mention';
import Utilisation from './pages/footer/Utilisation';
import Values from './pages/footer/Values';
import Engagement from './pages/footer/Engagement';

import AuthProvider from './components/context/auth';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<PrivateRoute />}>
                    <Route path="/item" element={<Item />} />
                    <Route path="/update-profile/:id" element={<UpdateProfile />} />
                </Route>
            {/* Routes du footer */}
            <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/nos-valeurs" element={<Condition />} />
            <Route path="/conseils" element={<Conseils />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/mentions-legales" element={<Mention />} />
            <Route path="/conditions-utilisations" element={<Utilisation />} />
            <Route path="/values" element={<Values />} />
            <Route path="/nos-engagements" element={<Engagement />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
