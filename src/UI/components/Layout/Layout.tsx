import Contact from "../../../portfolio/components/Contact/Contact";
import Hero from "../../../portfolio/components/Hero/Hero";
import { isabelSaenzLinks } from "../../../portfolio/data/links";
import { isaDataProfile } from "../../../portfolio/data/profile";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <main className="layout">
          <Hero profileData={isaDataProfile} />
          <Contact links={isabelSaenzLinks} />
        </main>
        <Footer
          developerName={isaDataProfile.name}
          location={isaDataProfile.location}
        />
      </div>
    </>
  );
};

export default Layout;
