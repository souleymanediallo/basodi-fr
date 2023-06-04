import React, {useState} from 'react'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebaseConfig'

import { Link } from 'react-router-dom'

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(!email ) {
        setError('Adresse email requise');
        return;
    }
    setError('');
    setSuccess(false);
      try {
        await sendPasswordResetEmail(auth, email);
        setSuccess(true);
        setEmail("");
      }
      catch(error) {
        setError(error.message);
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
                    <h2 className='mb-0'>Mot de passe oublié ?</h2>
                </div>
                <div className='card-body'>
    
                  <form className='' onSubmit={handleSubmit}>
                    {error && <div className='alert alert-danger'>{error}</div>}
                   {success ? (
                        <div className='alert alert-success'>
                            Un email de réinitialisation de mot de passe a été envoyé à {email}
                        </div>
                    ) : (
                        <>
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
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button
                      className='btn btn-lg btn-block btn-dark'
                      type='submit'
                    >
                      Réinitialisation
                    </button>
                        </>
                    )}

                    <hr className='my-4'></hr>

                    <p className='text-muted text-center small'>
                        
                      <small className='text-muted text-center'>
                      
                        <Link to='/signin' className='text-dark mx-1'> 
                          Connexion
                        </Link>
                        
                        <Link to='/signup' className='text-dark mx-2'> 
                          Inscripion
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
