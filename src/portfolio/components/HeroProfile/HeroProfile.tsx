import type { Profile } from "../../data/types";
import "./HeroProfile.css";

interface HeroProfileProps {
  dataProfile: Profile;
}

const HeroProfile: React.FC<HeroProfileProps> = ({ dataProfile }) => {
  return (
    <article className="hero__profile">
      <div className="hero__wrapper">
        <header className="hero__content">
          <div className="hero__identity">
            <h1 className="hero__name">{dataProfile.name}</h1>
            <p className="hero__role">{dataProfile.role}</p>
          </div>
          <p className="hero__description">{dataProfile.description}</p>
        </header>
        <img
          className="hero__image"
          src={dataProfile.portraitUrl}
          alt={dataProfile.name}
          width={230}
          height={230}
        />
      </div>
    </article>
  );
};

export default HeroProfile;
