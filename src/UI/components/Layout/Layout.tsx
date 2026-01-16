import { isaDataProfile } from "../../../portfolio/data/profile";
import Hero from "../../../portfolio/components/Hero/Hero";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <>
      <main className="layout">
        <Hero dataProfile={isaDataProfile} />
      </main>
    </>
  );
};

export default Layout;
