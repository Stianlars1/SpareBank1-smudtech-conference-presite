import { Navbar } from "../navbar/navbar";
import "./css/header.css";
import { SmudTechHeader } from "./smudTechHeader/smudTechHeader";

export const Header = () => {
  return (
    <header className="smud-tech-header">
      <Navbar />
      <section className="smud-tech-header-logo">
        <SmudTechHeader />
      </section>
    </header>
  );
};
