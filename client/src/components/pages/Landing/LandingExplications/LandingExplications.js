import { useEffect, useState } from "react";
import PageWrapper from "../../../elements/PageWrapper/PageWrapper";
import Test from "../../../../assets/pictures/icons/test1.png";
import Medal from "../../../../assets/pictures/icons/medal.png";
import Share from "../../../../assets/pictures/icons/share.png";

import "./LandingExplications.scss";

const LandingExplications = () => {
  return (
    <div className="landingExplications__globalContainer">
      <PageWrapper>
        <div className="landingExplications__container">
          <h1 className="landingExplications__title">
            Trouves des milliers de cours ajoutés par la communauté
          </h1>
          <div className="landingExplications__flexContainer">
            <div className="landingExplications__flexElement">
              <img src={Test} className="landingExplications__elementIcon" />
              <h2 className="landingExplications__elementTitle">
                Utilises studiz dans toutes les situations
              </h2>
              <p className="landingExplications__elementDescription">
                Peu importe qu'il neige qu'il vente, où que tu sois, tu n'as
                besoin que d'une connexion internet pour utiliser studiz
              </p>
            </div>
            <div className="landingExplications__flexElement">
              <img src={Medal} className="landingExplications__elementIcon" />
              <h2 className="landingExplications__elementTitle">
                Ne gardez que le meilleur sur la plateforme
              </h2>
              <p className="landingExplications__elementDescription">
                Les cours les plus aimés et vus dans toutes les matières vous
                seront mis en avant, pas de perte de temps avec studiz
              </p>
            </div>
            <div className="landingExplications__flexElement">
              <img src={Share} className="landingExplications__elementIcon" />
              <h2 className="landingExplications__elementTitle">
                Apprends et partages avec nous
              </h2>
              <p className="landingExplications__elementDescription">
                Le but est d'apprendre ensemble, je ne sais pas quoi mettre dans
                ce texte, alors je laisse cours à mes pensées
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default LandingExplications;
