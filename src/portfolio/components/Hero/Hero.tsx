import type { HeroLinkData, ProfileData } from "../../data/types";
import HeroLinkList from "../HeroLinksList/HeroLinksList";
import HeroProfile from "../HeroProfile/HeroProfile";
import "./Hero.css";

interface HeroProps {
  profileData: ProfileData;
  links: HeroLinkData[];
}

const Hero: React.FC<HeroProps> = ({ links, profileData }) => {
  return (
    <section className="hero">
      <HeroProfile dataProfile={profileData} />
      <HeroLinkList dataLinks={links} />
    </section>
  );
};

export default Hero;
