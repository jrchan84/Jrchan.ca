import { FaLink, FaPlayCircle, FaLinkedinIn, FaGithub, FaRegEyeSlash} from "react-icons/fa";
import './Projects.css';

function Projects() {
  return (
    <div className="projects" id="Projects">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-content">
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3 className="project-type">Decentralized Messaging</h3>
              <div className="title-tag-divider"></div>
              <h3>DeMes</h3>
            </div>
            <img className="project-img" src="/assets/images/demes-logo.png" alt="demes logo"/>
            <p className="project-tags">React, Express, Leadership Election Protocol</p>
            <p className="project-description">Decentralized messaging service with custom fault-tolerant leadership selection to allow user-hosted chat servers. Distributed Systems team project.</p>
            <div className="project-links">
            <a target="_blank" rel="noopener noreferrer" href="https://evoly-map-webapp.herokuapp.com/"><FaLink /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84/Evoly-Map-WebApp"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3 className="project-type">Full-Stack</h3>
              <div className="title-tag-divider"></div>
              <h3>Map Visualization</h3>
            </div>
            <img className="project-img" src="/assets/images/evoly-logo.png" alt="evoly logo"/>
            <p className="project-tags">React, Express, DynamoDB, Redis</p>
            <p className="project-description">Full-stack geographical map data visualization project utilizing MapBox API. Performant MVC Express server with Redis cache layer and optimized UI coordinate clustering.</p>
            <div className="project-links">
            <a target="_blank" rel="noopener noreferrer" href="https://evoly-map-webapp.herokuapp.com/"><FaLink /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84/Evoly-Map-WebApp"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3 className="project-type">Club VP Tech</h3>
              <div className="title-tag-divider"></div>
              <h3>GDSC</h3>
            </div>
            <img className="project-img" src="/assets/images/gdsc-logo.png" alt="gdsc logo"/>
            <p className="project-tags">Leadership, GCP, Cloud Architecture</p>
            <p className="project-description">Joined the founding team to grow a community of 120+ students. Spearheaded the club’s backend infrastructure on GCP and presented technical workshops to 200+ students.</p>
            <div className="project-links">
              <a target="_blank" rel="noopener noreferrer" href="https://ubcdsc.com/"><FaLink /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/dsc-ubc/"><FaLinkedinIn /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ubcdsc"><FaGithub /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=h_VskGX85dc"><FaPlayCircle /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=VruTOetuP04"><FaPlayCircle /></a>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3 className="project-type">Discord Bot</h3>
              <div className="title-tag-divider"></div>
              <h3>TTNR</h3>
            </div>
            <img className="project-img" src="/assets/images/ttnr-logo.png" alt="ttnr logo"/>
            <p className="project-tags">Discord API, Node.js, Docker, GCP</p>
            <p className="project-description">Custom discord bot for gamified community engagement. Deployed on containerized GCE VM through custom CI/CD pipeline using Container Registry, Secret Manager, Firestore, etc.</p>
            <div className="project-links">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84/TTNR"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3 className="project-type">Query Engine REST API</h3>
              <div className="title-tag-divider"></div>
              <h3>UBCBR</h3>
            </div>
            <img className="project-img" src="/assets/images/ubcbr-logo.png" alt="ubcbr logo"/>
            <p className="project-tags">Node.js, Express, EBNF, Full-stack </p>
            <p className="project-description">Full stack REST API web server and neumorphic frontend that provides query insights to certain UBC metadata. Implemented with test driven development and custom ENBF syntax.</p>
            <div className="project-links">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84/UBCBR"><FaGithub /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/TPhAG1oIKWQ"><FaPlayCircle /></a>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3>RBC Innovation Challenge <span className="project-type">2020</span></h3>
            </div>
            <img className="project-img" src="/assets/images/meetme-logo.png" alt="meetme logo"/>
            <p className="project-tags">Slack API, Flask, MariaDB, SQLAlchemy</p>
            <p className="project-description">Casual networking Python slack bot. Finalist in internal hackathon and advanced to internal production. Deployed flask app to OpenShift with containerized MariaDB. </p>
            <div className="project-links">
              <div className="no-link"><FaRegEyeSlash /></div>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3>BizHacks <span className="project-type">2020</span></h3>
            </div>
            <img className="project-img" src="/assets/images/bizhacks-logo.png" alt="bizhacks logo"/>
            <p className="project-tags">Java, Azure, Facial Recognition</p>
            <p className="project-description">Hackathon project centered on BestBuy case study. Personalized customer interface utilizing Azure facial reconition and BestBuy API integrations for shopping recommendations.</p>
            <div className="project-links">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84/Face-Forward"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3>Local Hack Day <span className="project-type">2019</span></h3>
            </div>
            <img className="project-img" src="/assets/images/diner-dates-logo.png" alt="diner dates logo"/>
            <p className="project-tags">JavaFX, Google Places API</p>
            <p className="project-description">Introductory hackathon project. Social eating platform with localized dining recommendations and matchmaking implemented as a JavaFX desktop application.</p>
            <div className="project-links">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84/Diner-Dates"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3 className="project-type">CRUD</h3>
              <div className="title-tag-divider"></div>
              <h3>Playlist Database</h3>
            </div>
            <img className="project-img" src="/assets/images/crud-logo.png" alt="crud logo"/>
            <p className="project-tags">PHP, MySQL, Apache, Xampp</p>
            <p className="project-description">Relational database CRUD app for radio station content management. Implemented PHP interface to establish database connection and execute SQL operations.</p>
            <div className="project-links">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84/Playlist-Planet"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3 className="project-type">JavaFX</h3>
              <div className="title-tag-divider"></div>
              <h3>Booking Manager</h3>
            </div>
            <img className="project-img" src="/assets/images/photo-logo.png" alt="manager logo"/>
            <p className="project-tags">JavaFX, OOP, Design Patterns</p>
            <p className="project-description">Introductory software construction course project. Appointment management application involving JUnit unit tests and Java design patterns like Observer.</p>
            <div className="project-links">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84/PhotoBookings"><FaGithub /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/mzsZFDvDres"><FaPlayCircle /></a>
            </div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="title-tag">
              <h3>Other</h3>
            </div>
            <img className="project-img" src="/assets/images/meme-logo.jpg" alt="meme logo"/>
            <p className="project-tags">coursework, future</p>
            <p className="project-description">Computer networking course projects. Machine learning course assignments. Data structure course implementations. Streamlined android launcher for dementia patients. Etc. </p>
            <div className="project-links">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jrchan84"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
