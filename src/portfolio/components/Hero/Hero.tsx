import type { ProfileData } from "../../data/types";
import HeroProfile from "../HeroProfile/HeroProfile";
import "./Hero.css";

interface HeroProps {
  profileData: ProfileData;
}

const Hero: React.FC<HeroProps> = ({ profileData }) => {
  return (
    <section id="hero" className="hero">
      <HeroProfile dataProfile={profileData} />
    </section>
  );
};

export default Hero;
