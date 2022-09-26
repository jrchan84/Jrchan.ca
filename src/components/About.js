import './About.css';

function About() {
  return (
    <div className="about" id="About">
      <div className="portrait">
        <img className="about-portrait" src="/assets/images/profile-pic-small.png" alt="About Images"/>
      </div>
      <div className="content">
        <h1 className="about-title">About</h1>
        <div className="console">
          <div class="fakeMenu">
            <div class="fakeButtons fakeClose"></div>
            <div class="fakeButtons fakeMinimize"></div>
            <div class="fakeButtons fakeZoom"></div>
          </div>
          <div class="fakeScreen">
            <p class="line1">justin.chan@127.0.0.1 ~$: whoami</p>
            <p class="line2">Fourth year computer science student at UBC. </p>
            <p class="line3">Driven by a passion to create, technology is my medium of creation.</p>
            <p class="line4">><span class="cursor4">_</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
