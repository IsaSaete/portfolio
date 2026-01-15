import Hero from "../../../sections/Hero/Hero";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <main className="layout__main">
        <Hero />
      </main>
    </div>
  );
};

export default Layout;
