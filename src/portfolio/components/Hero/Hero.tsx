import type { Profile } from "../../data/types";
import HeroLinks from "../HeroLinks/HeroLinks";
import "./Hero.css";

interface HeroProps {
  dataProfile: Profile;
}

const Hero: React.FC<HeroProps> = ({ dataProfile }) => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__text">
          <div className="hero__title">
            <h1 className="hero__name">{dataProfile.name}</h1>
            <h2 className="hero__position">{dataProfile.role}</h2>
          </div>
          <p className="hero__description">{dataProfile.description}</p>
        </div>
        <img
          className="hero__image"
          src={dataProfile.portraitUrl}
          alt={dataProfile.name}
          width={230}
          height={230}
        />
      </div>
      <HeroLinks />
    </section>
  );
};

export default Hero;
