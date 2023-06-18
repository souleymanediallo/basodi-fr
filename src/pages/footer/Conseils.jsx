import React from "react";
import { TopFooter } from "../../components/TopFooter";

const Conseils = () => {
  return (
    <div>
      <section className='py-6'>
        <div className='container pages'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h1 className='mb-5 h3 text-uppercase border-bottom pb-2'>
                5 conseils pour bien vendre sur la plateforme{" "}
              </h1>
              <p>
                L'équipe Basodi vous donne quelques conseils pour bien vendre
                sur la plateforme :
              </p>
              <h2>
                Conseil n°1 : Ne tardez pas à mettre vos articles en ligne
              </h2>
              <p>
                Les utilisateurs de la plateforme Basodi sont en recherche
                constante de vêtements et accessoires tendances. Ces articles
                sont d'ailleurs les premiers à trouver preneur à des prix
                intéressants. Par expérience, les vêtements et accessoires
                passés de mode intéressent peu les utilisateurs de la
                plateforme. Ils mettent donc plus de temps à se vendre et à des
                prix très bas. Alors pour faire de bonnes affaires sur Basodi,
                adoptez la méthode du “aussi vite portée aussi vite revendue”.
              </p>
              <h2>Conseil n°2 : Mettez en valeur l’article à vendre</h2>
              <p>
                Les photos associées à votre annonce doivent être de bonne
                qualité de sorte que le produit soit visible notamment la
                couleur et la matière.
              </p>
              <h2>
                Conseil n°3 : Misez sur une description détaillée de votre
                article
              </h2>
              <p>
                Une annonce comprenant une description détaillée du produit mis
                en ligne permet à l’acheteur d’avoir un maximum d'informations
                sur l’article. Pensez également à mentionner les défauts ou
                tâches pour éviter les mauvaises surprises.
              </p>
              <h2>Conseil n°4 : Proposez un prix de vente raisonnable</h2>
              <p>
                Un article porté, même quelques heures, ne peut être vendu au
                prix du neuf. Votre offre pour un article de seconde main devra
                donc prendre en compte cet aspect et le prix fixé
                raisonnablement pour attirer des acheteurs.
              </p>
              <h2>Conseil n°5 : Restez joignable</h2>
              <p>
                Une fois l’annonce postée, les sollicitations seront nombreuses.
                Certains souhaitant obtenir un complément d’informations sur le
                produit vendu et les autres se positionner sur l’article à
                vendre. Ne passez pas à côté d’une vente faute d’avoir répondu à
                une demande.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conseils;
