import './style.css';
import avatar from './assets/avatar.png';
import hlegalImg from './hlegal.png.png';
import webstudioImg from './web-new.png.png';
import portfolioImg from './assets/hero 1.png';
import frontendCertificate from './assets/frontend-certificate.png';
import promptCertificate from './assets/prompt-certificate.png';
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import emailIcon from './assets/email.svg';
document.querySelector('#app').innerHTML = `
  <main class="portfolio">
    <nav class="nav">
      <a href="#" class="logo">Alina.dev</a>

      <div class="nav-links">
        <a id="nav-about" href="#about">About</a>
        <a id="nav-skills" href="#skills">Skills</a>
        <a id="nav-projects" href="#projects">Projects</a>
        <a id="nav-contact" href="#contacts">Contact</a>
      </div>

      <div class="lang-switcher">
        <button id="en">EN</button>
        <button id="uk">UA</button>
        <button id="hr">HR</button>
      </div>
    </nav>

    <header class="hero">
      <div class="hero-content">
        <span id="hero-label" class="hero-label">Available for freelance & junior roles</span>

        <h1 id="hero-name">Hi, I'm Alina Bezsonova</h1>
        <h2 id="job-title">Junior Front-End Developer</h2>

        <p id="hero-text">
          I create modern, responsive websites using HTML, CSS, SCSS and JavaScript.
        </p>
        <div class="hero-skills">
  <span>HTML</span>
  <span>CSS</span>
  <span>SCSS</span>
  <span>JavaScript</span>
  <span>Git</span>
  <span>GitHub</span>
  <span>Vite</span>
</div>

  <div class="hero-buttons">
  <a id="btn-projects" href="#projects" class="btn btn-primary">View projects</a>

  <a href="https://github.com/BALINA83" target="_blank" class="btn btn-secondary">
    GitHub
  </a>

  <a href="/cv.pdf" target="_blank" class="btn btn-secondary" id="btn-cv">
    Download CV
  </a>
</div>      
      
      <p class="hero-status">
  📍 Zagreb, Croatia • Available for freelance projects
</p>
</div>
      <div class="hero-photo">
        <img src="${avatar}" alt="Alina Bezsonova" />
      </div>
    </header>

    <section class="about" id="about">
      <h3 id="about-title">About me</h3>

     <div class="about-grid">

  <div class="about-card">
    🎓 Front-End Basic Graduate
  </div>

  <div class="about-card">
    💻 HTML, CSS, SCSS & JavaScript
  </div>

  <div class="about-card">
    📱 Responsive Web Development
  </div>

  <div class="about-card">
    🚀 Building Real Projects
  </div>

  <div class="about-card">
    🔧 Git & GitHub Workflow
  </div>

  <div class="about-card">
    🌍 Open to Junior Opportunities
  </div>

</div> 
    </section>

    <section class="skills" id="skills">
      <h3 id="skills-title">Skills</h3>

     <div class="skills-grid">
  <div class="skill-card">🌐 <span>HTML5</span></div>
  <div class="skill-card">🎨 <span>CSS3</span></div>
  <div class="skill-card">💎 <span>SCSS</span></div>
  <div class="skill-card">⚡ <span>JavaScript</span></div>
  <div class="skill-card">📱 <span id="skill-responsive">Responsive Design</span></div>
  <div class="skill-card">🔧 <span>Git</span></div>
  <div class="skill-card">🐙 <span>GitHub</span></div>
  <div class="skill-card">🚀 <span>Vite</span></div>
</div> 
    </section>
   <section class="stats">
  <div class="stats-grid">
    <div class="stat-card">
      <strong>3+</strong>
      <span id="stat-projects">Projects Completed</span>
    </div>

    <div class="stat-card">
      <strong>1</strong>
     <span id="stat-certificate">Front-End Certificate</span>
    </div>

    <div class="stat-card">
      <strong>100%</strong>
      <span id="stat-responsive">Responsive Design</span>
    </div>
  </div>
</section> 
<section class="certificates" id="certificates">
  <h3 id="certificates-title">Certificates</h3>

  <div class="certificates-grid">

    <article class="certificate-card">
     <div class="certificate-preview">
  <img src="${frontendCertificate}" alt="Front-End Basic Certificate">
</div>

     <h4 id="front-certificate-title">Front-End Basic</h4>

      <p>Hillel IT School</p>

      <a
       id="front-credential"
  href="/certificates/frontend-basic.pdf"
  target="_blank"
  class="certificate-btn"
>
        View Credential
      </a>
    </article>

    <article class="certificate-card">
     <div class="certificate-preview">
  <img
    src="${promptCertificate}"
    alt="Prompt Engineering Certificate"
  >
</div>

     <h4 id="prompt-certificate-title">Prompt Engineering & AI Tools</h4>

      <p>Hillel IT School</p>

     <a
    id="prompt-credential"
  href="/certificates/prompt-engineering.pdf"
  target="_blank"
  class="certificate-btn"
>
        View Credential
      </a>
    </article>

  </div>
</section>

    <section class="projects" id="projects">
      <h3 id="projects-title">Projects</h3>

      <div class="projects-grid">
        <article class="project-card">
        <div class="project-image-wrapper">
  <img src="${hlegalImg}" alt="Hlegal" class="project-image">

  <div class="project-overlay">
    <h5>Hlegal</h5>
    <p>HTML • SCSS • JavaScript • Vite</p>
    <p>Responsive Multi-page Website</p>
  </div>
</div>
          <h4>Hlegal</h4>
          <p id="hlegal-text">
            Responsive multi-page website for a law company built with HTML,
            SCSS, JavaScript and Vite.
          </p>
          <span class="project-tech">HTML • SCSS • JavaScript • Vite</span>

          <div class="project-actions">
            <a id="hlegal-demo" href="https://balina83.github.io/homework-1/" target="_blank">
              Live Demo
            </a>
            <a href="https://github.com/BALINA83/homework-1" target="_blank">
              GitHub
            </a>
          </div>
        </article>

        <article class="project-card">
        <div class="project-image-wrapper">
  <img src="${webstudioImg}" alt="WebStudio" class="project-image">

  <div class="project-overlay">
    <h5>WebStudio</h5>
    <p>HTML • CSS • Responsive</p>
    <p>Digital Agency Landing Page</p>
  </div>
</div>
          <h4>WebStudio</h4>
          <p id="webstudio-text">
            Modern landing page for a digital agency with clean layout and
            responsive sections.
          </p>
          <span class="project-tech">HTML • CSS • Responsive</span>

          <div class="project-actions">
           <a
  id="webstudio-demo"
  href="https://balina83.github.io/webstudio/webstudio/"
  target="_blank"
>
  Live Demo
</a>
 <a
    href="https://github.com/BALINA83/webstudio"
    target="_blank"
  >
    GitHub
  </a>
          </div>
        </article>

        <article class="project-card">
        <div class="project-image-wrapper">
  <img src="${portfolioImg}" alt="Portfolio" class="project-image">

  <div class="project-overlay">
    <h5>Portfolio</h5>
    <p>HTML • CSS • JavaScript • Vite</p>
    <p>Personal Developer Portfolio</p>
  </div>
</div> 
        <h4>Portfolio</h4>
          <p id="portfolio-text">
           Personal portfolio website showcasing my projects,
  skills and contact information with a modern responsive design. 
          </p>
          <span class="project-tech">HTML • CSS • JavaScript • Vite</span>

          <div class="project-actions">
            <a id="portfolio-demo" href="#" target="_blank">Live Demo</a>
            <a href="https://github.com/BALINA83" target="_blank">GitHub</a>
          </div>
        </article>
      </div>
    </section>

<section class="contacts" id="contact">
  <h3 id="contact-title">Contact</h3>

  <div class="contact-grid">

    <a href="mailto:alina.bessonova83@gmail.com" class="contact-card">
  <img src="${emailIcon}" alt="Email" class="contact-icon">

 <h4 id="contact-email-title">Email</h4>
  <p>alina.bessonova83@gmail.com</p>
</a>

   <a
  href="https://github.com/BALINA83"
  target="_blank"
  class="contact-card"
>
  <img src="${githubIcon}" alt="GitHub" class="contact-icon">

 <h4 id="contact-github-title">GitHub</h4>
  <p>BALINA83</p>
</a>

  <a
  href="https://www.linkedin.com/"
  target="_blank"
  class="contact-card"
>
  <img src="${linkedinIcon}" alt="LinkedIn" class="contact-icon">

 <h4 id="contact-linkedin-title">LinkedIn</h4>
 <p id="contact-linkedin-text">Let's connect</p>
</a> 

  </div>
</section>
<footer class="footer">
  <p id="footer-text">© 2026 Alina Bezsonova • Front-End Developer</p>
</footer>
</main>
`;


