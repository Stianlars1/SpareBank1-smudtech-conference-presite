import Image from "next/image";

export const Header = () => {
  return (
    <header className="header">
      <Image
        className="header__logo"
        src={"/beforeConference/SmudTech-before-conference.svg"}
        width={300}
        height={290}
        alt="SmudTech 2024 logo"
      />
    </header>
  );
};
