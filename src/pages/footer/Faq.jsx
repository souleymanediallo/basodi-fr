import React from "react";
import { TopFooter } from "../../components/TopFooter";

const Faq = () => {
  return (
    <div>
      <section className='py-6'>
        <div className='container pages'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h1 className='mb-5 h3 text-uppercase border-bottom pb-2'>
                Foire aux questions
              </h1>
              <p>
                Basodi répond aux questions les plus fréquemment posées sur la
                plateforme.
              </p>
              <h2>Comment récupérer mon mot de passe oublié ?</h2>
              <p>
                En cas de perte ou d’oubli de votre mot de passe, vous avez la
                possibilité de lancer une procédure de réinitialisation de votre
                mot de passe afin d’en obtenir un nouveau.
              </p>
              <p>
                Pour cela, lors de votre connexion sur Basodi, cliquez sur le
                lien Mot de passe oublié et indiquez l’adresse email renseignée
                lors de votre inscription sur la plateforme Basodi.
              </p>
              <p>
                Quelques minutes plus tard, un email contenant un lien de
                réinitialisation vous sera adressé. Attention : le lien n’est
                valable que 24h. Passé ce délai, vous devrez renouveler
                l’opération pour obtenir un autre lien de réinitialisation
                valide.
              </p>
              <h2>Comment modifier mon mot de passe ?</h2>
              <p>
                Vous avez la possibilité de modifier votre mot de passe sur
                votre compte utilisateur Basodi à n’importe quel moment.
              </p>
              <p>
                Il suffit de vous connecter sur votre compte et d’accéder à
                votre espace personnel puis de cliquer modifier votre mot de
                passe et enfin de renseigner le mot de passe choisi.
              </p>
              <p>
                Une fois l’opération réalisée, l’activation de votre nouveau mot
                de passe est effective dès votre prochaine connexion.
              </p>
              <h2>
                Combien d’articles peut-on mettre en ligne sur la plateforme?
              </h2>
              <p>
                Vous pouvez mettre autant d’articles que vous le souhaitez sur
                la plateforme. Il n’y a pas de nombre d’articles maximum requis
                cependant il est à noter qu’un même article ne peut être ajouté
                qu’une fois.
              </p>
              <h2>Comment se déroule une transaction?</h2>
              <p>
                Les transactions se réalisent en dehors de la plateforme. Les
                utilisateurs prennent contact puis se donnent rendez-vous dans
                le lieu de leur choix pour procéder à la remise de l’article.
              </p>
              <p>
                La plateforme Basodi ne peut être tenue responsable en cas de
                problème lors de cette transaction.
              </p>
              <h2>Qui fixe le prix des articles sur la plateforme Basodi ?</h2>
              <p>
                L’utilisateur est le seul à décider du prix des articles qu’il
                décide de mettre en ligne sur la plateforme Basodi. Le prix doit
                néanmoins être raisonnable pour trouver preneur. Basodi est une
                plateforme gratuite qui ne prélève aucune commission sur les
                ventes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TopFooter />
    </div>
  );
};

export default Faq;
