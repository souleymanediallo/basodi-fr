import React from "react";
import { Link } from "react-router-dom";

export const TopFooter = () => {
  return (
    <section className='bg-light py-3'>
      <div className='container bg-light py-5'>
        <div className='row'>
          <div className='col-md-7 mb-20 m-md-0'>
            <h2 className='h2 md text-md-left'>
              Acheter, Vendre, Echanger ou Donner
            </h2>
            <p className='text-lg text-shadow text-dark-b'>
              Vêtements, Chaussures et Accessoires Africains.
            </p>
          </div>
          <div className='col-md-5 d-flex align-items-center justify-content-start justify-content-md-end'>
            <Link
              to='/item'
              className='btn btn-dark bg-dark-b btn-lg contact-trigger max-width-300'
            >
              Vendre un Article <i className='fas fa-chevron-right'></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
