import React from "react";

export const SignIn = () => {
  return (
    <div className='mt-5'>
      <section className='my-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='card'>
                <div className='card-body'>
                  <form className=''>
                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        {" "}
                        Prénom
                      </label>
                      <input
                        type='text'
                        name='firstname'
                        maxLength='200'
                        className='form-control'
                        required
                        id='id_firstname'
                      />
                    </div>
                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        {" "}
                        Nom
                      </label>
                      <input
                        type='text'
                        name='firstname'
                        maxLength='200'
                        className='form-control'
                        required
                        id='id_name'
                      />
                    </div>

                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        {" "}
                        Adresse Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        maxLength='255'
                        autoFocus
                        className='form-control'
                        required
                        id='id_email'
                      />
                    </div>

                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        {" "}
                        Mot de passe
                      </label>
                      <input
                        type='password'
                        name='password1'
                        autoComplete='new-password'
                        className='form-control'
                        required
                        id='id_password1'
                      />
                    </div>

                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        {" "}
                        Confirmation du mot de passe
                      </label>
                      <input
                        type='password'
                        name='password2'
                        autoComplete='new-password'
                        className='form-control'
                        required
                        id='id_password2'
                      />
                    </div>

                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        {" "}
                        Votre Ville
                      </label>
                      <input
                        type='text'
                        name='city'
                        id='auto_check'
                        className='form-control'
                        placeholder='Ville'
                        required
                      />
                    </div>

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
                      Inscription
                    </button>
                    <hr className='my-4'></hr>
                    <p className='text-center'>
                      <small className='text-muted text-center'>
                        Vous avez déjà un compte ?
                        <a href='/accounts/login/' className='text-dark'>
                          Connexion
                        </a>
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
