import React from "react";
import { Link } from "react-router-dom";
import { TopFooter } from "../../components/TopFooter";

const Condition = () => {
  return (
    <div>
      <section className='py-6'>
        <div className='container pages'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h1 className='mb-5 h3 text-uppercase border-bottom pb-2'>
                Conditions générales d'utilisation
              </h1>
              <h2>1. Préambule</h2>
              <p>
                Basodi est avant tout une application web de mise en relation
                qui facilite les échanges solidaires et propose une manière
                économique et écologique de consommer la mode africaine.
              </p>
              <p>
                Chacun peut gratuitement vendre, acheter, échanger ou donner des
                vêtements, chaussures ou accessoires africains selon les
                conditions générales d’utilisation de la plateforme Basodi
                indiquées ci-après.
              </p>
              <h2>2. Objet</h2>
              <p>
                Les Conditions générales d’utilisation de la plateforme Basodi
                permettent de déterminer les conditions d'utilisation du Site
                www.basodi.sn mis à disposition des Utilisateurs et des
                Annonceurs.
              </p>
              <p>
                Toute personne morale, détenteur d’un compte sur la plateforme,
                qui dépose une annonce sur le site est désignée comme annonceur,
                déclare avoir pris connaissance des présentes Conditions
                Générales d’Utilisation et en accepte expressément les termes.
              </p>
              <p>
                Les annonceurs et les utilisateurs de la plateforme Basodi
                s'engagent à respecter scrupuleusement et intégralement les
                présentes Conditions Générales d’Utilisation.
              </p>
              <h2>3. Définitions</h2>
              <p>
                Les présentes définitions s'appliquent à l'ensemble des
                conditions juridiques applicables au Site Internet
                www.basodi.com à savoir aux Conditions Générales d'Utilisation,
                à la Politique de confidentialité et à la Charte du Bon
                Annonceur.
              </p>
              <ul>
                <li>
                  <strong>Annonce</strong> : désigne l'ensemble des éléments
                  conçus par un annonceur et diffusés sur la plateforme, à
                  l'effet de vente, location, don ou recherche d’un bien.
                </li>
                <li>
                  <strong>Article</strong> : désigne tout élément (vêtement,
                  chaussure, accessoire) mis en ligne sur la plateforme à des
                  fins de vente, location, échange ou don.
                </li>
                <li>
                  <strong>Conditions Générales d’Utilisation</strong> : désigne
                  les conditions générales d’utilisation du Site, à savoir
                  l’ensemble des obligations des Utilisateurs et des Annonceurs
                  ainsi que les relations entre les Utilisateurs, les Annonceurs
                  et la plateforme Basodi.
                </li>
                <li>
                  <strong>Compte</strong> : désigne le compte du membre sur
                  lequel il peut accéder notamment à ses Données personnelles,
                  ses Annonces, ses alertes e-mail, ses newsletters.
                </li>
                <li>
                  <strong>Contenu</strong> : désigne tout élément mis en ligne
                  par un Membre sur la plateforme savoir, tout descriptif
                  d’article (prix, information, texte, donnée), commentaire,
                  avis, évaluation, nom, pseudonyme, enseigne, photographie,
                  image, logo et tout autre élément mis en ligne.
                </li>
                <li>
                  <strong>Données personnelles</strong> : désigne les
                  informations à caractère personnel renseignées par le membre
                  détenteur d’un compte et indiqué sur son Espace personnel. Les
                  Données personnelles susceptibles d’être collectées sont
                  définies dans la Politique de confidentialité.
                </li>
                <li>
                  <strong>Espace publicitaire</strong> : désigne les produits
                  publicitaires proposés par la Société aux Annonceurs
                  professionnels, tels que notamment des vignettes, bannières ou
                  pavés, diffusés sur le Site et/ou le Support Papier et tels
                  que détaillés dans les BdC. Le BdC précise la durée de
                  l’Espace Publicitaire et les prix associés. L’Annonceur est
                  informé que les Eléments Publicitaires sont diffusés de
                  manière aléatoire sur le Site sauf disposition contraire
                  précisée dans le Bon de Commande.
                </li>
                <li>
                  <strong>Membre</strong> : désigne toute personne qui s'inscrit
                  sur la Plateforme Basodi.
                </li>
                <li>
                  <strong>Messagerie</strong> : désigne la messagerie interne
                  proposée sur la plateforme Basodi qui permet aux Utilisateurs
                  d'entrer en contact avec les Annonceurs afin de leur soumettre
                  leurs demandes de compléments d'informations et/ou de convenir
                  de la vente entre eux. La Messagerie est accessible à partir
                  d’un Compte Utilisateur.
                </li>
                <li>
                  <strong>Offre</strong> : désigne la proposition émise par un
                  membre à destination d’un utilisateur pour la remise d’un
                  article.
                </li>
                <li>
                  <strong>Plateforme</strong> : désigne la structure technique
                  conçue par Basodi pour permettre la mise en relation entre
                  utilisateurs et membres, accessible par le biais du site ou de
                  l’application.{" "}
                </li>
                <li>
                  <strong>Politique de confidentialité </strong> : désigne les
                  règles de protection et de sécurité appliquées aux Données
                  personnelles.
                </li>
                <li>
                  <strong>Transaction</strong> : désigne le paiement, l’échange
                  ou le don d’un article par un membre auprès d’un utilisateur
                  en dehors de la plateforme.
                </li>
                <li>
                  <strong>Utilisateur</strong> : désigne tout visiteur, ayant
                  accès au Site Internet sur lequel il peut consulter les pages
                  du Site Internet et s'il le souhaite utiliser les Services
                  ouverts du Site.
                </li>
              </ul>
              <h2>
                4. Description des services accessibles sur la plateforme Basodi
                aux membres et aux utilisateurs
              </h2>
              <p>La plateforme Basodi donne accès aux services ci-après :</p>
              <ul>
                <li>la consultation gratuite des articles mis en ligne</li>
                <li>la création d'un compte membre </li>
                <li>l’accès à l’espace personnel</li>
                <li>
                  la création d'annonces valable uniquement pour les membres
                </li>
                <li>
                  la diffusion, la modification ou la suppression d'annonces{" "}
                </li>
                <li>la création d'alertes e-mails pour les annonces</li>
                <li>
                  la gestion des coordonnées et des informations personnelles
                </li>
                <li>
                  la mise en contact entre les utilisateurs intéressés par les
                  Annonces et les membres par l'intermédiaire de la Messagerie.
                </li>
              </ul>
              <h2>5. Acceptation des conditions générales d’utilisation</h2>
              <p>
                La consultation de la plateforme Basodi ne nécessite pas
                d’acceptation des conditions générales d’utilisation. Cependant,
                pour toute utilisation de la Plateforme Basodi, le membre devra
                obligatoirement avoir pris connaissance et accepter sans
                restriction ni réserve les présentes Conditions Générales en
                cochant la case prévue à cet effet pour la validation de son
                compte.
              </p>
              <h2>6. Modification des conditions générales d’utilisation</h2>
              <p>
                La plateforme Basodi se réserve le droit de modifier à tout
                moment les présentes Conditions Générales d’utilisation. En cas
                de modification, les membres de la plateforme en seront informés
                par tous moyens et au minimum dix (10) jours avant leur entrée
                en vigueur, afin que ces derniers puissent prendre connaissance
                des modifications. Dans l’hypothèse où le membre n’accepterait
                pas les nouvelles Conditions Générales, ce dernier pourra à tout
                moment procéder à sa désinscription de la Plateforme. A cet
                effet, il suffira au membre d’aller dans son espace personnel et
                de se désinscrire via l’option proposée.
              </p>
              <h2>7. Création et suppression d’un compte </h2>
              <h2>7.1. Dispositions générales</h2>
              <p>
                La création d’un compte sur la plateforme Basodi est gratuite et
                réservée aux personnes physiques majeures ayant la capacité
                d’accomplir des actes juridiques, ou ayant obtenu l’autorisation
                préalable de leur représentant légal.{" "}
              </p>
              <p>
                Un même utilisateur ne doit créer qu'un seul et unique compte.
                Pour ce faire, l’utilisateur doit renseigner le formulaire
                d'inscription accessible à partir d’un onglet prévu à cet effet
                et intitulé compte.
              </p>
              <p>
                La création d'un Compte peut également s'effectuer de manière
                simultanée à la dépose d’une annonce par un utilisateur après
                prise de connaissance et validation des conditions générales
                d’utilisation.
              </p>
              <h2>7.2. Création du Compte</h2>
              <p>
                L'utilisateur s'engage à compléter les champs obligatoires le
                formulaire d'inscription en ligne de bonne foi, en fournissant
                des informations exactes.
              </p>
              <p>
                Le membre s'engage à ne pas usurper d'identité, ni utiliser une
                fausse identité de nature à induire les tiers en erreur quant à
                l'identité de l'auteur d'une Annonce.
              </p>
              <p>
                Le membre devra obligatoirement renseigner les champs suivants :
                sa civilité, ses nom et prénom, son adresse e-mail, sa localité.
                Il pourra à titre facultatif indiquer son numéro de téléphone.
              </p>
              <p>
                Le nom d'utilisateur et le mot de passe du Membre sont
                strictement personnels et le Membre s'engage à en maintenir la
                confidentialité.{" "}
              </p>
              <h2>7.3. Mot de passe</h2>
              <p>
                Le membre s'engage à conserver la confidentialité de son mot de
                passe lui permettant d'accéder à son Compte et sa Messagerie.
              </p>
              <p>
                Basodi ne saurait être tenue responsable par le membre en cas
                d'agissements frauduleux sur la plateforme par un tiers en
                possession de son mot de passe. Charge au membre concerné de se
                retourner contre ce tiers.{" "}
              </p>
              <p>
                L'utilisateur s'engage à signaler à la plateforme Basodi toute
                utilisation non autorisée de son Compte ou de sa Messagerie, dès
                qu'il en a connaissance.
              </p>
              <h2>7.4 Suppression d’un compte </h2>
              <p>
                Le membre de Basodi peut résilier son inscription et clôturer
                son Compte à tout moment et sans préavis en adressant un mail à
                l’adresse électronique suivante : basodi.sn@gmail.com
              </p>
              <p>
                En cas de résiliation du Compte, les Annonces mises en ligne par
                le membre sur l’application web Basodi seront supprimées
                automatiquement, et ne seront plus accessibles pour les
                utilisateurs.
              </p>
              <p>
                En cas de violation des règles des présentes Conditions
                Générales d’Utilisation, ou en présence de propos à caractère
                mensonger, outrancier, sexuel, raciste, diffamatoire ou
                pornographique, les administrateurs de Basodi se réservent le
                droit de supprimer le compte d’un membre temporairement ou
                définitivement et cela à tout moment et sans préavis.
              </p>
              <h2>8. Règles de diffusion et de dépôt d’une annonce</h2>
              <p>
                Le membre de Basodi pourra déposer gratuitement son article
                selon les conditions indiquées sur le formulaire de dépôt
                d'Annonce. Il pourra y sélectionner la catégorie correspondant à
                son article, rédiger une description de l’article et ajouter des
                photos.
              </p>
              <p>
                La mise en ligne d'une Annonce sur Basodi est instantanée mais
                nécessite au préalable l’acceptation des conditions générales
                d’utilisation de l’application web.
              </p>
              <p>
                Les annonces ne doivent concerner que des vêtements, chaussures
                et accessoires africains. Tout autre article ne correspondant
                pas à cette description sera automatiquement supprimé.
              </p>
              <p>
                Le membre s’engage à publier une annonce en son nom propre et ne
                peut donc agir pour le compte d’une association, d’une
                entreprise ou de tout autre organisme ou personne.
              </p>
              <p>
                Le membre s’engage à publier une annonce qui ne comporte aucun
                élément à caractère mensonger, outrancier, sexuel, raciste,
                diffamatoire ou pornographique.
              </p>
              <p>
                Le membre déclare et reconnaît qu'il est seul responsable du
                contenu des Annonces qu'il publie sur l’application web et rend
                accessible aux autres utilisateurs de Basodi, ainsi que de tout
                document ou information qu'il transmet aux Utilisateurs. Le
                membre assume l'entière responsabilité éditoriale du contenu des
                Annonces qu'il publie.
              </p>
              <h2>9. Règles de suppression d’une annonce </h2>
              <p>
                Le membre de Basodi peut unilatéralement décider de supprimer
                une annonce publiée notamment lorsque l’article n’est plus
                disponible à la vente, à l’échange ou au don. Dès lors,
                l’annonce ne sera plus visible pour les utilisateurs de
                l’application web Basodi.
              </p>
              <p>
                Les administrateurs de Basodi se réservent le droit de
                supprimer, sans préavis ni information ou notification
                préalable, tout ou partie d'une annonce qui serait notamment non
                conforme aux dispositions des présentes Conditions Générales
                d’Utilisation ou qui serait susceptible d'enfreindre ou de
                heurter les droits d'un tiers.
              </p>
              <p>
                Les administrateurs de l’application web Basodi se réservent le
                droit de retirer tout ou partie d'une annonce signalée par un
                Utilisateur comme étant illicite.
              </p>
              <h2>10. Données personnelles</h2>
              <p>
                Le site www.basodi.sn est de manière générale consultable sans
                communication d’informations personnelles.
              </p>
              <p>
                Le site www.basodi.sn ne collecte les informations personnelles
                relatives à l’utilisateur que dans le cadre de l’usage des
                formulaires de contact et d’inscription et s’engage à ne pas en
                faire un usage commercial.
              </p>
              <p>
                Le membre et l’utilisateur sont seuls responsables des données
                qu'ils communiquent.
              </p>
              <h2>11. Responsabilités </h2>
              <p>
                Les services contenus sur www.basodi.sn sont offerts à titre
                indicatif aux utilisateurs de Basodi mais ne constituent en
                aucune façon un engagement ou une garantie quelconque de la part
                de l’application web.
              </p>
              <p>
                L’application web Basodi n'est pas tenue d'exercer un contrôle
                sur la qualité, la licéité, la véracité ou l'exactitude des
                Annonces publiées.{" "}
              </p>
              <p>
                Cependant, comme prévu dans les règles de suppression d’une
                annonce des présentes Conditions Générales d’Utilisation, en cas
                de constat de diffusion d’une annonce au contenu illicite ou
                manifestement illicite, les administrateurs de l’application web
                Basodi se réservent le droit de la supprimer sans préavis.
              </p>
              <p>
                La responsabilité de Basodi ne pourra pas être engagée en cas
                d'utilisation frauduleuse qui pourra être faite par le membre ou
                l'utilisateur des informations qu'il pourra trouver sur
                l’application web.
              </p>
              <p>
                Basodi s'engage à mettre en œuvre tous les moyens nécessaires
                afin d'assurer au mieux la fourniture des services qu'elle
                propose aux utilisateurs et aux membres.
              </p>
              <p>
                La responsabilité de Basodi ne pourra pas être engagée en cas de
                perte de données ou d'informations stockées sur l’application
                web ni du fait de préjudices ou dommages directs ou indirects,
                de quelque nature que ce soit, résultant de la gestion,
                l'utilisation, l'exploitation, l'interruption ou le
                dysfonctionnement de l’application web ou des services s’y
                afférant.
              </p>
              <p>
                La responsabilité de Basodi ne saurait être engagée en cas
                d'interruption de l’application web ou des services s’y afférant
                résultant d'une défaillance du réseau de communications (réseaux
                de communications électroniques ou électriques) ou du
                fournisseur d'accès à Internet de l'utilisateur.
              </p>
              <p>
                La responsabilité de Basodi ne saurait être engagée en cas de
                communication auprès d’un tiers de vos coordonnées bancaires, de
                votre adresse personnelle, vos coordonnées téléphoniques ou de
                toutes autres informations confidentielles vous concernant.
              </p>
              <p>
                L’application web Basodi établit une mise en relation entre
                utilisateurs et membres. A cet effet, Basodi ne saurait en aucun
                cas être tenue responsable du contenu des annonces publiées par
                les membres et ne donne aucune garantie, expresse ou implicite,
                à cet égard.{" "}
              </p>
              <p>
                Par ailleurs, les accords sont conclus directement entre
                l’utilisateur et le membre en dehors de la plateforme. Dans ce
                cadre, le membre est libre de choisir l'utilisateur avec lequel
                il souhaite conclure un accord.
              </p>
              <p>
                Basodi se réserve le droit, à tout moment, de modifier ou
                interrompre l'accessibilité à l’application web ou tout ou
                partie des services proposés.
              </p>
              <p>
                Si vous constatez des anomalies ou des lacunes sur le site, vous
                pouvez nous le signaler par mail à basodi.sn@gmail.com
              </p>
              <p>
                Enfin, le site www.basodi.sn ne peut être tenu responsable de
                l’utilisation faite des informations présentes sur le site et de
                tout préjudice direct ou indirect pouvant en découler.
              </p>
              <h2>12. Propriété intellectuelle</h2>
              <p>
                L’application web www.basodi.sn est propriétaire des droits de
                propriété intellectuelle ou détient les droits d’usage sur la
                majorité des éléments accessibles sur le site notamment les
                textes et les graphismes.
              </p>
              <p>
                L’intégralité du contenu, de l’ergonomie de l'application web,
                de sa mise en page ainsi que tout autre élément composant
                l'application web sont la propriété exclusive de www.basodi.sn
                ou sont incorporés sur l’application web avec la permission des
                titulaires de droits.
              </p>
              <p>
                Ces éléments sont protégés par le code de la Propriété
                Intellectuelle, ainsi que par les dispositions des traités et
                des accords internationaux relatives aux droits d’auteur.
              </p>
              <p>
                En conséquence, toute utilisation, modification, représentation
                et reproduction partielle ou intégrale, pour usage autre que
                privé est formellement interdite.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TopFooter />
    </div>
  );
};

export default Condition;
