import React, {useState} from 'react'
import { confirmPasswordReset } from "firebase/auth";
import { auth } from '../../firebaseConfig'
import { useSearchParams, Link } from 'react-router-dom';


export const ResetPassword = () => {

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  let [searchParams, setSearchParams] = useSearchParams();
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(!password || !confirmPassword ) {
        setError('Le mot de passe est requis');
        return;
    }
    else if(password !== confirmPassword) {
        setError('Les mots de passe ne correspondent pas');
        return;
    }
    setError('');
    setSuccess(false);
      try {
        await confirmPasswordReset(auth, searchParams.get('oobCode'), password);
        setSuccess(true);
        setPassword("");
        setConfirmPassword("");
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
                    <h2 className='mb-0'>Réinitialisation mot de passe</h2>
                </div>
                <div className='card-body'>
    
                  <form className='' onSubmit={handleSubmit}>
                    {error && <div className='alert alert-danger'>{error}</div>}
                   {success ? (
                        <div>
                        <div className='alert alert-success mb-5'>
                            Votre mot de passe a été réinitialisé avec succès
                        </div>
                         <Link
                         className='btn btn-lg btn-block btn-dark'
                         to='/signin'
                       >
                        Connexion
                       </Link>
                       </div>
                    ) : (
                        <>
                         <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='password'>
                        Nouveau mot de passe
                      </label>
                      <input
                        type='password'
                        name='password'
                        maxLength='255'
                        className='form-control'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='confirmPassword'>
                        Confirmation mot de passe
                      </label>
                      <input
                        type='password'
                        name='confirmPassword'
                        maxLength='255'
                        className='form-control'
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <button
                      className='btn btn-lg btn-block btn-dark'
                      type='submit'
                    >
                      Enregistrer
                    </button>
                        </>
                    )}

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
