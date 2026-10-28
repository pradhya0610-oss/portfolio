import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="navbar">
    <a href="#home" class="logo">Portfolio<span>.</span></a>

    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact" class="nav-btn">Contact Me</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-content">
        

<h1>Hi, I'm <span>Sandhya</span><br />Software Developer.</h1>
        <p class="intro">
          I'm a BCA student passionate about Java, DSA,
          web development and creating useful digital experiences.
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="primary-btn">View My Work ↗</a>
          <a href="#contact" class="secondary-btn">Let's Connect</a>
        </div>

        <p class="availability">● Open to internship opportunities</p>
      </div>

    </section>

    <section class="section" id="about">
      <p class="eyebrow">GET TO KNOW ME</p>
      <h2>About <span>Me</span></h2>
      <p class="section-text">
        I'm pursuing BCA at Raipur Institute of Technology.
        I enjoy solving coding problems, learning new technologies
        and building projects that strengthen my development skills.
      </p>
    </section>

    <section id="skills" class="skills-section">
      <p class="eyebrow">WHAT I WORK WITH</p>
      <h2 class="section-title">My Skills</h2>

      <div class="skills-container">
        <article class="skill-card">
          <h3>Languages</h3>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-icon">J</span>Java</div>
            <div class="skill-item"><span class="skill-icon">C++</span>C++</div>
            <div class="skill-item"><span class="skill-icon">JS</span>JavaScript</div>
            <div class="skill-item"><span class="skill-icon">PY</span>Python</div>
          </div>
        </article>

        <article class="skill-card">
          <h3>Frontend</h3>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-icon">&lt;/&gt;</span>HTML5</div>
            <div class="skill-item"><span class="skill-icon">#</span>CSS3</div>
            <div class="skill-item"><span class="skill-icon">R</span>React.js</div>
            <div class="skill-item"><span class="skill-icon">TW</span>Tailwind CSS</div>
          </div>
        </article>

        <article class="skill-card">
          <h3>Backend</h3>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-icon">N</span>Node.js</div>
            <div class="skill-item"><span class="skill-icon">EX</span>Express.js</div>
            <div class="skill-item"><span class="skill-icon">API</span>REST APIs</div>
          </div>
        </article>

        <article class="skill-card">
          <h3>Database</h3>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-icon">DB</span>MongoDB</div>
            <div class="skill-item"><span class="skill-icon">▤</span>SQL</div>
            <div class="skill-item"><span class="skill-icon">M</span>Mongoose</div>
          </div>
        </article>

        <article class="skill-card">
          <h3>Frameworks &amp; Libraries</h3>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-icon">B</span>Bootstrap</div>
            <div class="skill-item"><span class="skill-icon">RR</span>React Router</div>
          </div>
        </article>

        <article class="skill-card">
          <h3>Developer Tools</h3>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-icon">G</span>Git</div>
            <div class="skill-item"><span class="skill-icon">GH</span>GitHub</div>
            <div class="skill-item"><span class="skill-icon">&lt;/&gt;</span>VS Code</div>
            <div class="skill-item"><span class="skill-icon">IJ</span>IntelliJ IDEA</div>
            <div class="skill-item"><span class="skill-icon">P</span>Postman</div>
          </div>
        </article>

        <article class="skill-card">
          <h3>AI Tools</h3>
          <div class="skills-grid">
            <div class="skill-item"><span class="skill-icon">GPT</span>ChatGPT</div>
            <div class="skill-item"><span class="skill-icon">CP</span>GitHub Copilot</div>
            <div class="skill-item"><span class="skill-icon">CA</span>Cursor AI</div>
            <div class="skill-item"><span class="skill-icon">GM</span>Google Gemini</div>
            <div class="skill-item"><span class="skill-icon">GS</span>Google Stitch</div>
            <div class="skill-item"><span class="skill-icon">GA</span>Google Antigravity</div>
          </div>
        </article>
      </div>
    </section>

    <section class="section" id="projects">
      <p class="eyebrow">SELECTED WORK</p>
      <h2>Featured <span>Projects</span></h2>

      <div class="projects-grid">
        <article class="project-card">
          <span class="project-number">01 / WEB DEVELOPMENT</span>
          <h3>Wanderlust</h3>
          <p>An accommodation listing website with listings,
          reviews and user authentication.</p>
          <div class="tech-tags">
            <span>Node.js</span><span>Express</span><span>MongoDB</span>
          </div>
        </article>

        <article class="project-card">
          <span class="project-number">02 / FINTECH UI</span>
          <h3>Zerodha Clone</h3>
          <p>A trading dashboard project focused on portfolio
          data and a clean user interface.</p>
          <div class="tech-tags">
            <span>React</span><span>JavaScript</span><span>CSS</span>
          </div>
        </article>

        <article class="project-card">
          <span class="project-number">03 / AI PROJECT</span>
          <h3>ChatGPT Clone</h3>
          <p>A conversational interface project designed
          to explore AI-style user experiences.</p>
          <div class="tech-tags">
            <span>React</span><span>API</span><span>CSS</span>
          </div>
        </article>
      </div>
    </section>

    <!-- Resume & Certificates Section -->
