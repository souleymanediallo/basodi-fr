import React from 'react'

export const Footer = () => {
  return (
      <div>
        
      <footer className="position-relative z-index-10 d-print-none bg-footer">
  
    <div className="pt-5 pb-3 text-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 mb-5 mb-lg-0">
                    <div className="font-weight-bold text-uppercase mb-3">BASODI</div>
                    <p>Offrir une seconde vie à vos vêtements, chaussures et accessoires africains.</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                    <h6 className="text-uppercase mb-3">A propos</h6>
                    <ul className="list-unstyled">
                        <li><a className="text-light" href="{% url 'societe' %}">Qui sommes-nous ?</a></li>
                        <li><a className="text-light" href="{% url 'valeurs' %}">Nos Valeurs</a></li>
                        <li><a className="text-light" href="{% url 'engagements' %}">Nos engagements</a></li>
                        <li><a className="text-light" href="{% url 'conseils' %}">Conseils Pour Bien Vendre</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                    <h6 className="text-uppercase mb-3">Plus d'option</h6>
                    <ul className="list-unstyled">
                        <li><a className="text-light" href="{% url 'utilisation' %}">Utilisation de la Plateforme</a></li>
                        <li><a className="text-light" href="{% url 'mentions' %}">Mentions légales</a></li>
                        <li><a className="text-light" href="{% url 'cgu' %}">CGU</a></li>
                        <li><a className="text-light" href="{% url 'faq' %}">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h6 className="text-uppercase mb-3">Newsletter</h6>

                </div>
            </div>
        </div>
    </div>

   
    <div className="pb-4 font-weight-light text-gray-300">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-left">
                    <p className="text-sm mb-md-0">&copy; 2023, BASODI</p>
                </div>
                <div className="col-md-6">
                    <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right">
                        <li className="list-inline-item"><a className="text-light small-text" href="{% url 'contact' %}">Nous contacter</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
      </footer>
      </div>

  )
}
