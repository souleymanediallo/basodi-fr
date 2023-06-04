import React, {useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import {db} from '../../firebaseConfig'

import {useNavigate, Link} from 'react-router-dom'

export const SignUp = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    loading: false,
  })

  const {firstname, lastname, email, password, confirmPassword, error, loading} = data
  
  const handleChange =(e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(password !== confirmPassword) {
      setData({...data, error: 'Les mots de passe ne correspondent pas'})
    }
    else {
      setData({...data, loading: true})
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
            displayName: `${firstname} ${lastname}`,
          });
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          firstname: firstname,
          lastname: lastname,
          email: email,
          createdAt: Timestamp.fromDate(new Date()),
          isOnline: true,
        });
        setData({...data, loading: false})
        navigate('/')
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
                    <h5 className='mb-0'>Créez votre compte</h5>
                </div>
                <div className='card-body'>
                  <form className='' onSubmit={handleSubmit}>
                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='firstname'>
                        Prénom
                      </label>
                      <input
                        type='text'
                        name='firstname'
                        maxLength='200'
                        className='form-control'
                        required
                        value={firstname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='lastname'>
                        Nom
                      </label>
                      <input
                        type='text'
                        name='lastname'
                        maxLength='200'
                        className='form-control'
                        required
                        value={lastname}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='email'>
                        Adresse Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        maxLength='255'
                        autoFocus
                        className='form-control'
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='password'>
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

                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='confirmPassword'>
                        Confirmation du mot de passe
                      </label>
                      <input
                        type='password'
                        name='confirmPassword'
                        autoComplete='new-password'
                        className='form-control'
                        required
                        value={confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <p>
                      <small className='text-muted'>
                        En vous inscrivant, vous acceptez les Conditions
                        d'utilisation et la Politique de confidentialité,
                        notamment l'Utilisation des cookies.
                      </small>
                    </p>
                    <button
                      className='btn btn-lg btn-block btn-dark'
                      type='submit'
                    >
                      Enregistrer
                    </button>
                    <hr className='my-4'></hr>
                    <p className='text-center'>
                      <small className='text-muted text-center'>
                        Vous avez déjà un compte ?
                        <Link to='/signin' className='text-dark'>
                          Connexion
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
