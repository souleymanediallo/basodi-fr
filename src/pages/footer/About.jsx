import React from "react";
import { Link } from "react-router-dom";
import { TopFooter } from "../../components/TopFooter";

const About = () => {
  return (
    <div>
      <section className='py-6'>
        <div className='container pages'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h1 className='mb-5 h3 text-uppercase border-bottom pb-2'>
                Qui sommes-nous ?
              </h1>
              <h2>Notre mission</h2>

              <p>
                Offrir une seconde vie à vos vêtements, chaussures et
                accessoires africains.
              </p>
              <h2>Comment l’aventure Basodi a commencé ?</h2>

              <p>
                Jeune couple, nous souhaitions nous marier dans la pure
                tradition africaine. Pour ce faire, nos familles nous ont offert
                plusieurs tenues traditionnelles. Une fois ces vêtements portés
                et la cérémonie terminée, nous nous sommes demandés :
                qu’allons-nous faire de ces habits traditionnels puisqu’aucune
                autre occasion n’allait se présenter pour les porter ? Vendre
                nos tenues africaines? les donner ? Mais à qui ?{" "}
              </p>

              <p>
                Nous nous sommes donc mis en quête d’une plateforme de mise en
                relation pour vente ou don de vêtements traditionnels africains.
                Le constat a été sans appel : aucun site ne proposait cette
                option.
              </p>
              <p>
                Pourtant les placards de chacun d’entre nous regorgent de tenues
                traditionnelles peu ou pas portées qui pourraient servir à
                d’autres si on prenait la peine de leur offrir une seconde vie !
              </p>
              <p>
                C’est le défi que nous nous sommes lancé ! Ouvrir une plateforme
                de mise en relation entre particuliers et professionnels dédiée
                uniquement à la vente, à l’échange ou au don de vêtement
                traditionnel africain neuf ou de seconde main. Ce défi s’appelle
                Basodi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TopFooter />
    </div>
  );
};

export default About;
