import Hero from "../../../portfolio/components/Hero/Hero";
import { isabelSaenzLinks } from "../../../portfolio/data/links";
import { isaDataProfile } from "../../../portfolio/data/profile";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <main className="layout">
        <Hero profileData={isaDataProfile} links={isabelSaenzLinks} />
      </main>
    </>
  );
};

export default Layout;
