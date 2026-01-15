import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <div className="hero__text">
          <div className="hero__title">
            <h1 className="hero__name">Isabel Sáenz</h1>
            <h2 className="hero__position">Full Stack Developer</h2>
          </div>
          <p className="hero__description">
            Espececialidaza en stack MERN con especial énfasis en frontend
            moderno, TypeScript, testing, accesibilidad y buenas prácticas,
            dentro de entornos Agile.
          </p>
        </div>
        <img
          className="hero__image"
          src="/cv.jpeg"
          alt="Isabel Sáenz"
          width={230}
          height={230}
        />
      </div>
    </section>
  );
};

export default Hero;
