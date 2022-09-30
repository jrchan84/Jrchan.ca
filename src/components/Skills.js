import React, { useEffect } from 'react';
import './Skills.css';

function Skills() {
  useEffect(() => {
    document.getElementById("default").click();
  });

  function openTab(evt, tabs) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabs).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  return (
    <div className="skills" id="Skills">
      <h1 className="skills-title">Technical Skills</h1>
      <div className="hero-container">
        <div className="hero-content">
          <div className="tab">
            <button className="tablinks" onClick={(e) => openTab(e, "Languages")} id="default">Languages</button>
            <button className="tablinks" onClick={(e) => openTab(e, "Frameworks/Libraries")}>Frameworks & Libraries</button>
            <button className="tablinks" onClick={(e) => openTab(e, "Platforms")}>Platforms & Databases</button>
            <button className="tablinks" onClick={(e) => openTab(e, "Tools")}>Tools</button>
          </div>
          <div className="divider"></div>
          <div id="Languages" className="tabcontent">
            <ul className="list">
              <li className="list-item">
                <h3>Java</h3>
                <div className="item-divider"></div>
                <p>2+ years of industry experience with production level code and object-oriented programming. Used extensively in course work to implement full-stack TDD projects, internet networking, data structures and algorithms, and design patterns.</p>
              </li>
              <li className="list-item">
                <h3>Scala</h3>
                <div className="item-divider"></div>
                <p>Strong functional programming skills built though internship experience, contributing server-side code to production regularly. Completed company certification course covering deep language knowledge.</p>
              </li>
              <li className="list-item">
                <h3>TypeScript</h3>
                <div className="item-divider"></div>
                <p>Regularly used in work experience, personal projects, and coursework in both UI frameworks and Node.js backend applications.</p>
              </li>
              <li className="list-item">
                <h3>JavaScript</h3>
                <div className="item-divider"></div>
                <p>Regularly used in work experience, personal projects, and coursework.</p>
              </li>
              <li className="list-item">
                <h3>Python</h3>
                <div className="item-divider"></div>
                <p>Intermediate skills from coursework and projects. Used in internship side-desk project and in machine learning classes and projects.</p>
              </li>
              <li className="list-item">
                <h3>C/C++</h3>
                <div className="item-divider"></div>
                <p>Intermediate skills from coursework, especially low-level, networking, and DSA topics.</p>
              </li>
            </ul>
          </div>
          <div id="Frameworks/Libraries" className="tabcontent">
            <ul className="list">
              <li className="list-item">
                <h3>Angular, NgRx, RxJS, Selenium</h3>
                <div className="item-divider"></div>
                <p>Industry experience developing features and closing bugs in production within extensive codebase. Worked with NgRx state management and observables frequently, implementing new functionality and ensuring performance. Completed company certification course covering Angular and event-based fundamentals.</p>
              </li>
              <li className="list-item">
                <h3>React.js, Express.js, Node.js, Jest, Mocha, Chai</h3>
                <div className="item-divider"></div>
                <p>Strong experience gained across multiple projects and coursework, as well as hosting community workshops for developing web applications.</p>
              </li>
              <li className="list-item">
                <h3>Spring Framework, Spring Boot, log4j, JUnit, Mockito</h3>
                <div className="item-divider"></div>
                <p>Intermediate experience from internship work developing Java microservices in enterprise OpenShift environments.</p>
              </li>
              <li className="list-item">
                <h3>SQLAlchemy, Sequelize</h3>
                <div className="item-divider"></div>
                <p>Intermediate experience through using ORMs in internships and personal projects.</p>
              </li>
              <li className="list-item">
                <h3>REST APIs, Protobuf, HTTP</h3>
                <div className="item-divider"></div>
                <p>Strong web interface and communication knowledge gained through work and academics, strengthened with fundamentals in internet networking.</p>
              </li>
              <li className="list-item">
                <h3>NumPy, Matplotlib, pandas, scikit-learn, TensorFlow, PyTorch</h3>
                <div className="item-divider"></div>
                <p>Introductory skills developed through implementing machine learning concepts in coursework.</p>
              </li>
              <li className="list-item">
                <h3>HTML, CSS</h3>
                <div className="item-divider"></div>
                <p>Proficient fundamental knowledge as necessary for web development.</p>
              </li>
            </ul>
          </div>
          <div id="Platforms" className="tabcontent">
            <ul className="list">
              <li className="list-item">
                <h3>GCP</h3>
                <div className="item-divider"></div>
                <p>Intermediate experience built through personal and community projects. Designed and implemented cloud architecture integrating custom CI/CD with GCE dockerized VM's, Container Registry, Firestore, Secrets, Cloud Functions, and github actions.</p>
              </li>
              <li className="list-item">
                <h3>OpenShift</h3>
                <div className="item-divider"></div>
                <p>Intermediate experience gained from internship experience working in enterprise environments.</p>
              </li>
              <li className="list-item">
                <h3>AWS</h3>
                <div className="item-divider"></div>
                <p>Introductory experience from projects and workshops.</p>
              </li>
              <li className="list-item">
                <h3>Docker, Kubernetes</h3>
                <div className="item-divider"></div>
                <p>Intermediate knowledge working with containerized applications and custom CI/CD pipelines at work and in projects.</p>
              </li>
              <li className="list-item">
                <h3>MySQL, MariaDB, MongoDB, Firebase, Firestore, SQLite, ElasticSearch</h3>
                <div className="item-divider"></div>
                <p>Strong experience working with SQL and NoSQL document databases across work, academics, and projects.</p>
              </li>
            </ul>
          </div>
          <div id="Tools" className="tabcontent">
            <ul className="list">
              <li className="list-item">
                <h3>Git, Github, BitBucket</h3>
              </li>
              <li className="list-item">
                <h3>Jira, Confluence</h3>
              </li>
              <li className="list-item">
                <h3>Linux, Jenkins, ssh, CLI's, remote and cloud development</h3>
              </li>
              <li className="list-item">
                <h3>Figma, Adobe Creative Suite</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
