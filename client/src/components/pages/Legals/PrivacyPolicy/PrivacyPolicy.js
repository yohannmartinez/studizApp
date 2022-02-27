import Footer from "../../../elements/Footer/Footer";
import Menu from "../../../elements/Menu/Menu";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import "../legal.scss";

const PrivacyPolicy = () => {
  return (
    <div className="legal__globalContainer">
      <Menu backgroundColor={"#fff"} />
      <PageWrapper>
        <div className="legal__container">
          <h1 className="legal__pageTitle">Politique de confidentialité</h1>
          <p className="legal__text">
            STUDIZ société par actions simplifiée, immatriculée au Registre du
            Commerce et des Sociétés de Tours sous le numéro 907 943 105, dont
            le siège social est situé sis 19 bis avenue du Général De Gaulle
            (ci-après le « <b>STUDIZ</b> »), est soucieuse de la protection des
            données personnelles des Utilisateurs et s’engage à les protéger en
            conformité avec la réglementation applicable et notamment le
            Règlement (UE) n°2016/679 du 27 avril 2016 dit « Règlement Général
            sur la Protection des Données » ou « RGPD » et la loi n° 78-17 du 6
            janvier 1978 modifiée dite « Loi Informatique et Liberté ».
            <br />
            <br /> Tous les termes identifiés par une majuscule, s’ils ne sont
            pas définis dans la présente{" "}
            <a href="https://studiz.eu/privacyPolicy">
              politique de confidentialité
            </a>
            , ont le sens qui leur est donné dans les conditions générales
            d’utilisation de la Plateforme. Lorsqu’elle collecte les données
            personnelles de l’Utilisateur, STUDIZ met en œuvre des traitements
            de celles-ci pour lesquels elle est qualifiée de « responsable de
            traitement », au sens des textes précités. A ce titre, STUDIZ
            s’engage à respecter à tout moment les exigences de la
            réglementation applicable à la protection des données personnelles
            et à n’opérer de traitements sur les données personnelles des
            Utilisateurs que dans les conditions prévues ci-après.
          </p>

          <h2 className="legal__categoryTitle">
            Finalités du traitement des données personnelles
          </h2>
          <p className="legal__text">
            STUDIZ collecte les données personnelles de l’Utilisateur pour les
            besoins suivants :{" "}
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              gérer la création et l’utilisation du Compte de l’Utilisateur
            </li>
            <li className="legal__listItem">
              gestion du fonctionnement et optimisation de la Plateforme
            </li>
            <li className="legal__listItem">fourniture des services</li>
            <li className="legal__listItem">
              communiquer avec l’Utilisateur lorsqu’il sollicite toutes
              informations utiles sur la Plateforme ou les Services, par
              l’intermédiaire du formulaire de contact disponible sur la
              Plateforme et/ou tous autres moyens de communication (email,
              téléphone, chatbot)
            </li>
            <li className="legal__listItem">
              adresser la newsletter (actualités et offres de services) si
              l’Utilisateur en fait la demande
            </li>
            <li className="legal__listItem">
              adresser les offres des partenaires, si l’Utilisateur en fait la
              demande
            </li>
            <li className="legal__listItem">
              suivre et analyser le trafic de la plateforme à des fins
              statistiques
            </li>
          </ul>

          <h2 className="legal__categoryTitle">
            Données personnelles collectées
          </h2>
          <p className="legal__text">
            STUDIZ collecte les données personnelles suivantes concernant
            l’Utilisateur :{" "}
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              Création et gestion du Compte :{" "}
            </li>
            <ul className="legal__list">
              <li className="legal__listItem">Etat civil : nom, prénom</li>
              <li className="legal__listItem">Adresse email</li>
              <li className="legal__listItem">Date de naissance</li>
              <li className="legal__listItem">Numéro de téléphone</li>
            </ul>
            <li className="legal__listItem">
              Création d’un profil sur la Plateforme
            </li>
            <ul className="legal__list">
              <li className="legal__listItem">Université</li>
              <li className="legal__listItem">Diplômes </li>
              <li className="legal__listItem">Age</li>
            </ul>
            <li className="legal__listItem">Newsletter </li>
            <ul className="legal__list">
              <li className="legal__listItem">Adresse Email</li>
            </ul>
            <li className="legal__listItem">Formulaire de contact</li>
            <ul className="legal__list">
              <li className="legal__listItem">Adresse Email</li>
              <li className="legal__listItem">
                Toute information qui sera communiquée dans le message adressé à
                STUDIZ
              </li>
            </ul>
          </ul>
          <p className="legal__text">
            Le caractère obligatoire ou facultatif de la saisine des données est
            précisé lors de la collecte, par un astérisque apposé à côté des
            données à renseigner de manière obligatoire. La communication
            obligatoire de certaines données personnelles est nécessaire à
            STUDIZ pour mettre en œuvre les finalités ci-avant précisées. Les
            données facultatives permettent à STUDIZ de mieux connaitre
            l’Utilisateur.{" "}
          </p>

          <h2 className="legal__categoryTitle">
            Durée de conservation des données personnelles de l’Utilisateur
          </h2>
          <p className="legal__text">
            STUDIZ conservera les données personnelles de l’Utilisateur tant que
            son Compte est actif. A la clôture du Compte de l’Utilisateur, pour
            quelque cause que ce soit, STUDIZ archivera les données personnelles
            de l’Utilisateur pendant la durée légale nécessaire aux fins de
            prévention et lutte contre la fraude, ainsi qu’aux fins de preuve
            pour la constatation, l’exercice ou la défense d’un droit en
            justice. Au-delà, les données personnelles de l’Utilisateur seront
            anonymisées.
          </p>

          <h2 className="legal__categoryTitle">
            Destinataires des données personnelles de l’Utilisateur
          </h2>
          <p className="legal__text">
            Sauf obligation légale ou judiciaire lui enjoignant de le faire,
            STUDIZ ne divulguera, cédera, louera ou transmettra jamais les
            données personnelles de l’Utilisateur à des tiers autres que
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              Pour un Utilisateur ayant accepté de recevoir des offres des
              partenaires de STUDIZ et/ou utilisant des services payants sur la
              Plateforme
            </li>
            <ul className="legal__list">
              <li className="legal__listItem">
                Les partenaires commerciaux de STUDIZ proposant des offres
                susceptibles d’intéresser l’Utilisateur
              </li>
              <li className="legal__listItem">
                Le partenaire financier de STUDIZ gérant les services payants,
                STRIPE
              </li>
            </ul>
          </ul>
          <p className="legal__text">
            Ces partenaires agissent comme sous-traitants de STUDIZ au sens de
            la réglementation applicable à la protection des données
            personnelles, sur instructions de STUDIZ et dans les conditions
            contractuelles signées avec STUDIZ qui ne peuvent déroger au présent
            article et qui sont conformes à la réglementation applicable à la
            protection des données personnelles.
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              Pour tous les Utilisateurs du Site:
            </li>
            <ul className="legal__list">
              <li className="legal__listItem">
                L’hébergeur du Site, tel que mentionné dans les mentions légales
                du Site, disponibles à l’adresse suivante{" "}
                <a href="https://studiz.eu/legalMentions">
                  https://studiz.eu/legalMentions
                </a>
                , aux fins d’exécution des prestations techniques d’hébergement
                et de gestion des bases de données. Ce prestataire agit comme
                sous-traitant de STUDIZ au sens de la réglementation applicable
                à la protection des données personnelles, sur instructions de
                STUDIZ et dans les conditions contractuelles signées avec STUDIZ
                qui ne peuvent déroger au présent article et qui sont conformes
                à la réglementation applicable à la protection des données
                personnelles
              </li>
            </ul>
          </ul>

          <h2 className="legal__categoryTitle">
            Mesures de sécurité mises en œuvre
          </h2>
          <p className="legal__text">
            STUDIZ s’engage à assurer la sécurité et l’intégrité des données
            personnelles de l’Utilisateur. A ce titre, STUDIZ met en œuvre et
            maintient des mesures techniques et organisationnelles de sécurité
            de la Plateforme et, plus généralement, de son système d’information
            adaptées au regard de la nature des données personnelles traitées et
            des risques présentés par leur traitement. Ces mesures visent à (i)
            protéger les données personnelles contre leur destruction, perte,
            altération, divulgation à des tiers non autorisés, (ii) assurer le
            rétablissement de la disponibilité des données personnelles et
            l'accès à celles-ci dans des délais appropriés en cas d'incident
            physique ou technique.
          </p>
          <p className="legal__text">
            Ces mesures sont régulièrement testées, analysées et évaluées, afin
            d’assurer constamment leur efficacité et, par conséquent, la
            sécurité des traitements.
          </p>

          <h2 className="legal__categoryTitle">
            Droits de l’Utilisateur sur ses données personnelles
          </h2>
          <p className="legal__text">
            L’Utilisateur dispose à tout moment, des droits suivants sur ses
            données personnelles :{" "}
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              <b>Droit d’accès</b> : obtenir la confirmation du traitement de
              ses données personnelles ainsi qu’un certain nombre d’informations
              sur les traitements, étant entendu que ces informations sont en
              tout état de cause données dans la présente politique de
              protection des données personnelles
            </li>
            <li className="legal__listItem">
              <b>Droit de rectification</b> : obtenir la rectification de ses
              données personnelles lorsqu’elles sont inexactes ou incomplètes
            </li>
            <li className="legal__listItem">
              <b>Droit à l’effacement (« droit à l’oubli »)</b> : obtenir
              l’effacement de ses données personnelles lorsqu’elles ne sont plus
              nécessaires au regard des finalités pour lesquelles elles ont été
              collectées ou que l’Utilisateur s’oppose au traitement de ses
              données personnelles
            </li>
            <li className="legal__listItem">
              <b>Droit à la limitation du traitement</b> : obtenir la limitation
              du traitement de ses données personnelles lorsque l’Utilisateur
              conteste l’exactitude des données, lorsque le délai de
              conservation des données est arrivé à son terme mais que
              l’Utilisateur a encore besoin de conserver ces données
              personnelles pour la constatation, l’exercice ou la défense d’un
              droit en justice, ou si l’Utilisateur s’est opposé au traitement
            </li>
            <li className="legal__listItem">
              <b>Droit à la portabilité</b> : obtenir la communication des
              données personnelles que l’Utilisateur a communiquées à STUDIZ
              dans un format lisible, ou demander à STUDIZ qu’elle transmette
              les données personnelles que l’Utilisateur a communiquées à un
              autre responsable de traitement
            </li>
            <li className="legal__listItem">
              <b>Droit d’opposition</b> : s’opposer à tout moment, pour des
              motifs tenant à sa situation personnelle, au traitement de ses
              données personnelles, notamment dans le cas où cette opposition
              concerne de la prospection commerciale, y compris le profilage
            </li>
            <li className="legal__listItem">
              <b>Retrait du consentement</b> : retirer son consentement au
              traitement futur de ses données personnelles par STUDIZ, lorsque
              le traitement est fondé sur le consentement
            </li>
            <li className="legal__listItem">
              <b>Droit d’introduire une réclamation</b> : si l’Utilisateur
              considère que le traitement opéré par STUDIZ constitue une
              violation de ses données personnelles, il peut introduire une
              réclamation auprès de la Commission Nationale de l’Informatique et
              des Libertés, en ligne à l’adresse https://www.cnil.fr/fr/plaintes
              ou par courrier postal à l’adresse suivante : CNIL - 3 Place de
              Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07
            </li>
          </ul>
          <p className="legal__text">
            Les droits de l’Utilisateur sur ses données personnelles peuvent
            être exercés à tout moment auprès de STUDIZ par email à l’adresse
            suivante :{" "}
            <a href="mailto: studiz.officiel@gmail.com">
              studiz.officiel@gmail.com
            </a>{" "}
            . Il sera demandé à l’Utilisateur une pièce d’identité pour
            justifier de son identité
          </p>

          <h2 className="legal__categoryTitle">Gestion des cookies</h2>
          <p className="legal__text">
            STUDIZ a recours à l’utilisation de cookies pour les bonnes fins du
            fonctionnement de la Plateforme et pour suivre et analyser le trafic
            sur celle-ci. Un « cookie » est un petit fichier de données envoyé
            au navigateur de l’Utilisateur par un serveur web et stocké sur le
            disque dur de son ordinateur. Ils ne risquent en aucun cas
            d’endommager l’ordinateur.
          </p>
          <p className="legal__text">
            Les informations collectées par le biais des cookies sont uniquement
            et strictement destinées à STUDIZ, dans le respect de la
            réglementation applicable à la protection des données personnelles.
            Les cookies issus d’éditeurs tiers (Google, Facebook, Twitter, etc.)
            permettent à ces éditeurs d’accéder aux informations collectées par
            le biais de leurs cookies, selon les modalités précisées dans le
            tableau et la clause « Réseaux sociaux » ci-après.
          </p>
          <p className="legal__text">STUDIZ utilise les cookies suivants :</p>
          <ul className="legal__list">
            <li className="legal__listItem">
              <b>_ga</b>: Cookie de statistiques, conservé le temps de la
              session
            </li>
            <li className="legal__listItem">
              <b>_gid</b>: Cookie de statistiques, conservé le temps de la
              session
            </li>
          </ul>
          <p className="legal__text">
            L’Utilisateur est libre de consentir à l’utilisation de toute ou
            partie des cookies (autres que les cookies strictement nécessaires
            aux fins de fonctionnement de la Plateforme) utilisés par STUDIZ sur
            la Plateforme. L’Utilisateur est également libre de retirer son
            consentement à l’utilisation des cookies à tout moment, en cliquant
            sur le lien suivant :{" "}
            <a href="mailto: studiz.officiel@gmail.com">
              studiz.officiel@gmail.com
            </a>
            .
          </p>
          <p className="legal__text">
            L’Utilisateur peut également paramétrer son navigateur pour accepter
            les cookies ou les désactiver. Les instructions en matière de
            cookies sur les navigateurs les plus couramment utilisés sont
            disponibles sur les liens suivants :
          </p>
          <p className="legal__text">
            Les instructions en matière de cookies sur les navigateurs les plus
            couramment utilisés sont disponibles sur les liens suivants :
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              Windows Internet Explorer® :
              <a href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies">
                https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies
              </a>
            </li>
            <li className="legal__listItem">
              Mozilla Firefox® :
              <a href="https://support.mozilla.org/fr/kb/autoriser-bloquer-cookies-preferences-sites">
                https://support.mozilla.org/fr/kb/autoriser-bloquer-cookies-preferences-sites
              </a>
            </li>
            <li className="legal__listItem">
              Google Chrome® :
              <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DiOS&hl=fr">
                https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DiOS&hl=fr
              </a>
            </li>
            <li className="legal__listItem">
              Apple Safari® (iPhone ; iPad):
              <a href="https://support.apple.com/fr-fr/HT201265">
                https://support.apple.com/fr-fr/HT201265
              </a>
            </li>
            <li className="legal__listItem">
              Apple Safari® (Mac) :
              <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac">
                https://support.apple.com/fr-fr/guide/safari/sfri11471/mac
              </a>
            </li>
            <li className="legal__listItem">
              Désactivation de Google Analytics :
              <a href="https://tools.google.com/dlpage/gaoptout">
                https://tools.google.com/dlpage/gaoptout
              </a>
            </li>
          </ul>

          <h2 className="legal__categoryTitle">Réseaux sociaux</h2>
          <p className="legal__text">
            La Plateforme utilise les plug-in des réseaux sociaux suivants :{" "}
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              Facebook®, exploité par la société Facebook Inc., dont le siège
              social est sis 1601 S. California Ave, Palo Alto, CA 94304,
              États-Unis
            </li>
            <li className="legal__listItem">
              Instagram®, exploité par la société Facebook Inc., dont le siège
              social est sis 1601 S. California Ave, Palo Alto, CA 94304,
              États-Unis
            </li>
            <li className="legal__listItem">
              Linkedin®, exploité par la société Microsoft Inc., dont le siège
              social est sis 599 N Mathilda Avenue, Sunnyvale, Etats-Unis
            </li>
          </ul>
          <p className="legal__text">
            Lorsque l’Utilisateur interagit au moyen de ces plug-in, son
            navigateur établit une connexion directe avec les serveurs du réseau
            social correspondant. Le contenu du plug-in est aussitôt transmis
            par le navigateur de l’Utilisateur au réseau social et enregistré
            sur ses serveurs. Par l’intégration de ce plug-in, le réseau social
            est informé que l’Utilisateur a consulté la Plateforme. Il peut
            ainsi associer la navigation de l’Utilisateur sur la Plateforme à
            son compte utilisateur de ce réseau social, le cas échéant. Si
            l’Utilisateur ne souhaite pas que le réseau social collecte des
            données le concernant par l’intermédiaire de la Plateforme et les
            relie à son compte utilisateur sur le réseau social, l’Utilisateur
            doit se déconnecter du réseau social correspondant avant de visiter
            la Plateforme. Si l’Utilisateur n’est pas membre du réseau social,
            il est néanmoins possible qu’il récupère et enregistre son adresse
            IP.
          </p>
          <p className="legal__text">
            En tout état de cause, STUDIZ n’a aucun contrôle sur le contenu
            exact des données ainsi collectées. L’utilisation des plug-in est
            exclusivement opérée respectivement par les réseaux sociaux et régie
            par leurs conditions générales d’utilisation, disponibles aux
            adresses suivantes :
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              Pour Facebook :{" "}
              <a href="https://fr-fr.facebook.com/policies/">
                https://fr-fr.facebook.com/policies/
              </a>
            </li>
            <li className="legal__listItem">
              Pour Instagram :{" "}
              <a href="https://help.instagram.com/1896641480634370">
                https://help.instagram.com/1896641480634370
              </a>
            </li>
            <li className="legal__listItem">
              Pour Linkedin :
              <a href="https://www.linkedin.com/help/linkedin/answer/1828/supprimer-le-cache-et-les-cookies?lang=fr">
                https://www.linkedin.com/help/linkedin/answer/1828/supprimer-le-cache-et-les-cookies?lang=fr
              </a>
            </li>
          </ul>
          <p className="legal__text">
            Facebook® et Instagram® sont des marques déposées et appartiennent
            exclusivement à la société Facebook Inc. <br />
            Linkedin® est une marque déposée et appartient exclusivement à la
            société Microsoft Inc.
          </p>

          <h2 className="legal__categoryTitle">
            Evolution de la Politique de confidentialité
          </h2>
          <p className="legal__text">
            Cette Politique de confidentialité peut être modifiée, complétée ou
            mise à jour à jour à tout moment par STUDIZ, afin notamment de
            prendre en compte toute évolution légale, réglementaire,
            jurisprudentielle et/ou technique, dans le but de garantir
            constamment la meilleure protection des données personnelles de
            l’Utilisateur. L’Utilisateur est invité à consulter régulièrement la
            Politique de confidentialité pour être rester informé des
            traitements opérés par STUDIZ et ses partenaires sur ses données
            personnelles. Si l’Utilisateur n’est pas d’accord avec les termes de
            la nouvelle rédaction de la Politique de confidentialité, il est
            libre de solliciter la clôture de son Compte et la suppression de
            ses données personnelles en écrivant à l’adresse suivante :{" "}
            <a href="mailto: studiz.officiel@gmail.com">
              studiz.officiel@gmail.com
            </a>
          </p>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
