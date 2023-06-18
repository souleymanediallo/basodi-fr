import React from "react";
import { TopFooter } from "../../components/TopFooter";

const Utilisation = () => {
  return (
    <div>
      <section className='py-6'>
        <div className='container pages'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h1 className='mb-5 h3 text-uppercase border-bottom pb-2'>
                Utilisation de la plateforme Basodi
              </h1>
              <h2>Consulter les annonces en ligne</h2>
              <p>
                Pour consulter gratuitement les annonces en ligne, il vous
                suffit de vous rendre sur le site www.basodi.com. La
                consultation des annonces est gratuite et accessible sans compte
                utilisateur.
              </p>
              <h2 className='h5 text-uppercase'>Créer un compte Basodi</h2>
              <p className='text-justify'>
                Pour créer un compte Basodi, rendez-vous dans la rubrique
                inscription. Vous devez simplement renseigner le formulaire
                d’inscription en indiquant votre prénom, votre adresse e-mail,
                votre numéro de téléphone et un mot de passe que vous aurez
                préalablement choisi. Ensuite, vous devez lire et accepter les
                conditions générales d’utilisation de Basodi, et enfin, appuyez
                sur "S'inscrire" pour activer gratuitement votre compte.
              </p>
              <h2>Déposer une annonce gratuite sur Basodi</h2>
              <p>
                Pour vendre, acheter, échanger ou donner gratuitement sur
                Basodi, c’est simple et rapide.
              </p>
              <p>
                Ouvrez la plateforme www.basodi.com, puis connectez-vous à votre
                compte Basodi. Ensuite, sélectionnez la catégorie correspondant
                à votre article, puis cliquez sur "Déposer mon annonce".
              </p>
              <p>
                Renseignez les informations sur votre annonce : titre, prix,
                description de l’article, photos et localisation.
              </p>
              <p>
                Indiquez les informations vous concernant : prénom, téléphone
                (vous pouvez le masquer sur l'annonce).
              </p>
              <p>Cliquez sur "Publier votre annonce".</p>
              <h2>Modifier une annonce postée sur Basodi</h2>
              <p>
                Le contenu d’une annonce peut être modifié à tout moment et
                gratuitement. Pour ce faire, vous devez vous connecter à votre
                profil, puis vous rendre dans la rubrique "Gérer mes annonces".
                Le contenu de l’annonce est alors modifiable. N'oubliez pas
                d'enregistrer les modifications pour qu'elles puissent être
                prises en compte.
              </p>
              <h2>Contacter un vendeur</h2>
              <p>Pour contacter un vendeur, deux options s'offrent à vous :</p>
              <ul>
                <li>
                  Les coordonnées téléphoniques du vendeur sont visibles sur
                  l’annonce, vous pouvez le contacter directement.
                </li>
                <li>
                  Les coordonnées téléphoniques du vendeur sont masquées, vous
                  pouvez lui adresser un message via la plateforme.
                </li>
              </ul>
              <h2>Réalisation de la transaction</h2>
              <p>
                Une fois la mise en relation effectuée via la plateforme
                www.basodi.com, les utilisateurs prennent contact, se fixent
                rendez-vous dans un lieu décidé d’un commun accord et réalisent
                la transaction en dehors de la plateforme.
              </p>
              <h2>Supprimer une annonce postée sur Basodi</h2>
              <p>
                Lorsque l’article mis en annonce a trouvé preneur, vous pouvez
                procéder à la suppression de votre annonce via votre profil.
                Pour ce faire, il suffit de se connecter à votre profil
                utilisateur, de vous rendre à la rubrique "Gérer mes annonces"
                et de cliquer sur "Supprimer l’annonce".
              </p>
              <h2>La validation de mon annonce</h2>
              <p>
                Concernant la validation de l’annonce, une fois l’annonce
                publiée sur www.basodi.com, elle fait l’objet d’une publication
                instantanée. En cas de non-respect des conditions générales
                d’utilisation de Basodi acceptées lors de l'inscription de
                l’utilisateur, les modérateurs de la plateforme Basodi se
                réservent le droit de supprimer l’annonce et/ou le compte
                utilisateur.
              </p>
              <h2>Signaler une fraude ou une arnaque</h2>
              <p>
                Les modérateurs de Basodi travaillent sans relâche pour détecter
                les tentatives d’arnaques et mieux protéger les utilisateurs de
                la plateforme www.basodi.com.
              </p>
              <p>
                Toutefois, si vous détectez une annonce qui vous semble
                frauduleuse, vous pouvez la signaler sur la plateforme
                www.basodi.com en vous rendant sur l’annonce concernée et en
                cliquant sur l’onglet "Signaler cette annonce". Il vous sera
                demandé d’indiquer les motifs de votre signalement. Un
                modérateur procédera à une vérification de l’annonce.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TopFooter />
    </div>
  );
};

export default Utilisation;
