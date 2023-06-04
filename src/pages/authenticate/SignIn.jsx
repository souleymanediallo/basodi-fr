import React, {useState} from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from '../../firebaseConfig'

import {useNavigate, Link, useLocation} from 'react-router-dom'

export const SignIn = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [data, setData] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
  })

  const {email, password, error, loading} = data
  const handleChange =(e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(!email || !password ) {
      setData({...data, error: 'Veuillez remplir tous les champs'})
      return
    }
    else if(email === undefined || password === undefined) {
        setData({...data, error: 'Le mot de passe ou l\'adresse email est incorrect'})
    }
    else {
      setData({...data, loading: true})
      try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateDoc(doc(db, "users", user.uid), {
          isOnline: true,
        });
        setData({...data, loading: true})

        if(location.state?.from) {
          navigate(location.state.from.pathname)
        }else{
          navigate('/')
        }
      }
      catch(error) {
        setData({...data, error: error.message, loading: false})
      }
    }
  }
  return (
    <div className='mt-5'>
      <section className='my-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='card'>
              <div className='card-header'>
                    <h2 className='mb-0'>Connectez-vous</h2>
                </div>
                <div className='card-body'>
                
                  <form className='' onSubmit={handleSubmit}>
                    {error && <div className='alert alert-danger'>{error}</div>}
                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        Adresse Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        maxLength='255'
                        className='form-control'
                        required
                        value={email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        Mot de passe
                      </label>
                      <input
                        type='password'
                        name='password'
                        autoComplete='new-password'
                        className='form-control'
                        required
                        value={password}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      className='btn btn-lg btn-block btn-dark'
                      type='submit'
                    >
                      Connexion
                    </button>
                    <hr className='my-4'></hr>
                    <p className='text-muted text-center small'>
                        
                      <small className='text-muted text-center'>
                      Vous n'avez pas de compte ? 
                        <Link to='/signup' className='text-dark mx-1'> 
                          Inscription 
                        </Link>
                        
                        <Link to='/forgot-password' className='text-dark mx-2'> 
                          Mot de passe oublié ?
                        </Link>
                      </small>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
