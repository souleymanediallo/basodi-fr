import React from "react";
import { TopFooter } from "../../components/TopFooter";

const Engagement = () => {
  return (
    <div>
      <section class='py-6'>
        <div class='container pages'>
          <div class='row justify-content-center'>
            <div class='col-lg-9'>
              <h1 class='mb-5 h3 text-uppercase border-bottom pb-2'>
                Nos engagements
              </h1>
              <h2>une démarche économique</h2>
              <p>
                En passant par la plateforme Basodi vous avez l’assurance de
                gagner en pouvoir d’achat en vendant vos vêtements, chaussures
                et accessoires africains neufs ou de seconde et en achetant ces
                mêmes articles à des prix abordables. C’est une occasion unique
                de gagner un peu d’argent et de renouveler à moindre coût votre
                garde robe.
              </p>
              <h2>une démarche anti-gaspillage</h2>
              <p>
                La plateforme Basodi vous incite à faire de la place dans vos
                armoires et à faire évoluer votre dressing. Fini l’accumulation
                de vêtements trop grands, trop petits ou tout simplement plus à
                votre goût. Offrez à vos affaires une seconde vie.
              </p>
              <h2>une démarche éco responsable</h2>
              <p>
                Basodi vous invite à consommer autrement, de manière plus
                respectueuse de l’environnement. L’enjeu est d’offrir un autre
                cycle de vie aux produits en contribuant à donner une deuxième,
                voire une troisième vie à vos vêtements, chaussures et
                accessoires africains. Ainsi, avec Basodi on crée de nouvelles
                habitudes de consommation en recyclant et en pensant à la
                planète !
              </p>
              <h2>une démarche solidaire</h2>
              <p>
                Basodi œuvre pour une société plus humaine et plus juste. La
                plateforme se veut être le moteur d’un changement social : le
                don en ligne de vêtements, chaussures et accessoires africains.
                En quelques clics, Basodi facilite la réalisation de bonnes
                actions en permettant à ses utilisateurs d’offrir des articles
                et de faire le bonheur de personnes dans le besoin.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TopFooter />
    </div>
  );
};

export default Engagement;
