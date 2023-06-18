import React from "react";

const Contact = () => {
  return (
    <div>
      <section className='my-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='card'>
                <div className='card-header'>
                  <h2 className='mb-0'>Connectez-nous</h2>
                </div>
                <div className='card-body'>
                  <form className=''>
                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        Prénom
                      </label>
                      <input
                        type='text'
                        name='firstname'
                        maxLength='255'
                        className='form-control'
                        required
                      />
                    </div>
                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        Nom
                      </label>
                      <input
                        type='text'
                        name='lastname'
                        maxLength='255'
                        className='form-control'
                        required
                      />
                    </div>
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
                      />
                    </div>
                    <div className='form-group mb-3'>
                      <label className='form-label' htmlFor='loginUsername'>
                        Message
                      </label>
                      <textarea
                        className='form-control'
                        id='exampleFormControlTextarea1'
                        rows='6'
                      ></textarea>
                    </div>
                    <button
                      className='btn btn-lg btn-block btn-dark'
                      type='submit'
                    >
                      Envoyer
                    </button>
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

export default Contact;