const translations = {
  en: {
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navContact: 'Contact',
    label: 'Available for freelance & junior roles',
    name: "Hi, I'm Alina Bezsonova",
    title: 'Junior Front-End Developer',
    hero: 'I create modern, responsive websites using HTML, CSS, SCSS and JavaScript.',
    buttonProjects: 'View projects',
    aboutTitle: 'About me',
    aboutText: 'I am a Junior Front-End Developer who completed the Front-end Basic course at Hillel IT School. I build clean, responsive and user-friendly websites using HTML, CSS, SCSS, JavaScript, Git, GitHub and Vite.',
    skillsTitle: 'Skills',
    responsive: 'Responsive Design',
    projectsTitle: 'Projects',
    hlegalText: 'Responsive multi-page website for a law company built with HTML, SCSS, JavaScript and Vite.',
    webstudioText: 'Modern landing page for a digital agency with clean layout and responsive sections.',
    portfolioText: 'Personal portfolio website created to present my skills, projects and contact information.',
    demo: 'Live Demo',
    contactTitle: 'Contact',
    contactText: 'I am open to junior front-end opportunities, freelance projects and practice tasks.',
    githubProfile: 'GitHub Profile',
    cv: 'Download CV',
statsProjects: 'Projects Completed',
statsCertificate: 'Front-End Certificate',
statsResponsive: 'Responsive Design',
certificatesTitle: 'Certificates',
frontCertificate: 'Front-End Basic',
promptCertificate: 'Prompt Engineering & AI Tools',
certificateSchool: 'Hillel IT School',
credential: 'View Credential',
contactEmail: 'Email',
contactGithub: 'GitHub',
contactLinkedin: 'LinkedIn',
contactLinkedinText: "Let's connect",
footer: '© 2026 Alina Bezsonova • Front-End Developer'
  },
 
  uk: {
    navAbout: 'Про мене',
    navSkills: 'Навички',
    navProjects: 'Проєкти',
    navContact: 'Контакти',
    label: 'Відкрита до freelance та junior вакансій',
    name: 'Привіт, я Аліна Безсонова',
    title: 'Junior Front-End Developer',
    hero: 'Створюю сучасні адаптивні сайти з використанням HTML, CSS, SCSS та JavaScript.',
    buttonProjects: 'Переглянути проєкти',
    aboutTitle: 'Про мене',
    aboutText: 'Я Junior Front-End Developer. Закінчила курс Front-end Basic у Hillel IT School. Створюю чисті, адаптивні та зручні сайти, використовую HTML, CSS, SCSS, JavaScript, Git, GitHub та Vite.',
    skillsTitle: 'Навички',
    responsive: 'Адаптивна верстка',
    projectsTitle: 'Проєкти',
    hlegalText: 'Адаптивний багатосторінковий сайт для юридичної компанії, створений з HTML, SCSS, JavaScript та Vite.',
    webstudioText: 'Сучасний лендинг для digital-агенції з чистою структурою та адаптивними секціями.',
    portfolioText: 'Персональний сайт-портфоліо для презентації моїх навичок, проєктів та контактів.',
    demo: 'Дивитися сайт',
    contactTitle: 'Контакти',
    contactText: 'Я відкрита до junior front-end вакансій, freelance проєктів та практичних завдань.',
    githubProfile: 'Профіль GitHub',
  cv: 'Завантажити CV',
statsProjects: 'Завершені проєкти',
statsCertificate: 'Front-End сертифікат',
statsResponsive: 'Адаптивний дизайн',
certificatesTitle: 'Сертифікати',
frontCertificate: 'Front-End Basic',
promptCertificate: 'Prompt Engineering & AI Tools',
certificateSchool: 'Hillel IT School',
credential: 'Переглянути сертифікат',
contactEmail: 'Email',
contactGithub: 'GitHub',
contactLinkedin: 'LinkedIn',
contactLinkedinText: "Зв'язатися зі мною",
footer: '© 2026 Alina Bezsonova • Front-End Developer'
  },

  hr: {
    navAbout: 'O meni',
    navSkills: 'Vještine',
    navProjects: 'Projekti',
    navContact: 'Kontakt',
    label: 'Dostupna za freelance i junior pozicije',
    name: 'Bok, ja sam Alina Bezsonova',
    title: 'Junior Front-End Developer',
    hero: 'Izrađujem moderne responzivne web stranice koristeći HTML, CSS, SCSS i JavaScript.',
    buttonProjects: 'Pogledaj projekte',
    aboutTitle: 'O meni',
    aboutText: 'Ja sam Junior Front-End Developer. Završila sam tečaj Front-end Basic u Hillel IT School. Izrađujem čiste, responzivne i korisnički jednostavne web stranice koristeći HTML, CSS, SCSS, JavaScript, Git, GitHub i Vite.',
    skillsTitle: 'Vještine',
    responsive: 'Responzivni dizajn',
    projectsTitle: 'Projekti',
    hlegalText: 'Responzivna višestranična web stranica za odvjetničku tvrtku izrađena pomoću HTML-a, SCSS-a, JavaScripta i Vite-a.',
    webstudioText: 'Moderan landing page za digitalnu agenciju s čistim rasporedom i responzivnim sekcijama.',
    portfolioText: 'Osobna portfolio stranica napravljena za prikaz mojih vještina, projekata i kontakt podataka.',
    demo: 'Pogledaj stranicu',
    contactTitle: 'Kontakt',
    contactText: 'Otvorena sam za junior front-end prilike, freelance projekte i praktične zadatke.',
    githubProfile: 'GitHub profil',
    cv: 'Preuzmi CV',
statsProjects: 'Završeni projekti',
statsCertificate: 'Front-End certifikat',
statsResponsive: 'Responzivni dizajn',
certificatesTitle: 'Certifikati',
frontCertificate: 'Front-End Basic',
promptCertificate: 'Prompt Engineering & AI Tools',
certificateSchool: 'Hillel IT School',
credential: 'Pogledaj certifikat',
contactEmail: 'Email',
contactGithub: 'GitHub',
contactLinkedin: 'LinkedIn',
contactLinkedinText: 'Povežimo se',
footer: '© 2026 Alina Bezsonova • Front-End Developer'
  }
};

