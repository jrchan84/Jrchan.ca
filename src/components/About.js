import './About.css';

function About() {
  return (
    <div className="about" id="About">
      <div className="content">
        <h1 className="about-title">About</h1>
        <div className="about-profile">
          <img className="about-portrait" src="/assets/images/about-profile.png" alt="About Profile"/>
        </div>
        <div className="console">
          <div className="fakeMenu">
            <div className="fakeButtons fakeClose"></div>
            <div className="fakeButtons fakeMinimize"></div>
            <div className="fakeButtons fakeZoom"></div>
          </div>
          <div className="fakeScreen">
            <p className="line1">justin.chan@127.0.0.1 ~$: whoami</p>
            <p className="line2">
               I'm a cross-functional leader driven by impact and results with strong programming and ML fundamentals.
               I pride myself in tackling learning by diving into audaciously hard problems, where success means changing how the world works.
               Outside of work, I'm trying out golf and muay thai, as staying creative with videography.
            </p>
            <p className="line3">Driven by a desire to create, technology is my medium of creation.</p>
            <p>I graduated from UBC Computer Science in 2023, and now I'm automating human video review with AI as the first full-time engineering hire at OnDeck Fisheries AI.</p>
            <p className="line4"><span className="cursor4">_</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
