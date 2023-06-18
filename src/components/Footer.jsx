import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <footer className='position-relative z-index-10 d-print-none bg-footer'>
        <div className='pt-5 pb-3 text-light'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 mb-5 mb-lg-0'>
                <div className='font-weight-bold text-uppercase mb-3'>
                  BASODI
                </div>
                <p>
                  Offrir une seconde vie à vos vêtements, chaussures et
                  accessoires africains.
                </p>
              </div>
              <div className='col-lg-3 col-md-6 mb-5 mb-lg-0'>
                <h6 className='text-uppercase mb-3'>A propos</h6>
                <ul className='list-unstyled'>
                  <li>
                    <Link className='text-light' to='/qui-sommes-nous'>
                      Qui sommes-nous ?
                    </Link>
                  </li>
                  <li>
                    <Link className='text-light' to='/nos-valeurs'>
                      Nos Valeurs
                    </Link>
                  </li>
                  <li>
                    <Link className='text-light' to='/nos-engagements'>
                      Nos engagements
                    </Link>
                  </li>
                  <li>
                    <Link className='text-light' to='/conseils'>
                      Conseils Pour Bien Vendre
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='col-lg-3 col-md-6 mb-5 mb-lg-0'>
                <h6 className='text-uppercase mb-3'>Plus d'options</h6>
                <ul className='list-unstyled'>
                  <li>
                    <Link className='text-light' to='/conditions-utilisations'>
                      Utilisation de la Plateforme
                    </Link>
                  </li>
                  <li>
                    <Link className='text-light' to='/mentions-legales'>
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link className='text-light' to='/conditions-utilisations'>
                      CGU
                    </Link>
                  </li>
                  <li>
                    <Link className='text-light' to='/faq'>
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='col-lg-3'>
                <h6 className='text-uppercase mb-3'>Newsletter</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='pb-4 font-weight-light text-gray-300'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6 text-center text-md-left'>
                <p className='text-sm mb-md-0'>&copy; 2023, BASODI</p>
              </div>
              <div className='col-md-6'>
                <ul className='list-inline mb-0 mt-2 mt-md-0 text-center text-md-right'>
                  <li className='list-inline-item'>
                    <Link className='text-light small-text' to='/contact'>
                      Nous contacter
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
