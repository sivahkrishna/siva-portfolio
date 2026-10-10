import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={() => setMenuOpen(false)}
        >
          SK<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>Certificates</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="greeting">HELLO, I'M</p>

          <h1>
            Siva Krishna<span>.</span>
          </h1>

          <h2>
            Aspiring AI Engineer
            <br />
            <span>Developer</span>
          </h2>

          <p className="hero-description">
            I build intelligent applications and solve real-world
            problems using Machine Learning, Python, and modern
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="/resume.pdf" className="secondary-button" download>
              Download Resume ↓
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/sivahkrishna" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>

            <a href="https://www.linkedin.com/in/sivahkrishna/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>

            <a href="mailto:your-email@example.com">
              Email ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="visual-card">
            <div className="card-top">
              <span></span>
              <span></span>
              <span></span>
              <p>developer.py</p>
            </div>

            <div className="code-content">
              <p><span className="code-purple">class</span> Developer:</p>
              <p className="indent">
                name = <span className="code-green">"Siva Krishna"</span>
              </p>
              <p className="indent">
                focus = <span className="code-green">"AI & ML"</span>
              </p>
              <p className="indent">
                passion = <span className="code-green">"Building"</span>
              </p>
              <br />
              <p className="indent">
                <span className="code-purple">def</span> create():
              </p>
              <p className="indent double-indent">
                <span className="code-purple">return</span>{" "}
                <span className="code-green">"Something great!"</span>
              </p>
            </div>

            <div className="card-footer">
              <span>⌘</span>
              Always learning. Always building.
            </div>
          </div>

          <div className="floating-badge badge-top">
            ✦ Machine Learning
          </div>

          <div className="floating-badge badge-bottom">
            ⌘ Python Developer
          </div>
        </div>

        <a href="#about" className="scroll-indicator">
          SCROLL TO EXPLORE ↓
        </a>
      </section>

      <section className="intro-strip">
        <span>PYTHON</span>
        <span>✳</span>
        <span>MACHINE LEARNING</span>
        <span>✳</span>
        <span>DATA SCIENCE</span>
        <span>✳</span>
        <span>DJANGO</span>
      </section>

      <section className="about-preview" id="about">
        <p className="section-label">01 / ABOUT ME</p>

        <h2>
          Turning ideas into
          <br />
          <span>intelligent solutions.</span>
        </h2>

        <p>
          I'm an Artificial Intelligence and Machine Learning graduate
          passionate about building practical software solutions.
          My interests include Machine Learning, Data Science, and
          backend development.
        </p>

        <p>
          Through academic projects and professional training, I've
          gained experience working with Python, Django, SQL, and
          AI/ML concepts. I enjoy solving problems, learning new
          technologies, and turning ideas into useful applications.
        </p>

        <p>
          I'm currently developing my Data Science skills and looking
          for opportunities to grow as an AI/ML and Data Science
          professional.
        </p>
      </section>

      <section className="projects-preview" id="projects">
        <p className="section-label">02 / SELECTED WORK</p>

        <h2>
          Projects that showcase
          <br />
          <span>my skills.</span>
        </h2>

        <p className="projects-description">
          A selection of applications I've developed using AI, Machine
          Learning, and modern web technologies.
        </p>

        <div className="projects-grid">
          {/* EDU AI */}
          <article className="project-card">
            <div className="project-number">PROJECT 01</div>

            <div className="project-symbol">✳</div>

            <h3>EDU AI</h3>

            <p className="project-subtitle">
              AI-Powered Smart Classroom
            </p>

            <p className="project-description">
              A smart classroom management and learning platform featuring
              content summarization, question generation, sentiment
              analysis, student performance analysis, and descriptive
              answer evaluation.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Django</span>
              <span>MySQL</span>
              <span>NLP</span>
              <span>Flutter</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/sivahkrishna/edu-ai-web"
                target="_blank"
                rel="noreferrer"
              >
                Web Application ↗
              </a>

              <a
                href="https://github.com/sivahkrishna/edu-ai-app"
                target="_blank"
                rel="noreferrer"
              >
                Mobile Application ↗
              </a>
            </div>
          </article>

          {/* AGRISHIELD */}
          <article className="project-card">
            <div className="project-number">PROJECT 02</div>

            <div className="project-symbol">❋</div>

            <h3>Agrishield</h3>

            <p className="project-subtitle">
              AI-Powered Smart Agriculture
            </p>

            <p className="project-description">
              A smart agriculture solution that supports crop
              recommendation, plant disease detection, and an AI chatbot
              to help users access agricultural information.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>AI</span>
              <span>Flutter</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/sivahkrishna/agri-web"
                target="_blank"
                rel="noreferrer"
              >
                Web Application ↗
              </a>

              <a
                href="https://github.com/sivahkrishna/agri-app"
                target="_blank"
                rel="noreferrer"
              >
                Mobile Application ↗
              </a>
            </div>
          </article>

          {/* MEDI AI */}
          <article className="project-card">
            <div className="project-number">PROJECT 03</div>

            <div className="project-symbol">✚</div>

            <h3>Medi AI</h3>

            <p className="project-subtitle">
              AI-Powered Medical Image Analysis
            </p>

            <p className="project-description">
              A medical image analysis project exploring deep learning
              approaches for detecting Alzheimer's disease, lung cancer,
              and bone fractures from medical images.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Deep Learning</span>
              <span>CNN</span>
              <span>Flutter</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/sivahkrishna/med-ai-diagnostic-system-website"
                target="_blank"
                rel="noreferrer"
              >
                Web Application ↗
              </a>

              <a
                href="https://github.com/sivahkrishna/med-ai-diagnostic-system-application"
                target="_blank"
                rel="noreferrer"
              >
                Mobile Application ↗
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <p className="section-label">03 / EXPERIENCE</p>

        <h2>
          My professional
          <br />
          <span>journey.</span>
        </h2>

        <div className="experience-list-container">

          {/* Data Science Internship */}

          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Data Science Intern</h3>
                <p className="company-name">SMEC Technologies</p>
              </div>

              <span className="experience-year">
                Jul 2026 – Present
              </span>
            </div>

            <p className="experience-description">
              Currently undertaking professional training in Data Science,
              Artificial Intelligence, Machine Learning, and Generative AI.
              Completed Python and SQL fundamentals and continuing to
              develop practical data analytics and machine learning skills.
            </p>

            <ul className="experience-list">
              <li>Completed Python programming fundamentals.</li>
              <li>Learned SQL and database operations.</li>
              <li>Developing foundational knowledge of Data Science and AI/ML.</li>
              <li>Continuing structured training in Generative AI and Machine Learning.</li>
            </ul>

            <div className="experience-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>Data Science</span>
              <span>Machine Learning</span>
              <span>Generative AI</span>
            </div>

            <p className="current-status">
              <span className="status-dot"></span>
              Currently Ongoing
            </p>
          </article>

          {/* Completed Python Django Internship */}

          <article className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Python Django Developer Intern</h3>
                <p className="company-name">Zecser Business LLP</p>
              </div>

              <span className="experience-year">
                Jun 2026 – Sep 2026
              </span>
            </div>

            <p className="experience-description">
              Completed a Python/Django development internship focused on
              backend development, REST APIs, authentication, and database
              operations.
            </p>

            <ul className="experience-list">
              <li>Developed REST APIs using Django REST Framework.</li>
              <li>Worked with JWT authentication and protected endpoints.</li>
              <li>Implemented CRUD operations and API serializers.</li>
              <li>Worked with authentication and permission systems.</li>
              <li>Used Git and GitHub for version control.</li>
            </ul>

            <div className="experience-tags">
              <span>Python</span>
              <span>Django</span>
              <span>DRF</span>
              <span>REST API</span>
              <span>JWT</span>
              <span>MySQL</span>
              <span>GitHub</span>
            </div>

            <p className="completed-status">
              Internship Completed
            </p>
          </article>

        </div>
      </section>

      <section className="education-section" id="education">
        <p className="section-label">04 / EDUCATION</p>

        <h2>
          My academic
          <br />
          <span>background.</span>
        </h2>

        <article className="education-card">
          <div className="education-icon">✦</div>

          <div className="education-content">
            <span className="education-year">2023 – 2026</span>

            <h3>
              B.Sc. Artificial Intelligence & Machine Learning
            </h3>

            <p className="education-college">
              Don Bosco Arts & Science College
            </p>

            <p className="education-university">
              Kannur University, Kerala
            </p>

            <div className="education-tags">
              <span>Artificial Intelligence</span>
              <span>Machine Learning</span>
              <span>Computer Science</span>
            </div>
          </div>
        </article>
      </section>

      <section className="certifications-section" id="certifications">
        <p className="section-label">05 / CERTIFICATIONS</p>

        <h2>
          Learning never
          <br />
          <span>stops.</span>
        </h2>

        <p className="certifications-intro">
          Professional learning and certifications that support my
          journey in technology, AI, and Data Science.
        </p>

        <div className="certifications-grid">
          <article className="certificate-card">
            <div className="certificate-icon">✦</div>

            <p className="certificate-label">CERTIFICATION</p>

            <h3>Python Developer Intern</h3>

            <p className="certificate-provider">
              Issued by: Zecser Business LLP
            </p>

            <p className="certificate-description">
              Gained hands-on experience in REST API development, CRUD operations, 
              JWT authentication, database integration, and API testing using Postman.
            </p>

            <a
              href="/python.pdf"
              className="certificate-link"
            >
              Certificate details →
            </a>
          </article>

          <article className="certificate-card">
            <div className="certificate-icon">✧</div>

            <p className="certificate-label">CERTIFICATION</p>

            <h3>Project Completion Certificate</h3>

            <p className="certificate-provider">
              Issued by: Riss Technologies
            </p>

            <p className="certificate-description">
              Successfully completed an academic project involving AI-powered 
              application development using Python and Flutter.
            </p>

            <a
              href="/project.pdf"
              className="certificate-link"
            >
              Certificate details →
            </a>
          </article>
        </div>
      </section>

      <section className="contact-preview" id="contact">
        <p className="section-label">06 / GET IN TOUCH</p>
        <h2>Let's build something great.</h2>
        <a href="mailto:sivahkrishna.dev@gmail.com" className="primary-button">
          Contact Me ↗
        </a>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">
          SK<span>.</span>
        </a>
        <p>Designed & built with curiosity.</p>
        <p>© 2026 Siva Krishna</p>
      </footer>
    </main>
  );
}

export default App;