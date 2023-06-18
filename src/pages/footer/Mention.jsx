import React from "react";
import { TopFooter } from "../../components/TopFooter";

const Mention = () => {
  return (
    <div>
      <section className='py-6'>
        <div className='container pages'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <h1 className='mb-5 h3 text-uppercase border-bottom pb-2'>
                Mentions légales
              </h1>
              <p>
                L’application web www.basodi.sn est une marketplace de mise en
                relation entre vendeurs et acheteurs de vêtements, chaussures et
                accessoires africains.
              </p>
              <p>
                L'accès à l'application web, sa consultation et son utilisation
                sont gratuits. Néanmoins, l’inscription à l’application web est
                subordonnée à l'acceptation sans réserve des Conditions
                Générales d'Utilisation de www.basodi.sn
              </p>
              <h2>Publication</h2>
              <p>
                L’application web www.basodi.sn est conçue et éditée par
                Monsieur DIALLO en sa qualité de directeur de publication.
              </p>
              <h2>Hébergement</h2>
              <p>
                L’application web www.basodi.sn est hébergée par la société OVH
                dont le siège social est sis 2 rue Kellermann, 59100 Roubaix,
                France.
              </p>
              <h2>Contact</h2>
              <p>
                Vous pouvez contacter l’équipe Basodi via le formulaire de
                contact ou à l’adresse électronique basodi.sn@gmail.com{" "}
              </p>
              <h2>Responsabilités </h2>
              <p>
                Les informations contenues sur cette marketplace sont
                régulièrement mises à jour de sorte à offrir aux utilisateurs
                des éléments précis et fiables.
              </p>
              <p>
                Cependant, le directeur de publication ne pourra être tenu
                responsable des omissions, inexactitudes et manquement dans la
                mise à jour du site.
              </p>
              <p>
                Toutes les informations indiquées sur le site www.basodi.sn sont
                données à titre indicatif et sont susceptibles de changer ou
                d’évoluer sans préavis.
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
              <h2>Propriété intellectuelle</h2>
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
              <h2>Protection des données personnelles</h2>
              <p>
                L’application web www.basodi.sn est de manière générale
                consultable sans communication d’informations personnelles.
              </p>
              <p>
                L’application web www.basodi.sn ne collecte les informations
                personnelles relatives à l’utilisateur que dans le cadre de
                l’usage du formulaire d'inscription et s’engage à ne pas en
                faire un usage commercial.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TopFooter />
    </div>
  );
};

export default Mention;