<section class="certificates-section" id="certificates">

  <div class="certificates-heading">
    <span class="section-tag">MY ACHIEVEMENTS</span>
    <h2>Resume <span>&</span> Certifications</h2>
    <p>My learning journey, skills and achievements.</p>
  </div>

  <!-- Resume Card -->
  <div class="resume-card">
    <div class="resume-info">
      <h3>Sandhya Tiwari</h3>
      <p>BCA Student | Java & DSA | Web Developer</p>
      <p>Explore my resume and technical skills.</p>
    </div>

    <div class="resume-actions">
      <a href="/SANDHYA%20resume.pdf" target="_blank" class="resume-btn">
        View Resume ↗
      </a>

      <a href="/SANDHYA%20resume.pdf" download="SANDHYA resume.pdf" class="resume-btn outline-btn">
        Download Resume ↓
      </a>
    </div>
  </div>

  <!-- Certificate Cards -->
  <div class="certificates-grid">

    <div class="certificate-card">
      <div class="certificate-info">
        <h3>Alpha — DSA with Java</h3>
        <p>Apna College</p>
        <a href="/apnaCollege.jpg" target="_blank" rel="noopener noreferrer">Open Certificate ↗</a>
      </div>
    </div>

    <div class="certificate-card">
      <div class="certificate-info">
        <h3>Generative AI for All</h3>
        <p>Physics Wallah & Microsoft</p>
        <a href="/PWmicroSoft.jpg" target="_blank" rel="noopener noreferrer">Open Certificate ↗</a>
      </div>
    </div>

    <div class="certificate-card">
      <div class="certificate-info">
        <h3>Data Analytics: Excel to Dashboard</h3>
        <p>Physics Wallah</p>
        <a href="/pw.jpg" target="_blank" rel="noopener noreferrer">Open Certificate ↗</a>
      </div>
    </div>

    <div class="certificate-card">
      <div class="certificate-info">
        <h3>Python for Beginners</h3>
        <p>Simplilearn SkillUp</p>
        <a href="/simpliLearn.jpg" target="_blank" rel="noopener noreferrer">Open Certificate ↗</a>
      </div>
    </div>

    <div class="certificate-card">
      <div class="certificate-info">
        <h3>Introduction to Artificial Intelligence</h3>
        <p>Simplilearn SkillUp</p>
        <a href="/SimpliLearnAI.jpg" target="_blank" rel="noopener noreferrer">Open Certificate ↗</a>
      </div>
    </div>

    <div class="certificate-card">
      <div class="certificate-info">
        <h3>EY Certificate</h3>
        <p>EY</p>
        <a href="/EY.jpg" target="_blank" rel="noopener noreferrer">Open Certificate ↗</a>
      </div>
    </div>

  </div>
</section>
    <section class="contact-section" id="contact">
      <p class="eyebrow">HAVE AN OPPORTUNITY?</p>
      <h2>Let's build something <span>great.</span></h2>
      <p>I'm interested in internships, collaborations and
      opportunities to learn and grow.</p>
      <form class="contact-form" id="contact-form">
        <label>
          Your name
          <input name="name" type="text" autocomplete="name" maxlength="100" required />
        </label>
        <label>
          Email address
          <input name="email" type="email" autocomplete="email" maxlength="254" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" maxlength="2000" required></textarea>
        </label>
        <button class="primary-btn" type="submit">Send Message</button>
        <p id="contact-status" class="contact-status" role="status" aria-live="polite"></p>
      </form>
      <div class="contact-actions">
        <a href="mailto:Pradhya0610@gmail.com" class="email-btn primary-btn" target="_self">
          Email Me ↗
        </a>
        <a
          class="secondary-btn"
          href="https://github.com/pradhya0610-oss"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-brand">
      <a href="#home" class="logo">Portfolio<span>.</span></a>
      <p>Designed & built with curiosity.</p>
      <p>© 2026 Portfolio</p>
    </div>
    <div class="footer-connect">
      <h2>Connect</h2>
      <div class="social-links">
        <a
          class="social-link"
          href="https://github.com/pradhya0610-oss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
          title="GitHub"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.8 11.8 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.6 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" />
          </svg>
        </a>
        <a
          class="social-link"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
          title="LinkedIn"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.6v11.6H3.4V9Zm5.8 0h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v6.2h-3.6v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.6H9.2V9Z" />
          </svg>
        </a>
        <a
          class="social-link"
          href="mailto:Pradhya0610@gmail.com"
          aria-label="Send me an email"
          title="Email"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        </a>
        <a
          class="social-link"
          href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Instagram profile"
          title="Instagram"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
`;

const contactForm = document.querySelector<HTMLFormElement>('#contact-form');
const contactStatus = document.querySelector<HTMLParagraphElement>('#contact-status');
const contactSubmit = contactForm?.querySelector<HTMLButtonElement>('button[type="submit"]');
const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();
const apiUrl = (
  configuredApiUrl || (import.meta.env.DEV ? 'http://localhost:5000/api' : '/api')
).replace(/\/$/, '');

contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!contactForm || !contactStatus || !contactSubmit) return;

  contactStatus.textContent = 'Sending your message...';
  contactStatus.dataset.state = 'loading';
  contactSubmit.disabled = true;

  try {
    const formData = new FormData(contactForm);
    const response = await fetch(`${apiUrl}/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });
    const result = (await response.json().catch(() => ({}))) as { message?: string };

    if (!response.ok) {
      throw new Error(result.message || 'Your message could not be sent.');
    }

    contactStatus.textContent = result.message || 'Your message was sent.';
    contactStatus.dataset.state = 'success';
    contactForm.reset();
  } catch (error) {
    contactStatus.textContent =
      error instanceof TypeError
        ? 'Unable to connect to the server. Please try again later.'
        : error instanceof Error
          ? error.message
          : 'Your message could not be sent.';
    contactStatus.dataset.state = 'error';
  } finally {
    contactSubmit.disabled = false;
  }
});
