import React from 'react'

export const TopFooter = () => {
  return (
    <div>
      <section classNameName="bg-light py-3">
    <div classNameName="container bg-light py-5">
        <div classNameName="row">
            <div classNameName="col-md-7 mb-20 m-md-0">
                <h2 classNameName="h2 md text-center text-md-left">Acheter, Vendre, Echanger ou Donner</h2>
                <p classNameName="text-lg text-shadow text-dark-b">Vêtements, Chaussures et Accessoires Africains.</p>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-start justify-content-md-end">
                
                <a href="/accounts/register" className="btn btn-dark bg-dark-b btn-lg contact-trigger max-width-300">
                    Inscription <i className="fas fa-chevron-right"></i>
                </a>
                
            </div>
        </div>
    </div>
</section>
    </div>
  )
}
