import { isaDataProfile } from "../../../portfolio/data/profile";
import Hero from "../../../portfolio/sections/Hero/Hero";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <main className="layout__main">
        <Hero dataProfile={isaDataProfile} />
      </main>
    </div>
  );
};

export default Layout;
