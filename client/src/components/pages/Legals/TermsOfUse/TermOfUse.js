import Footer from "../../../elements/Footer/Footer";
import Menu from "../../../elements/Menu/Menu";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import "../legal.scss";

const TermsOfUse = () => {
  return (
    <div className="legal__globalContainer">
      <Menu backgroundColor={"#fff"} />
      <PageWrapper>
        <div className="legal__container">
          <h1 className="legal__pageTitle">
            Conditions générales d'utilisation
          </h1>
          <p className="legal__text">
            Les présentes conditions générales d’utilisation (ci-après les « CGU
            ») ont pour objet de définir les modalités et conditions d’accès et
            d’utilisation de la Plateforme – telle que définie ci-après, mise à
            disposition par la société STUDIZ, SAS au capital de 15 000 euros,
            dont le siège social est sis 19 bis avenue du Général De Gaulle,
            immatriculée au Registre du Commerce et des Sociétés de Tours sous
            le numéro 907 943 104, et représentée par Monsieur Hugo ROULET,
            Président, (ci-après « STUDIZ »), ainsi que les droits et
            obligations des Utilisateurs dans ce cadre.
          </p>
          <h2 className="legal__categoryTitle">Définitions</h2>
          <p className="legal__text">
            Les termes suivants qu'ils soient employés au singulier ou au
            pluriel dans les présentes auront toujours la définition suivante :
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              <b>Compte </b>: désigne le compte que l’Utilisateur crée sur la
              Plateforme afin d’accéder et utiliser les Services{" "}
            </li>
            <li className="legal__listItem">
              <b>Contenus</b>: désigne dans le cadre de l’utilisation de la
              Plateforme, tous les cours, exercices, commentaires, message,
              information, image, et d’une façon générale tout contenu et donnée
              que l’Utilisateur publie sur la Plateforme
            </li>
            <li className="legal__listItem">
              <b>Plateforme </b>: désigne la Plateforme STUDIZ mise à
              disposition sur le site Studiz.fr ou Studiz.eu développée et
              éditée par STUDIZ qui en détient la propriété exclusive,
              permettant aux Utilisateurs d’accéder aux Services
            </li>
            <li className="legal__listItem">
              <b>Services </b>: désigne l’ensemble des modules fournis par la
              Plateforme décrits à l’article 2 auxquels l’Utilisateur peut
              accéder à partir de son Compte sur la Plateforme
            </li>
            <li className="legal__listItem">
              <b>Utilisateur </b>: désigne toute personne physique ayant rempli
              les conditions d’accès aux Services et étant, à ce titre,
              habilitée à accéder et naviguer sur la Plateforme et ainsi,
              bénéficier des Services
            </li>
          </ul>
          <h2 className="legal__categoryTitle">Descriptif de la plateforme</h2>
          <p className="legal__text">
            STUDIZ a développé une Plateforme conçue pour publier, commenter et
            accéder à des cours et exercices, accéder à un forum de discussion.
            <br />
            <br />
            La Plateforme est disponible depuis le site Studiz.fr ou Studiz.eu,
            à toute personne physique majeure et capable juridiquement, ayant la
            qualité de consommateur au sens qu’en donnent la loi et la
            jurisprudence, quel que soit le lieu où elle se trouve et les
            modalités de son accès.
            <br />
            <br />
            Les personnes mineures peuvent également utiliser les Services sous
            réserve de l’accord et de la supervision de leurs représentants
            légaux pour les mineurs de moins de 15 ans.
          </p>
          <h2 className="legal__categoryTitle">Acceptation des CGU</h2>
          <p className="legal__text">
            Les CGU constituent un contrat entre l’Utilisateur et STUDIZ.
            L’accès à la Plateforme est subordonné à l’acceptation expresse et
            sans réserve par l’Utilisateur des CGU. Le défaut d’acceptation des
            CGU impliquera l’impossibilité pour l’Utilisateur d’accéder la
            Plateforme et d’utiliser les Services.
            <br />
            <br />
            Cette acceptation s’effectue à la première connexion de
            l’Utilisateur sur la Plateforme. L’Utilisateur est alors invité à
            dérouler les CGU puis à cliquer, s’il les accepte, sur la case «
            J’ai lu et j’accepte les CGU ». Par ce clic, l’Utilisateur reconnait
            avoir lu les CGU, les avoir comprises et accepter pleinement
            l’ensemble de leurs stipulations, sans restriction ni réserve.{" "}
            <br />
            <br />
            STUDIZ se réserve le droit de modifier et/ou de mettre à jour à tout
            moment les CGU sans préavis. L’accès et l’utilisation de la
            Plateforme seront soumis aux CGU en vigueur au moment de cet accès
            et de cette utilisation. L’Utilisateur est donc expressément informé
            que l’unique version des CGU qui fait foi est celle qui se trouve en
            ligne au moment de l’utilisation de la Plateforme par l’Utilisateur.
            Les CGU sont disponibles à tout moment sur la Plateforme, dans le
            pied de page.
            <br />
            <br />
            Dans l'hypothèse où l'une des clauses des CGU serait nulle du fait
            d'un changement de législation ou de réglementation ou déclarée
            comme telle par une décision de justice définitive, cela ne saurait
            en aucun cas affecter la validité et le respect des autres clauses
            des CGU.
            <br />
            <br />
          </p>
          <h2 className="legal__categoryTitle">
            Modalités d'accès à la plateforme
          </h2>
          <h3 className="legal__subTitle">
            Conditions d’accès à la Plateforme
          </h3>
          <p className="legal__text">
            Pour accéder à la Plateforme et l’utiliser, l’Utilisateur doit
            disposer d’un compte. Pour créer un Compte, l’Utilisateur doit
            disposer d’une adresse email valide. <br />
            <br />
            L’Utilisateur peut créer un Compte en cliquant sur le bouton «
            Inscription » accessible depuis la page d’accueil du Site.
            L’Utilisateur est alors invité à renseigner les informations
            demandées dans le formulaire de création de Compte prévu à cet
            effet. <br />
            <br />
            L’Utilisateur est invité à lire les CGU puis, s’il les accepte, à
            cocher la case prévue à cet effet et à cliquer sur « Valider » pour
            finaliser la création de son Compte. Par ce clic, l’Utilisateur
            reconnait avoir lu les CGU, les avoir comprises et accepter
            pleinement l’ensemble de leurs stipulations, sans restriction ni
            réserve.
            <br />
            <br />
            L’Utilisateur reçoit alors un email de confirmation de l’ouverture
            du Compte, à l’adresse de courrier électronique qu’il a indiquée.
            Cet email contient un lien hypertexte permettant à l’Utilisateur de
            confirmer son adresse email puis d’accéder à son Compte. <br />
            <br />
            Une fois sur son Compte, l’Utilisateur peut compléter ses
            informations personnelles en renseignant les informations
            sollicitées dans les formulaires disponibles sur le Compte. <br />
            <br />
            L’Utilisateur accepte de fournir et de maintenir les informations le
            concernant exactes, à jour et complètes. La responsabilité de STUDIZ
            ne saurait en aucune circonstance être engagée en cas de retard ou
            d’impossibilité d’accéder à la Plateforme du fait d’une information
            erronée ou incomplète dans la saisie des informations concernant
            l’Utilisateur lors de sa demande de création de Compte. A ce titre,
            l’Utilisateur peut à tout moment modifier ses informations
            personnelles et le mot de passe directement depuis son Compte.
            <br />
            <br />
            Lors de la création de son Compte, l’Utilisateur a choisi et
            paramétré, les codes d’accès permettant d’accéder aux Services, à
            savoir l’identifiant et le mot de passe personnels de l’Utilisateur
            (ci-après les « <b>Codes d’Accès</b> »).
          </p>
          <h3 className="legal__subTitle">
            Responsabilité des paramètres de connexion
          </h3>
          <p className="legal__text">
            Les Codes d’Accès de l’Utilisateurs sont personnels. Le mot de passe
            du Compte est, en outre, strictement confidentiel. L’Utilisateur
            s’engage à le conserver secret et à ne pas le divulguer, pour
            quelque raison que ce soit, de quelque manière et sous quelque forme
            que ce soit, à des tiers. En cas de vol ou d'oubli de son mot de
            passe, l’Utilisateur cliquera sur l’onglet « Mot de passe oublié ? »
            situé sous le formulaire de saisie des identifiants de connexion.
            L’Utilisateur recevra un mail avec un nouveau mot de passe.
            <br />
            <br />
            En aucun cas, STUDIZ ne saurait être responsable de la perte ou du
            vol des Codes d’Accès du Compte ou de leur utilisation frauduleuse.
            L’Utilisateur est seul responsable de l’utilisation de son Compte
            par des tiers et des actions ou déclarations faites par
            l’intermédiaire de celui-ci
          </p>
          <h3 className="legal__subTitle">Configuration minimale requise</h3>
          <p className="legal__text">
            STUDIZ s’engage à mettre en œuvre tous les moyens permettant à
            l’Utilisateur un accès fiable et rapide à la Plateforme. Néanmoins,
            l’Utilisateur déclare avoir accepté les coûts ainsi que les limites
            propres à toute connexion au réseau internet. L’Utilisateur se
            charge d’accéder à la Plateforme dans de bonnes conditions
            techniques – matériel, logiciel, télécommunications (connexion
            internet haut débit et un navigateur Chrome, Firefox ou Edge à jour)
            – afin que soient notamment assurées toutes les mesures de
            sauvegarde ainsi que la protection contre d’éventuelles intrusions.
            Tous les coûts afférents à l’accès à la Plateforme et à son
            utilisation que ce soient les frais matériels, logiciels ou d’accès
            à internet sont exclusivement à la charge de l’Utilisateur.
            L’Utilisateur est seul responsable du bon fonctionnement et de la
            sécurisation appropriée de son équipement informatique ainsi que son
            accès internet. STUDIZ ne sera pas tenue responsable en cas de
            dommage à tout équipement dans le cadre de l’utilisation de la
            Plateforme.
          </p>
          <h3 className="legal__subTitle">Disponibilité de la Plateforme</h3>
          <p className="legal__text">
            La Plateforme est accessible 24 heures sur 24, 7 jours sur 7, sous
            réserve de la survenance d’un cas de force majeure ou un d’un
            évènement hors du contrôle de et sauf interruption, suspension ou
            limitation dans le cadre d’opérations de maintenance et/ou de mises
            à jour nécessaires au bon fonctionnement de la Plateforme.
            <br />
            STUDIZ n’est tenue qu’à une obligation de moyens concernant
            l’accessibilité, le fonctionnement et la disponibilité de la
            Plateforme et des Services. STUDIZ se réserve la possibilité
            d’interrompre, de suspendre ou de limiter l’accès à tout ou partie
            de la Plateforme notamment en raison de contraintes d’ordre
            juridique ou technique. <br />
            L’Utilisateur reconnait expressément que les suspensions,
            interruptions ou limitations susmentionnées pourront intervenir à
            tout moment sans préavis et qu’elles n’ouvriront droit à aucune
            obligation, ni indemnisation à son profit.
          </p>
          <h2 className="legal__categoryTitle">Bon usage de la plateforme</h2>
          <p className="legal__text">
            L’Utilisateur s’engage à ce que les Contenus qu’il poste sur la
            Plateforme respectent la législation en vigueur et les règles
            élémentaires de courtoisie et de politesse, notamment :
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              Ne pas porter atteinte à la vie privée d’autrui
            </li>
            <li className="legal__listItem">
              Ne pas porter atteinte au droit à l’image d’autrui
            </li>
            <li className="legal__listItem">
              Ne pas publier des propos ou diffuser des contenus dénigrants ou à
              caractère injurieux, diffamatoires, obscènes ou offensants
            </li>
            <li className="legal__listItem">
              Ne pas publier de contenu contrefaisant
            </li>
            <li className="legal__listItem">
              Ne pas publier des propos ou diffuser des contenus visant au
              harcèlement et/ou à l'intimidation d’un autre utilisateur
            </li>
            <li className="legal__listItem">
              Ne pas publier des contenus promouvant des activités dangereuses
              ou illicites
            </li>
            <li className="legal__listItem">
              Ne pas publier des propos ou diffuser des contenus manifestement
              illicites c’est-à-dire de contenus incitant à la haine, à la
              violence, et attentatoire à la dignité humaine
            </li>
          </ul>
          <p className="legal__text">
            L’Utilisateur est seul responsable des contenus qu’il publie sur la
            Plateforme. Conformément à l'article 6-I, 2 et 3 de la loi n°
            2004-575 du 21 juin 2004 pour la confiance dans l'économie
            numérique, STUDIZ doit être considérée comme hébergeur des Contenus
            publiés par l’Utilisateur sur la Plateforme. STUDIZ ne saurait voir
            sa responsabilité engagée à raison des Contenus rendus disponibles
            sur la Plateforme, sauf si elle ne les rendait pas promptement
            inaccessibles après avoir été informée de leur illicéité dans les
            conditions prévues par cette loi. L’Utilisateur s’engage à garantir
            STUDIZ contre toute réclamation de tiers qui se trouveraient lésés
            par les contenus publiés sur la Plateforme.
          </p>
          <p className="legal__text">
            L’Utilisateur s’engage à utiliser la Plateforme aux seules fins pour
            lesquelles elle a été conçue. Il lui est strictement interdit
            d’utiliser la Plateforme à des fins autres, par exemple:
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              l’exercice d’activités illégales, frauduleuses ou portant atteinte
              aux droits ou à la sécurité des Tiers, l’aide ou l’incitation à
              ces activités
            </li>
            <li className="legal__listItem">
              l’atteinte à l’ordre public ou la violation des lois et règlements
              en vigueur
            </li>
            <li className="legal__listItem">
              l’envoi d’emails non sollicités et/ou de prospection ou
              sollicitation commerciale
            </li>
          </ul>
          <p className="legal__text">Sont également strictement interdits : </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              tout comportement de nature à interrompre, suspendre, ralentir ou
              empêcher la continuité des Services, notamment en imposant une
              charge disproportionnée sur les infrastructures de la Plateforme
            </li>
            <li className="legal__listItem">
              toute intrusion ou tentative d’intrusion dans les systèmes de
              STUDIZ
            </li>
            <li className="legal__listItem">
              toute atteinte aux mesures de sécurité et d’authentification
            </li>
            <li className="legal__listItem">
              tout acte de nature à porter atteinte aux droits et intérêts
              financiers, commerciaux ou moraux de STUDIZ
            </li>
          </ul>
          <p className="legal__text">
            Toute violation des présentes CGU autorise STUDIZ à refuser pour
            l’avenir à l’Utilisateur auteur de la violation considérée l’accès
            aux Services fournis sur la Plateforme, ainsi qu’à limiter l’accès
            de l’Utilisateur à certains Services ou à clôturer temporairement ou
            définitivement tout Compte permettant d’accéder aux Services, sans
            préjudice des indemnités qui pourraient être réclamées à l’auteur de
            ladite violation par STUDIZ.
          </p>
          <h2 className="legal__categoryTitle">Garanties </h2>
          <p className="legal__text">
            TUDIZ s'engage à tout mettre en œuvre pour assurer la sécurité
            physique et logique des serveurs sur lesquels sont hébergés la
            Plateforme et les Contenus contre tout acte de malveillance
            extérieur ou toute attaque informatique connue. Les serveurs sont
            protégés contre les intrusions par un firewall. Les mises à jour de
            sécurité des systèmes d'exploitation et de l'anti-virus sont
            installées régulièrement. Néanmoins, l’accès à la Plateforme
            implique la connaissance et l’acceptation des caractéristiques et
            des limites d’internet, et des risques inhérents à toute connexion
            et transmission sur internet, l’absence de protection de certaines
            données contre des détournements éventuels et les risques de
            contamination par d’éventuels virus circulant sur le réseau. Il
            appartient à l’Utilisateur de prendre toutes les mesures appropriées
            de façon à protéger ses propres données, et/ou logiciels stockés sur
            son ordinateur, smartphone ou tablette contre toute atteinte.
            <br />
            STUDIZ ne consent aucune autre garantie, expresse ou implicite, que
            celles prévues aux présentes CGU, en ce y compris, quant à la
            non-violation des droits d'un tiers, l’absence d’anomalies, erreurs
            ou bugs impactant la continuité, performance et/ou pérennité de la
            Plateforme, et/ou quant à l’aptitude à un usage particulier ou
            l’adéquation de la Plateforme aux besoins de l’Utilisateur. La
            Plateforme est diffusée « en l’état » et selon sa disponibilité.
          </p>
          <h2 className="legal__categoryTitle">Responsabilités</h2>
          <p className="legal__text">
            L’accès à la Plateforme et son utilisation se font sous l’entière
            responsabilité de l’Utilisateur. L'Utilisateur est seul maître de la
            bonne utilisation, avec discernement et esprit, de la Plateforme.{" "}
            <br />
            Aucun conseil et aucune information, qu'ils soient oraux ou écrits,
            obtenus par l’Utilisateur lors de l’utilisation de la Plateforme ne
            sont susceptibles de créer de garanties non expressément prévues par
            les CGU ni d’entraîner la responsabilité de STUDIZ en cas de
            dommages, de quelque nature qu’ils soient, causés à l’Utilisateur, à
            des tiers du fait de la mauvaise utilisation par l’Utilisateur de la
            Plateforme, en violation des dispositions du présent article et plus
            généralement du non-respect des CGU. <br />
            Dans toute la mesure autorisée par la loi applicable, STUDIZ exclut
            expressément sa responsabilité pour tout dommage, direct ou
            indirect, résultant de ou en relation avec l’accès à la Plateforme,
            son utilisation, son dysfonctionnement ou indisponibilité quelles
            qu’en soient la nature et la durée.
            <br />
            L’Utilisateur reconnait que STUDIZ demeure libre de corriger et/ou
            modifier la Plateforme à tout moment et sans préavis, sans que cette
            correction et/ou modification ne puisse ouvrir droit à un quelconque
            recours de sa part.
            <br />
            La responsabilité de STUDIZ ne saurait être engagée, d’une façon
            générale, dans tous les cas où l'inexécution ou la mauvaise
            exécution des CGU résulterait d'un cas de force majeure ou cas
            fortuit indépendant de sa volonté.
          </p>
          <h2 className="legal__categoryTitle">Propriété intellectuelle</h2>
          <h3 className="legal__subTitle">
            Droits de propriété intellectuelle sur la Plateforme
          </h3>
          <p className="legal__text">
            La Plateforme, en ce compris ses codes sources et son architecture,
            les Services, l’ensemble des contenus présents sur la Plateforme et
            édités par STUDIZ, ainsi que les dénominations, signes et logos
            utilisés pour désigner la Plateforme, les Services et/ou STUDIZ
            (ci-après les « Eléments Protégés ») sont protégés par des droits de
            propriété intellectuelle (tels que notamment tous droits d'auteur,
            droits sur les brevets, les marques, droit des producteurs de base
            de données, et tout autre droit de propriété intellectuelle existant
            ou futur, français et internationaux) et appartiennent à STUDIZ ou à
            des tiers ayant autorisé STUDIZ à les exploiter.
            <br />
            L’utilisation de la Plateforme ne confère en aucune façon à
            l’Utilisateur un droit de propriété et/ou un droit de propriété
            intellectuelle sur les Eléments Protégés, à l’exception d’un droit
            personnel d’accès, non exclusif, non-cessible, non-transférable et
            limité exclusivement à l’utilisation de la Plateforme conformément à
            son objet et dans le respect des CGU, pendant la durée d’utilisation
            de la Plateforme. <br />
            Il est strictement interdit de représenter, de reproduire et/ou
            d’exploiter les Eléments Protégés, totalement ou partiellement, sous
            quelque forme et par quelque moyen que ce soit, sans l’accord écrit
            et préalable de STUDIZ. L’Utilisateur s’engage à ne pas copier,
            modifier, assembler, décompiler, altérer, vendre, louer, prêter,
            diffuser, distribuer ou transférer tout ou partie de la Plateforme
            et/ou des Services, créer des œuvres dérivées à partir de la
            Plateforme et/ou des Services, autoriser un tiers à commettre de
            tels actes, sans l’accord écrit et préalable de STUDIZ.
            <br />
            Le non-respect des dispositions du présent article constitue une
            violation des droits de propriété intellectuelle de STUDIZ et/ou des
            tiers concédants et est susceptible d’entraîner des poursuites
            civiles et pénales.
          </p>
          <h3 className="legal__subTitle">
            Droits de propriété intellectuelle sur les Contenus
          </h3>
          <p className="legal__text">
            Les Contenus appartiennent à l’Utilisateur. L’Utilisateur concède à
            STUDIZ un droit d’utilisation des Contenus pour les besoins de leur
            mise à disposition sur la Plateforme et de la fourniture des
            Services. Cette licence est octroyée à titre gratuit et pour toute
            la durée de protection des droits d’auteur sur les Contenus, d'après
            les législations tant françaises qu'étrangères et les conventions
            internationales actuelles ou futures, y compris les prolongations
            qui pourraient être apportées à cette durée. <br />
            L’Utilisateur accepte qu’en publiant les Contenus sur la Plateforme,
            les autres utilisateurs pourront télécharger et commenter les
            Contenus et les utilisateurs auxquels il aura donné l’autorisation
            pourront modifier les Contenus.
          </p>
          <p className="legal__text">L’Utilisateur déclare et garantit :</p>
          <ul className="legal__list">
            <li className="legal__listItem">
              détenir les droits d’auteur sur les Contenus et être en mesure de
              les publier librement sur la Plateforme
            </li>
            <li className="legal__listItem">
              qu'il n'existe, à sa connaissance, aucune réclamation,
              revendication, litige ou action en cours ou imminent, et qu'il n'a
              été informé d'aucune action susceptible d'être intentée concernant
              la validité, la propriété ou l'exploitation des Contenus
            </li>
          </ul>
          <p className="legal__text">
            D’une façon générale, l’Utilisateur garantit STUDIZ contre toute
            demande, réclamation ou action de tiers, pour quelque cause et sur
            quelque fondement que ce soit, relativement aux Contenus.
          </p>
          <h2 className="legal__categoryTitle">
            Protection des données personnelles
          </h2>
          <p className="legal__text">
            Dans le cadre de la mise à disposition de la Plateforme, STUDIZ aura
            accès à des données personnelles de l’Utilisateur : nom, prénom,
            adresse mail, numéro de téléphone. STUDIZ procèdera, conformément à
            la politique de confidentialité, à des traitements de données
            personnelle de l’Utilisateur pour les finalités suivantes :
          </p>
          <ul className="legal__list">
            <li className="legal__listItem">
              permettre la création de son Compte
            </li>
            <li className="legal__listItem">
              communiquer avec l’Utilisateur dans le cadre de l’Utilisation des
              Services
            </li>
            <li className="legal__listItem">fournir les Services</li>
            <li className="legal__listItem">
              et plus généralement pour la bonne gestion et exécution des CGU
            </li>
          </ul>
          <p className="legal__text">
            STUDIZ s’engage à traiter les données personnelles de l’Utilisateur
            dans le strict respect de la réglementation applicable à la
            protection des données personnelles et en particulier le Règlement
            (UE) n°2016/679 du Parlement Européen et du Conseil du 27 avril 2016
            dit « RGPD », et la loi française n°78-17 du 6 janvier 1978 modifiée
            dite « Loi Informatique et Libertés » (ci-après ensemble la «{" "}
            <b>
              Réglementation applicable à la protection des données personnelles
            </b>{" "}
            »).
          </p>
          <p className="legal__text">
            Conformément à la Réglementation applicable à la protection des
            données personnelles, et comme prévu la Politique de
            confidentialité, l’Utilisateur dispose d’un droit d’accès, de
            rectification, d’effacement, de limitation et de portabilité de ses
            données personnelles. L’Utilisateur dispose également du droit de
            s’opposer à ce que ses données fassent l’objet d’un traitement à des
            fins de prospection commerciale de la part de STUDIZ, du droit à
            l’effacement de ses données personnelles, ainsi que du droit
            d’introduire une réclamation auprès de la Commission Nationale de
            l’Informatique et des Libertés s’il considère que le traitement
            opéré par STUDIZ constitue une violation de ses données
            personnelles, en ligne à l’adresse https://www.cnil.fr/fr/plaintes
            ou par courrier postal à l’adresse suivante : CNIL - 3 Place de
            Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07.
            <br />
            Les droits de l’Utilisateur sur ses données personnelles peuvent
            être exercés à tout moment auprès de STUDIZ par email à l’adresse
            suivante : Studiz.officiel@gmail.com. <br />
            Pour en savoir plus sur les règles de protection des données
            personnelles, l’Utilisateur est invité à consulter la Politique de
            confidentialité de STUDIZ, disponible à l’adresse suivante :{" "}
            <a href="https://studiz.eu/legacyPolicy">
              https://studiz.eu/legacyPolicy
            </a>
            .
          </p>
          <h2 className="legal__categoryTitle">
            Durée, suspension et résiliation
          </h2>
          <p className="legal__text">
            Les CGU entrent en vigueur à compter de leur acceptation par
            l’Utilisateur et pour toute la durée d’accès et d’utilisation de la
            Plateforme par l’Utilisateur.
            <br />
            L’Utilisateur est libre de supprimer son Compte à tout moment dans
            les paramètres de celui-ci.
            <br />
            En cas d’utilisation de la Plateforme par l’Utilisateur non conforme
            aux CGU, en cas de manquement de l’Utilisateur aux CGU, ou plus
            généralement en cas de violation des lois et réglementations
            applicables, STUDIZ pourra suspendre ou résilier de plein droit,
            sans mise en demeure préalable, sans préavis ni indemnité, tout ou
            partie de l’accès de l’Utilisateur à la Plateforme. STUDIZ pourra
            prononcer cette suspension ou résiliation sans préjudice de tous les
            autres droits, actions et recours dont STUDIZ pourrait disposer en
            vue de la réparation du préjudice qu’elle pourrait avoir subi du
            fait de ces manquements. Au terme des CGU pour quelque raison que ce
            soit, l’accès de l’Utilisateur sera désactivé.
          </p>
          <h2 className="legal__categoryTitle">Dispositions diverses</h2>
          <p className="legal__text">
            Les CGU sont conclues intuitu personae. Les droits et obligations en
            résultant ne pourront en aucun cas être cédés ou transférés par
            l’Utilisateur, à quelque titre que ce soit, sans l’agrément
            préalable et écrit de STUDIZ. <br />
            Le défaut pour l’une ou l’autre des parties de se prévaloir, à un
            moment donné, de l’une quelconque des dispositions des CGU, ne
            saurait être interprété à l’avenir comme une renonciation aux droits
            qu’elle tient des présentes.
          </p>
          <h2 className="legal__categoryTitle">
            Droit applicable et juridiction
          </h2>
          <p className="legal__text">
            Les CGU sont soumises au droit français.
            <br />
            Les parties déclarent leur intention de chercher une solution
            amiable à toute difficulté qui pourrait surgir à propos de la
            validité, de l’interprétation ou de l’exécution des CGU. Dans les
            limites permises par la loi, en cas de désaccord persistant, tous
            différends relatifs aux présentes CGU seront portés à la
            connaissance du tribunal matériellement et territorialement
            compétent.
          </p>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
