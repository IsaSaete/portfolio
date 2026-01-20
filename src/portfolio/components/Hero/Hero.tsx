import { isabelSaenzLinks } from "../../data/links";
import { isaDataProfile } from "../../data/profile";
import HeroLinkList from "../HeroLinksList/HeroLinksList";
import HeroProfile from "../HeroProfile/HeroProfile";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <HeroProfile dataProfile={isaDataProfile} />
      <HeroLinkList dataLinks={isabelSaenzLinks} />
    </section>
  );
};

export default Hero;
