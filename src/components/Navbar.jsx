import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <header className='header'>
        <nav className='navbar navbar-expand-lg fixed-top navbar-light top-menu'>
          <div className='container'>
            <div className='d-flex align-items-center'>
              <Link
                className='navbar-brand py-1 font-weight-bold text-uppercase text-light'
                to='/'
              >
                BASODI
              </Link>
            </div>
            <button
              className='navbar-toggler navbar-toggler-right'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarCollapse'
              aria-controls='navbarCollapse'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i className='fa fa-bars'></i>
            </button>
            {/* <!-- Navbar Collapse --> */}
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <form
                className='form-inline mt-4 mb-2 d-sm-none'
                action='#'
                id='searchcollapsed'
              >
                <div className='input-label-absolute input-label-absolute-left w-100'>
                  <label
                    className='label-absolute'
                    htmlFor='searchcollapsed_search'
                  >
                    <i className='fa fa-search'></i>
                    <span className='sr-only'>Que rechercher vous ?</span>
                  </label>
                  <input
                    className='form-control form-control-sm border-0 shadow-0 bg-gray-200'
                    id='searchcollapsed_search'
                    placeholder='Search'
                    aria-label='Search'
                    type='search'
                  />
                </div>
              </form>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <Link
                    className='nav-link text-light-w text-uppercase'
                    to='/signup'
                  >
                    Voir les annonces
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link
                    className='nav-link text-light-w text-uppercase'
                    to='/signup'
                  >
                    Inscription
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link text-light-w text-uppercase'
                    to='/signin'
                  >
                    Connexion
                  </Link>
                </li>
                <li className='nav-item mt-3 mt-lg-0 ms-lg-3 d-lg-none d-xl-inline-block text-light-w text-uppercase'>
                  <Link className='btn btn-primary' to='/signin'>
                    Vendre
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
