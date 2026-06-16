(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/portfolio/assets/avatar-Dg-l7Ezx.png`,t=`/portfolio/assets/hlegal.png-KLhhl4rg.png`,n=`/portfolio/assets/web-new.png-Gjb4CA1E.png`,r=`/portfolio/assets/hero%201-DyHo86Lz.png`,i=`/portfolio/assets/frontend-certificate-DuOfI1on.png`,a=`/portfolio/assets/prompt-certificate-DYR_fjxZ.png`,o=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='%23ffffff'%3e%3cpath%20d='M12%202C6.48%202%202%206.58%202%2012.25c0%204.54%202.87%208.39%206.84%209.75.5.1.68-.22.68-.49%200-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63%201%20.07%201.53%201.05%201.53%201.05.89%201.57%202.34%201.12%202.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08%200-1.12.39-2.03%201.03-2.75-.1-.26-.45-1.31.1-2.73%200%200%20.84-.28%202.75%201.05A9.3%209.3%200%200%201%2012%206.84c.85%200%201.7.12%202.5.35%201.9-1.33%202.74-1.05%202.74-1.05.56%201.42.21%202.47.11%202.73.64.72%201.03%201.63%201.03%202.75%200%203.95-2.34%204.81-4.57%205.07.36.32.68.95.68%201.91%200%201.38-.01%202.49-.01%202.83%200%20.27.18.59.69.49A10.26%2010.26%200%200%200%2022%2012.25C22%206.58%2017.52%202%2012%202z'/%3e%3c/svg%3e`,s=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='%230A66C2'%3e%3cpath%20d='M4.98%203.5C4.98%204.88%203.87%206%202.49%206S0%204.88%200%203.5%201.11%201%202.49%201s2.49%201.12%202.49%202.5zM.5%208h4v13h-4V8zm7%200h3.8v1.8h.05c.53-1%201.82-2.05%203.75-2.05%204.01%200%204.75%202.64%204.75%206.08V21h-4v-6.4c0-1.53-.03-3.49-2.13-3.49-2.13%200-2.46%201.66-2.46%203.38V21h-4V8z'/%3e%3c/svg%3e`,c=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='%2360a5fa'%3e%3cpath%20d='M2%204h20a2%202%200%200%201%202%202v12a2%202%200%200%201-2%202H2a2%202%200%200%201-2-2V6a2%202%200%200%201%202-2zm10%207L2%206.5V18h20V6.5L12%2011z'/%3e%3c/svg%3e`;document.querySelector(`#app`).innerHTML=`
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

   <a href="./cv.pdf" target="_blank" class="btn btn-secondary" id="btn-cv">
    Download CV
  </a>
</div>      
      
      <p class="hero-status">
  📍 Zagreb, Croatia • Available for freelance projects
</p>
</div>
      <div class="hero-photo">
        <img src="${e}" alt="Alina Bezsonova" />
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
  <img src="${i}" alt="Front-End Basic Certificate">
</div>

     <h4 id="front-certificate-title">Front-End Basic</h4>

      <p>Hillel IT School</p>

      <a
       id="front-credential"
  href="./certificates/frontend-basic.pdf"
  target="_blank"
  class="certificate-btn"
>
        View Credential
      </a>
    </article>

    <article class="certificate-card">
     <div class="certificate-preview">
  <img
    src="${a}"
    alt="Prompt Engineering Certificate"
  >
</div>

     <h4 id="prompt-certificate-title">Prompt Engineering & AI Tools</h4>

      <p>Hillel IT School</p>

     <a
    id="prompt-credential"
 href="./certificates/prompt-engineering.pdf"
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
  <img src="${t}" alt="Hlegal" class="project-image">

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
  <img src="${n}" alt="WebStudio" class="project-image">

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
  <img src="${r}" alt="Portfolio" class="project-image">

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
  <img src="${c}" alt="Email" class="contact-icon">

 <h4 id="contact-email-title">Email</h4>
  <p>alina.bessonova83@gmail.com</p>
</a>

   <a
  href="https://github.com/BALINA83"
  target="_blank"
  class="contact-card"
>
  <img src="${o}" alt="GitHub" class="contact-icon">

 <h4 id="contact-github-title">GitHub</h4>
  <p>BALINA83</p>
</a>

  <a
  href="https://www.linkedin.com/"
  target="_blank"
  class="contact-card"
>
  <img src="${s}" alt="LinkedIn" class="contact-icon">

 <h4 id="contact-linkedin-title">LinkedIn</h4>
 <p id="contact-linkedin-text">Let's connect</p>
</a> 

  </div>
</section>
<footer class="footer">
  <p id="footer-text">© 2026 Alina Bezsonova • Front-End Developer</p>
</footer>
</main>
`;var l={en:{navAbout:`About`,navSkills:`Skills`,navProjects:`Projects`,navContact:`Contact`,label:`Available for freelance & junior roles`,name:`Hi, I'm Alina Bezsonova`,title:`Junior Front-End Developer`,hero:`I create modern, responsive websites using HTML, CSS, SCSS and JavaScript.`,buttonProjects:`View projects`,aboutTitle:`About me`,aboutText:`I am a Junior Front-End Developer who completed the Front-end Basic course at Hillel IT School. I build clean, responsive and user-friendly websites using HTML, CSS, SCSS, JavaScript, Git, GitHub and Vite.`,skillsTitle:`Skills`,responsive:`Responsive Design`,projectsTitle:`Projects`,hlegalText:`Responsive multi-page website for a law company built with HTML, SCSS, JavaScript and Vite.`,webstudioText:`Modern landing page for a digital agency with clean layout and responsive sections.`,portfolioText:`Personal portfolio website created to present my skills, projects and contact information.`,demo:`Live Demo`,contactTitle:`Contact`,contactText:`I am open to junior front-end opportunities, freelance projects and practice tasks.`,githubProfile:`GitHub Profile`,cv:`Download CV`,statsProjects:`Projects Completed`,statsCertificate:`Front-End Certificate`,statsResponsive:`Responsive Design`,certificatesTitle:`Certificates`,frontCertificate:`Front-End Basic`,promptCertificate:`Prompt Engineering & AI Tools`,certificateSchool:`Hillel IT School`,credential:`View Credential`,contactEmail:`Email`,contactGithub:`GitHub`,contactLinkedin:`LinkedIn`,contactLinkedinText:`Let's connect`,footer:`© 2026 Alina Bezsonova • Front-End Developer`},uk:{navAbout:`Про мене`,navSkills:`Навички`,navProjects:`Проєкти`,navContact:`Контакти`,label:`Відкрита до freelance та junior вакансій`,name:`Привіт, я Аліна Безсонова`,title:`Junior Front-End Developer`,hero:`Створюю сучасні адаптивні сайти з використанням HTML, CSS, SCSS та JavaScript.`,buttonProjects:`Переглянути проєкти`,aboutTitle:`Про мене`,aboutText:`Я Junior Front-End Developer. Закінчила курс Front-end Basic у Hillel IT School. Створюю чисті, адаптивні та зручні сайти, використовую HTML, CSS, SCSS, JavaScript, Git, GitHub та Vite.`,skillsTitle:`Навички`,responsive:`Адаптивна верстка`,projectsTitle:`Проєкти`,hlegalText:`Адаптивний багатосторінковий сайт для юридичної компанії, створений з HTML, SCSS, JavaScript та Vite.`,webstudioText:`Сучасний лендинг для digital-агенції з чистою структурою та адаптивними секціями.`,portfolioText:`Персональний сайт-портфоліо для презентації моїх навичок, проєктів та контактів.`,demo:`Дивитися сайт`,contactTitle:`Контакти`,contactText:`Я відкрита до junior front-end вакансій, freelance проєктів та практичних завдань.`,githubProfile:`Профіль GitHub`,cv:`Завантажити CV`,statsProjects:`Завершені проєкти`,statsCertificate:`Front-End сертифікат`,statsResponsive:`Адаптивний дизайн`,certificatesTitle:`Сертифікати`,frontCertificate:`Front-End Basic`,promptCertificate:`Prompt Engineering & AI Tools`,certificateSchool:`Hillel IT School`,credential:`Переглянути сертифікат`,contactEmail:`Email`,contactGithub:`GitHub`,contactLinkedin:`LinkedIn`,contactLinkedinText:`Зв'язатися зі мною`,footer:`© 2026 Alina Bezsonova • Front-End Developer`},hr:{navAbout:`O meni`,navSkills:`Vještine`,navProjects:`Projekti`,navContact:`Kontakt`,label:`Dostupna za freelance i junior pozicije`,name:`Bok, ja sam Alina Bezsonova`,title:`Junior Front-End Developer`,hero:`Izrađujem moderne responzivne web stranice koristeći HTML, CSS, SCSS i JavaScript.`,buttonProjects:`Pogledaj projekte`,aboutTitle:`O meni`,aboutText:`Ja sam Junior Front-End Developer. Završila sam tečaj Front-end Basic u Hillel IT School. Izrađujem čiste, responzivne i korisnički jednostavne web stranice koristeći HTML, CSS, SCSS, JavaScript, Git, GitHub i Vite.`,skillsTitle:`Vještine`,responsive:`Responzivni dizajn`,projectsTitle:`Projekti`,hlegalText:`Responzivna višestranična web stranica za odvjetničku tvrtku izrađena pomoću HTML-a, SCSS-a, JavaScripta i Vite-a.`,webstudioText:`Moderan landing page za digitalnu agenciju s čistim rasporedom i responzivnim sekcijama.`,portfolioText:`Osobna portfolio stranica napravljena za prikaz mojih vještina, projekata i kontakt podataka.`,demo:`Pogledaj stranicu`,contactTitle:`Kontakt`,contactText:`Otvorena sam za junior front-end prilike, freelance projekte i praktične zadatke.`,githubProfile:`GitHub profil`,cv:`Preuzmi CV`,statsProjects:`Završeni projekti`,statsCertificate:`Front-End certifikat`,statsResponsive:`Responzivni dizajn`,certificatesTitle:`Certifikati`,frontCertificate:`Front-End Basic`,promptCertificate:`Prompt Engineering & AI Tools`,certificateSchool:`Hillel IT School`,credential:`Pogledaj certifikat`,contactEmail:`Email`,contactGithub:`GitHub`,contactLinkedin:`LinkedIn`,contactLinkedinText:`Povežimo se`,footer:`© 2026 Alina Bezsonova • Front-End Developer`}};function u(e){let t=l[e];document.getElementById(`nav-about`).textContent=t.navAbout,document.getElementById(`nav-skills`).textContent=t.navSkills,document.getElementById(`nav-projects`).textContent=t.navProjects,document.getElementById(`nav-contact`).textContent=t.navContact,document.getElementById(`hero-label`).textContent=t.label,document.getElementById(`hero-name`).textContent=t.name,document.getElementById(`job-title`).textContent=t.title,document.getElementById(`hero-text`).textContent=t.hero,document.getElementById(`btn-projects`).textContent=t.buttonProjects,document.getElementById(`about-title`).textContent=t.aboutTitle,document.getElementById(`skills-title`).textContent=t.skillsTitle,document.getElementById(`skill-responsive`).textContent=t.responsive,document.getElementById(`projects-title`).textContent=t.projectsTitle,document.getElementById(`hlegal-text`).textContent=t.hlegalText,document.getElementById(`webstudio-text`).textContent=t.webstudioText,document.getElementById(`portfolio-text`).textContent=t.portfolioText,document.getElementById(`hlegal-demo`).textContent=t.demo,document.getElementById(`webstudio-demo`).textContent=t.demo,document.getElementById(`portfolio-demo`).textContent=t.demo,document.getElementById(`contact-title`).textContent=t.contactTitle,document.getElementById(`btn-cv`).textContent=t.cv,document.getElementById(`stat-projects`).textContent=t.statsProjects,document.getElementById(`stat-certificate`).textContent=t.statsCertificate,document.getElementById(`stat-responsive`).textContent=t.statsResponsive,document.getElementById(`certificates-title`).textContent=t.certificatesTitle,document.getElementById(`front-certificate-title`).textContent=t.frontCertificate,document.getElementById(`prompt-certificate-title`).textContent=t.promptCertificate,document.getElementById(`contact-email-title`).textContent=t.contactEmail,document.getElementById(`contact-github-title`).textContent=t.contactGithub,document.getElementById(`contact-linkedin-title`).textContent=t.contactLinkedin,document.getElementById(`contact-linkedin-text`).textContent=t.contactLinkedinText,document.getElementById(`footer-text`).textContent=t.footer,document.getElementById(`front-credential`).textContent=t.credential,document.getElementById(`prompt-credential`).textContent=t.credential}document.querySelectorAll(`.lang-switcher button`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.id;u(t),document.querySelectorAll(`.lang-switcher button`).forEach(e=>{e.classList.remove(`active`)}),e.classList.add(`active`)})}),u(`en`),document.getElementById(`en`).classList.add(`active`);