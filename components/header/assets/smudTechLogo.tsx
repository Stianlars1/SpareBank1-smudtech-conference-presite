import Image from "next/image";

export const SmudTechLogo = () => {
  return (
    <Image
      width={193}
      height={128}
      className={"smud-tech-header-logo__content__logo-and-text__logo"}
      src={"/smud-tech-logo.svg"}
      alt="SmudTech Logo"
    />
  );
};
