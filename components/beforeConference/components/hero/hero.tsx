import { Heading1 } from "@sb1/ffe-core-react";
import { WaveBackground } from "./assets/waveBackground";

export const Hero = () => {
  return (
    <section className="hero">
      <article className="hero__image-section">
        <img
          className="illustration"
          src={"/beforeConference/before-conference-illustration.svg"}
          alt="En person som holder presentasjon foran mange mennesker"
        />
      </article>
      <article className="hero__content">
        <Heading1>Kompetansedeling</Heading1>
        <p className="main-text">
          <span className="smudtech">SmudTech</span> er en tech-konferanse av,
          for og <br />
          med SpareBank 1 Utvikling.
        </p>
        <div className="hold-av-dato">👋🏽 Hold av torsdag 7. mars</div>
      </article>
      <WaveBackground />
    </section>
  );
};
