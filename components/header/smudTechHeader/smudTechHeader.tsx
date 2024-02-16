import { SmudTechLogoBackground } from "../assets/logoBackground";
import { SmudTechLogo } from "../assets/smudTechLogo";

export const SmudTechHeader = () => {
  return (
    <div className="smud-tech-header-logo__content">
      <SmudTechLogoBackground />
      <div className="smud-tech-header-logo__content__logo-and-text">
        <SmudTechLogo />
        <p className="ffe-body-text smud-tech-header-logo__content__logo-and-text__text">
          Sparebank 1 Utvikling <br />
          7. mars 2023
        </p>
      </div>
    </div>
  );
};