function changeLanguage(lang) {
  const t = translations[lang];

  document.getElementById('nav-about').textContent = t.navAbout;
  document.getElementById('nav-skills').textContent = t.navSkills;
  document.getElementById('nav-projects').textContent = t.navProjects;
  document.getElementById('nav-contact').textContent = t.navContact;

  document.getElementById('hero-label').textContent = t.label;
  document.getElementById('hero-name').textContent = t.name;
  document.getElementById('job-title').textContent = t.title;
  document.getElementById('hero-text').textContent = t.hero;
  document.getElementById('btn-projects').textContent = t.buttonProjects;

  document.getElementById('about-title').textContent = t.aboutTitle;
  // document.getElementById('about-text').textContent = t.aboutText;

  document.getElementById('skills-title').textContent = t.skillsTitle;
  document.getElementById('skill-responsive').textContent = t.responsive;

  document.getElementById('projects-title').textContent = t.projectsTitle;
  document.getElementById('hlegal-text').textContent = t.hlegalText;
  document.getElementById('webstudio-text').textContent = t.webstudioText;
  document.getElementById('portfolio-text').textContent = t.portfolioText;

  document.getElementById('hlegal-demo').textContent = t.demo;
  document.getElementById('webstudio-demo').textContent = t.demo;
  document.getElementById('portfolio-demo').textContent = t.demo;

  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('btn-cv').textContent = t.cv;

document.getElementById('stat-projects').textContent = t.statsProjects;
document.getElementById('stat-certificate').textContent = t.statsCertificate;
document.getElementById('stat-responsive').textContent = t.statsResponsive;

document.getElementById('certificates-title').textContent = t.certificatesTitle;

document.getElementById('front-certificate-title').textContent = t.frontCertificate;
document.getElementById('prompt-certificate-title').textContent = t.promptCertificate;

document.getElementById('contact-email-title').textContent = t.contactEmail;
document.getElementById('contact-github-title').textContent = t.contactGithub;
document.getElementById('contact-linkedin-title').textContent = t.contactLinkedin;

document.getElementById('contact-linkedin-text').textContent = t.contactLinkedinText;

document.getElementById('footer-text').textContent = t.footer;
document.getElementById('front-credential').textContent = t.credential;
document.getElementById('prompt-credential').textContent = t.credential;
 
}
 


document.querySelectorAll('.lang-switcher button').forEach((button) => {
  button.addEventListener('click', () => {
    const lang = button.id;

    changeLanguage(lang);

    document.querySelectorAll('.lang-switcher button').forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  });
});

changeLanguage('en');
document.getElementById('en').classList.add('active');

