import React from "react";
import { TopFooter } from "../../components/TopFooter";

const Values = () => {
  return (
    <div>
      <section className='py-6'>
        <div className='container pages'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h1 className='mb-5 h3 text-uppercase border-bottom pb-2'>
                Nos Valeurs
              </h1>
              <h2>Liberté</h2>
              <p>
                Celle de faire bouger les lignes de la consommation de masse en
                s’offrant à tout moment un produit de qualité à un prix
                abordable. L'Afrique regorge de trésors à commencer par ceux qui
                se trouvent dans vos placards. Alors sortez-les et mettez-les
                sur la plateforme Basodi. Cela fera des heureux!
              </p>
              <h2>Partage</h2>
              <p>
                Basodi met un point d’honneur à faire de sa plateforme un espace
                de partage. Elle permet de renouveler sa garde-robe de manière
                décomplexée en échangeant des articles avec d’autres
                utilisateurs de la plateforme. Ce système de troc solidaire
                élargit votre choix d’habillement sans réduire votre
                porte-monnaie ou la place dans vos armoires. Une solution pour
                se faire plaisir grâce à la solidarité de chacun.
              </p>
              <h2>Durabilité</h2>
              <p>
                Basodi s’inscrit dans une nouvelle approche de la mode
                africaine, celle de la réduction des déchets et de l’économie
                circulaire. Le principe est simple, il s’agit de contribuer à
                une mode plus durable, plus responsable en valorisant les pièces
                de seconde main.
              </p>
              <h2>Fiabilité et confiance </h2>
              <p>
                Chez Basodi, la confiance n'exclut pas le contrôle! En effet, la
                communauté s'autorégule et permet des échanges où la politesse
                et le respect sont de rigueur. Pour assurer la qualité de ces
                échanges, Basodi se positionne comme intermédiaire de confiance
                et se réserve le droit, sur signalement, de supprimer le compte
                d’utilisateur ne respectant pas la charte de la plateforme.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <TopFooter />
    </div>
  );
};

export default Values;
