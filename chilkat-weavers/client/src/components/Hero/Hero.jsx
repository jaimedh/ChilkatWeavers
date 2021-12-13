import "./Hero.scss";


function Hero() {
  return (
    <article className="hero">
      <h1 className="hero__title">Today's Chilkat Weavers</h1>
      <section className="hero__image">  </section>
      <div className="hero__text-wrapper">
          <span className="hero__text">Weaver Lily Hope</span>
      <a
        href="https://instagram.com/sydneyakagiphoto"
        target="_blank"
        rel="noreferrer"
        className="hero__link"
      >
        {" "}
        photographed by, @SydneyAkagiPhoto{" "}
      </a>
      </div>
    
    </article>
  );
}
export default Hero;
