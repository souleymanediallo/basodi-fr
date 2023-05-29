import React from 'react'
import { SliderHome } from '../components/SliderHome'

export const Home = () => {
  return (
    <div>
     <SliderHome />
      
<section className="pt-4 pb-6">
    <div className="container">
        <div className="pb-lg-4 text-center">
            <h2 className="display-3 fw-bold text-shadow text-dark-b">Vendre sur BASODI</h2>
            <h2 className="mb-5">Comment ça marche ?</h2>
        </div>

        <div className="row">
            <div className="col-lg-4">
                <div className="card h-100 bg-light border-0 p-3">
                    <div className="card-body">
                        <div className="icon-rounded mb-3 bg-dark-light">
                            <span className="svg-icon w-2rem h-2rem text-dark h5">
                                1
                            </span>
                        </div>
                        <h4 className="h6 text-uppercase text-dark-b mb-3">Publier un article</h4>
                        <p className="text-muted text-sm text-dark-b">
                            Prenez en photo le vêtement, la chaussure et l’accessoire africain à vendre, donner ou échanger de sorte à mettre en valeur l’article. Renseignez le formulaire, décrivez l’article et publiez. Le tour est joué, votre article est en ligne !
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card h-100 bg-light border-0 p-3">
                    <div className="card-body">
                        <div className="icon-rounded mb-3 bg-dark-light">
                            <span className="svg-icon w-2rem h-2rem text-dark h5">
                                2
                            </span>
                        </div>
                        <h4 className="h6 text-uppercase text-dark-b mb-3">Accepter une proposition</h4>
                        <p className="text-muted text-sm text-dark-b">
                            Une fois votre article publié, il ne vous reste plus qu’à attendre une proposition qui vous convienne ! Les personnes intéressées vous contacteront via la messagerie Basodi ou votre numéro de téléphone si vous décidez de l’afficher.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card h-100 bg-light border-0 p-3">
                    <div className="card-body">
                        <div className="icon-rounded mb-3 bg-dark-light">
                            <span className="svg-icon w-2rem h-2rem text-dark h5">
                                3
                            </span>
                        </div>
                        <h4 className="h6 text-uppercase text-dark-b mb-3">Remise en mains propres</h4>
                        <p className="text-muted text-sm text-dark-b">
                            Donnez un rendez-vous à la personne intéressée par votre article dans un lieu proche de chez vous. Elle vérifiera que l’article est conforme à la photo avant de vous remettre le montant mentionné sur l’annonce. Votre article est prêt à mener sa seconde vie !
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-3">
            <div className="col-lg-6">
                <div className="text-center">
                    <a href="#" className="btn btn-dark btn-lg bg-dark-b">
                        Vendre dès maintenant <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="pt-3 pb-6">
    <div className="container">
        <div className="pb-lg-4 text-center">
            <h2 className="display-3 fw-bold text-shadow text-dark-b">Acheter sur BASODI</h2>
            <h2 className="mb-5">Découvrir vos avantages</h2>
        </div>

        <div className="row">
            <div className="col-lg-4">
                <div className="card h-100 bg-light border-0 p-3">
                    <div className="card-body">
                        <div className="icon-rounded mb-3 bg-dark-light">
                        <i className="bi bi-currency-euro" style={{fontSize:"2rem"}}></i>
                        </div>
                        <h4 className="h6 text-uppercase text-dark-b mb-3">Aucune commission prélevée sur l’achat</h4>
                        <p className="text-muted text-sm text-dark-b">
                            Basodi est une marketplace qui n’applique aucun frais de commission.
                            Le vendeur perçoit la totalité de la somme de la transaction selon un tarif qu’il a lui-même fixé
                            et l’acheteur paye l’article au juste prix.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card h-100 bg-light border-0 p-3">
                    <div className="card-body">
                        <div className="icon-rounded mb-3 bg-dark-light">
                        <i className="bi bi-people-fill" style={{fontSize:"2rem"}}></i>
                        </div>
                        <h4 className="h6 text-uppercase text-dark-b mb-3">Plusieurs choix pour l'acheteur</h4>
                        <p className="text-muted text-sm text-dark-b">
                            Propose un large choix d'articles neufs ou de seconde main à des prix très accessibles. Un large choix d'articles neufs ou de seconde main est proposé à des prix très accessibles. Des vêtements, chaussures et accessoires africains de toutes les tailles et qui peuvent être portés en toutes circonstances sont disponibles sur la marketplace.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card h-100 bg-light border-0 p-3">
                    <div className="card-body">
                        <div className="icon-rounded mb-3 bg-dark-light">
                        <i className="bi bi-geo-alt" style={{ fontSize:"2rem"}}></i>
                        </div>
                        <h4 className="h6 text-uppercase text-dark-b mb-3">Des utilisateurs proches de chez vous</h4>
                        <p className="text-muted text-sm text-dark-b">
                            Le critère géographique permet aux utilisateurs de la marketplace d’être mis en relation
                            avec des personnes proches de chez eux et faciliter la remise en mains propres.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-3">
            <div className="col-lg-6">
                <div className="text-center">
                    <a href="#" className="btn btn-dark btn-lg bg-dark-b">
                        Acheter Rapidement <i className="fas fa-chevron-right"></i>
                    </a>
                </div>
            </div>
        </div>

    </div>
</section>

    </div>
  )
}
