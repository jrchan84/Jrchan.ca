import './Work.css';

function Work() {
  return (
    <div className="work" id="Work">
      <h1 className="work-title">Work Experience</h1>
      <div className="hero-container">
        <div className="hero-content">
          <div className="company">
            <div className="company-logo">
              <h3>OnDeck Fisheries AI</h3>
              <img src="/assets/images/ondeck-logo.png" alt="ondeck logo"/>
              <p>Software Engineer</p>
              <p className="team">Workflow Team</p>
              <p className="team">April 2023 - Present</p>
            </div>
            <div className="work-description">
              <p>First full-time hire spearheading the development of core cloud and MLOps infrastructure and consumer facing API. Building reusable staging and testing CI/CD pipelines and leading the engineering team's efforts. </p>
            </div>
          </div>
          <div className="work-divider"></div>
          <div className="company">
            <div className="company-logo">
              <h3>Visier, Inc.</h3>
              <img src="/assets/images/visier-logo.png" alt="visier logo"/>
              <p>Software Developer Co-op</p>
              <p className="team">Workflow Team</p>
              <p className="team">May 2022 - Dec 2022</p>
            </div>
            <div className="work-description">
              <p>Engineered product features improving user experience and adding value for 15,000+ customers, working alongside lead engineers to rapidly ship new functionality and close weekly production patch bugs.</p>
            </div>
          </div>
          <div className="work-divider"></div>
          <div className="company">
            <div className="company-logo">
              <h3>Royal Bank of Canada</h3>
              <img src="/assets/images/rbc-logo.png" alt="rbc logo"/>
              <p>Software Engineer Co-op</p>
              <p className="team">Data Services Team</p>
              <p className="team">Sept 2020 - Aug 2021</p>
            </div>
            <div className="work-description">
              <p>Developed Java microservices with Spring Boot on enterprise OpenShift environments to ingest log data into ElasticSearch, enabling centralized monitoring and adherence to data retention compliance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
