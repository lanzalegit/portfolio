// ╔══════════════════════════════════════════════════════════════════════╗
// ║  CONTENT — Edit this section to update the site.                    ║
// ║  All text for English (en) and Spanish (es) lives here.             ║
// ║  The layout, styling, and logic never need to change for updates.   ║
// ╚══════════════════════════════════════════════════════════════════════╝

const CONTENT = {
  en: {
    nav: {
      about:      "About",
      experience: "Experience",
      skills:     "Skills",
      contact:    "Contact",
    },
    hero: {
      greeting:    "Hi, I'm",
      title:       "Solutions Architect",
      subtitle:    "Platform and Solutions Architect specialized in Enterprise Systems integration and API ecosystems — leading modernization initiatives, delivering scalable and resilient solutions, and driving API-led connectivity across the enterprise.",
      cta:         "Get in touch",
      ctaSecondary:"See my work",
    },
    about: {
      heading: "About Me",
      p1: "With over 12 years in enterprise software and integration, I've grown from junior developer to Associate Director — leading cross-functional teams across the pharmaceutical and technology sectors in Europe.",
      p2: "I combine deep technical knowledge with strong business acumen. I'm equally comfortable discussing API architecture and cloud platforms with engineers, or presenting integration strategy and ROI to C-level stakeholders.",
      p3: "Based in Prague, Czech Republic, I'm open to consulting engagements, short-term projects, and advisory roles in integration architecture, API management, and enterprise automation.",
      years: "Years of Experience",
      bots:  "RPA Bots Deployed",
      team:  "Team Members Led",
      certs: "Certifications",
    },
    experience: {
      heading: "Experience",
      jobs: [
        {
          dates:   "February 2023 – Present",
          role:    "Associate Director, Integration Solutions Architect",
          company: "MSD Czech Republic s.r.o. · Systems Integration (CTO)",
          bullets: [
            "Platform Architect responsible for Systems Integration platforms: MuleSoft (RTF & CH 2.0), API Management (Kong), and MFT (OpenText).",
            "Designed reliable, resilient, scalable, business-critical solutions across company divisions.",
			"Established AI Gateway standards, usage and federation in Kong product",
            "Collaborated closely with stakeholders to optimize service consumption and elevate the overall customer journey experience.",
            "Decentralized the System Integration Product Line by implementing a Federated Model, empowering teams and improving platform agility.",
            "Ensured platform compliance with industry regulations including SoX and GxP.",
            "Championed API-led connectivity across internal functions, driving awareness and adoption of modern integration practices.",
          ],
        },
        {
          dates:   "February 2021 – January 2023",
          role:    "Associate Director, Integration & Process Automation Lead",
          company: "Organon CZ s.r.o. (MSD CZ spin-off) · Integration and Process Automation",
          bullets: [
            "Produced architecture and solution designs for major projects involving Veeva Vault, SAP S4, Coupa, ServiceNow, Workday, and Qlik.",
            "Led a team of 19 contractors — architects, analysts, and developers — using DevOps/Agile methodology.",
            "Deployed 35+ RPA bots within two years, generating millions of dollars in savings and revenue for the company.",
            "Defined and maintained roadmaps, capabilities, standards, and governance for integration and automation initiatives.",
            "Built and nurtured relationships with technology partners for licensing and external labor, including negotiations, evaluations, and candidate interviews.",
            "Served as reference contact for stakeholders, educating business users on platform capabilities.",
            "Stayed current with market trends through self-training, courses, and global conferences.",
          ],
        },
        {
          dates:   "June 2015 – January 2021",
          role:    "Senior Integration Developer",
          company: "MSD Czech Republic s.r.o. · Application Integration and Streaming Analytics",
          bullets: [
            "Developed APIs and synchronous jobs using TIBCO BusinessWorks 5.x / 6.x; integrated systems via REST, SOAP, and FTP.",
            "Applied CI/CD practices with Git, Jenkins, Maven, Artifactory, SoapUI, and Groovy scripts.",
            "Integrated cloud platforms including Salesforce, Veeva Vault, SAP, AWS, SecureWorks, ThreatConnect, and Archer.",
            "Built streaming applications using TIBCO Streambase for real-time data transformation and analytics.",
            "Created a Java EE application to automate TIBCO BW5 deployments via background Linux scripts.",
          ],
        },
        {
          dates:   "December 2013 – May 2015",
          role:    "Junior Developer",
          company: "Sciamus s.r.o. · Software Development",
          bullets: [
            "Introduction to the TIBCO product suite, with a focus on TIBCO BusinessEvents and BusinessWorks 5.x.",
          ],
        },
        {
          dates:   "October 2012 – June 2013",
          role:    "Junior Developer",
          company: "Idealogic · Software Consultancy",
          bullets: [
            "Code support and development of ASP.NET libraries using C#, jQuery, JavaScript, and Oracle 11.2.0.",
            "Produced UML diagrams for system documentation.",
          ],
        },
      ],
    },
    skills: {
      heading:          "Skills & Certifications",
      techHeading:      "Technical",
      platformsHeading: "Platforms & Tools",
      softHeading:      "Soft Skills",
      certsHeading:     "Certifications",
      technical: [
        "REST APIs", "SOAP", "API Management", "MuleSoft", "TIBCO BW 5.x / 6.x",
        "SAP BTP", "RPA / Process Automation", "CI/CD", "DevOps", "Agile / Scrum",
        "Java EE", "C#", "JavaScript", "SQL / Oracle", "Streaming Analytics",
      ],
      platforms: [
        "MuleSoft Anypoint", "Kong API Gateway", "SAP S4 / BTP", "Salesforce",
        "Veeva Vault", "ServiceNow", "Workday", "Coupa", "AWS", "Git",
        "Jenkins", "Maven", "Artifactory", "TIBCO Streambase",
      ],
      soft: [
        "Technical Leadership", "Stakeholder Management", "Team Building",
        "Strategic Planning", "Vendor Management", "Cross-cultural Communication",
        "Public Speaking", "Mentoring",
      ],
      certs: [
        { abbr: "AWS",   name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
        { abbr: "MULE",  name: "Anypoint Platform Architecture: Integration Solutions", issuer: "Salesforce / MuleSoft" },
        { abbr: "TIBCO", name: "TIBCO BW 6.x Certified Professional", issuer: "TIBCO Software" },
      ],
    },
    education: {
      heading: "Education",
      degree:  "Software Engineering (Master's equivalent)  ·  2006 – 2013",
      school:  "University of Seville, Spain",
      note:    "Erasmus exchange: School of Banking and Management, Kraków (1 year)",
    },
    contact: {
      heading:  "Get in Touch",
      subtitle: "Have a project in mind or want to explore how we could work together? Drop me a message.",
      name:     "Name",
      email:    "Email",
      message:  "Message",
      send:     "Send Message",
      sending:  "Sending…",
      success:  "Message sent! I'll get back to you as soon as possible.",
      error:    "Something went wrong. Please try again or email me directly at leonardolanza10@gmail.com.",
    },
    footer: { rights: "All rights reserved." },
  },

  // ─────────────────────────────────────────────────────────────
  es: {
    nav: {
      about:      "Sobre mí",
      experience: "Experiencia",
      skills:     "Habilidades",
      contact:    "Contacto",
    },
    hero: {
      greeting:    "Hola, soy",
      title:       "Arquitecto de Soluciones",
      subtitle:    "Arquitecto de Plataformas y Soluciones especializado en integración de sistemas empresariales y ecosistemas API — liderando iniciativas de modernización, entregando soluciones escalables y resilientes, e impulsando la conectividad basada en APIs.",
      cta:         "Contáctame",
      ctaSecondary:"Ver mi trayectoria",
    },
    about: {
      heading: "Sobre mí",
      p1: "Con más de 12 años en software empresarial e integración, he crecido desde desarrollador junior hasta Director Asociado, liderando equipos multifuncionales en los sectores farmacéutico y tecnológico en Europa.",
      p2: "Combino un profundo conocimiento técnico con una sólida visión de negocio. Me siento igual de cómodo discutiendo arquitectura de APIs y plataformas cloud con ingenieros, que presentando estrategias de integración y ROI a directivos de alto nivel.",
      p3: "Basado en Praga, República Checa, estoy abierto a consultorías, proyectos de corta duración y roles de asesoramiento en arquitectura de integración, gestión de APIs y automatización empresarial.",
      years: "Años de Experiencia",
      bots:  "Bots RPA Desplegados",
      team:  "Miembros del Equipo",
      certs: "Certificaciones",
    },
    experience: {
      heading: "Experiencia",
      jobs: [
        {
          dates:   "Febrero 2023 – Presente",
          role:    "Director Asociado, Arquitecto de Soluciones de Integración",
          company: "MSD Czech Republic s.r.o. · Integración de Sistemas (CTO)",
          bullets: [
            "Arquitecto de Plataforma responsable de las plataformas de integración de sistemas: MuleSoft (RTF y CH 2.0), gestión de APIs (Kong) y MFT (OpenText).",
            "Diseño de soluciones fiables, resilientes, escalables y críticas para las distintas divisiones.",
			"Establecimiento de estándares, buenas prácticas y decentralización de funcionalidades para la AI Gateway en Kong.",
            "Colaboración estrecha con stakeholders para optimizar el consumo de servicios y elevar la experiencia del cliente.",
            "Descentralización de la Línea de Producto de Integración mediante un Modelo Federado, empoderando equipos y mejorando la agilidad de la plataforma.",
            "Garantía del cumplimiento de la plataforma con regulaciones como SoX y GxP.",
            "Impulsor de la conectividad basada en APIs en funciones internas, promoviendo la adopción de prácticas modernas de integración.",
          ],
        },
        {
          dates:   "Febrero 2021 – Enero 2023",
          role:    "Director Asociado, Líder de Integración y Automatización de Procesos",
          company: "Organon CZ s.r.o. (spin-off de MSD CZ) · Integración y Automatización de Procesos",
          bullets: [
            "Diseño de arquitectura y soluciones para proyectos con Veeva Vault, SAP S4, Coupa, ServiceNow, Workday y Qlik.",
            "Lideré un equipo de 19 contratistas — arquitectos, analistas y desarrolladores — usando metodología DevOps/Ágil.",
            "Más de 35 bots RPA desplegados en dos años, generando millones de dólares en ahorros e ingresos para la empresa.",
            "Definición y mantenimiento de hojas de ruta, capacidades, estándares y gobernanza para iniciativas de integración y automatización.",
            "Construcción y gestión de relaciones con socios tecnológicos para licencias y trabajo externo, incluyendo negociaciones, evaluaciones y entrevistas de candidatos.",
            "Referente para stakeholders, formando a usuarios de negocio sobre las capacidades de las plataformas.",
            "Actualización continua sobre tendencias del mercado mediante autoformación, cursos y conferencias globales.",
          ],
        },
        {
          dates:   "Junio 2015 – Enero 2021",
          role:    "Desarrollador Senior de Integración",
          company: "MSD Czech Republic s.r.o. · Integración de Aplicaciones y Analítica de Streaming",
          bullets: [
            "Desarrollo de APIs y jobs síncronos con TIBCO BusinessWorks 5.x / 6.x; integración de sistemas vía REST, SOAP y FTP.",
            "Aplicación de CI/CD con Git, Jenkins, Maven, Artifactory, SoapUI y scripts Groovy.",
            "Integración de plataformas cloud: Salesforce, Veeva Vault, SAP, AWS, SecureWorks, ThreatConnect y Archer.",
            "Desarrollo de aplicaciones de streaming con TIBCO Streambase para transformación y analítica de datos en tiempo real.",
            "Creación de una aplicación Java EE para automatizar despliegues de TIBCO BW5 con scripts Linux en segundo plano.",
          ],
        },
        {
          dates:   "Diciembre 2013 – Mayo 2015",
          role:    "Desarrollador Junior",
          company: "Sciamus s.r.o. · Desarrollo de Software",
          bullets: [
            "Introducción al conjunto de productos TIBCO, con foco en TIBCO BusinessEvents y BusinessWorks 5.x.",
          ],
        },
        {
          dates:   "Octubre 2012 – Junio 2013",
          role:    "Desarrollador Junior",
          company: "Idealogic · Consultoría de Software",
          bullets: [
            "Soporte y desarrollo de librerías ASP.NET con C#, jQuery, JavaScript y Oracle 11.2.0.",
            "Elaboración de diagramas UML para documentación de sistemas.",
          ],
        },
      ],
    },
    skills: {
      heading:          "Habilidades y Certificaciones",
      techHeading:      "Técnicas",
      platformsHeading: "Plataformas y Herramientas",
      softHeading:      "Habilidades Blandas",
      certsHeading:     "Certificaciones",
      technical: [
        "APIs REST", "SOAP", "Gestión de APIs", "MuleSoft", "TIBCO BW 5.x / 6.x",
        "SAP BTP", "RPA / Automatización de Procesos", "CI/CD", "DevOps", "Agile / Scrum",
        "Java EE", "C#", "JavaScript", "SQL / Oracle", "Analítica de Streaming",
      ],
      platforms: [
        "MuleSoft Anypoint", "Kong API Gateway", "SAP S4 / BTP", "Salesforce",
        "Veeva Vault", "ServiceNow", "Workday", "Coupa", "AWS", "Git",
        "Jenkins", "Maven", "Artifactory", "TIBCO Streambase",
      ],
      soft: [
        "Liderazgo Técnico", "Gestión de Stakeholders", "Construcción de Equipos",
        "Planificación Estratégica", "Gestión de Proveedores", "Comunicación Intercultural",
        "Presentaciones Públicas", "Mentoría",
      ],
      certs: [
        { abbr: "AWS",   name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
        { abbr: "MULE",  name: "Anypoint Platform Architecture: Integration Solutions", issuer: "Salesforce / MuleSoft" },
        { abbr: "TIBCO", name: "TIBCO BW 6.x Certified Professional", issuer: "TIBCO Software" },
      ],
    },
    education: {
      heading: "Educación",
      degree:  "Ingeniería de Software (equivalente a Máster)  ·  2006 – 2013",
      school:  "Universidad de Sevilla, España",
      note:    "Intercambio Erasmus: School of Banking and Management, Cracovia (1 año)",
    },
    contact: {
      heading:  "Contáctame",
      subtitle: "¿Tienes un proyecto en mente o quieres explorar cómo podríamos trabajar juntos? Escríbeme.",
      name:     "Nombre",
      email:    "Correo electrónico",
      message:  "Mensaje",
      send:     "Enviar mensaje",
      sending:  "Enviando…",
      success:  "¡Mensaje enviado! Me pondré en contacto contigo lo antes posible.",
      error:    "Algo salió mal. Por favor inténtalo de nuevo o escríbeme a leonardolanza10@gmail.com.",
    },
    footer: { rights: "Todos los derechos reservados." },
  },
};

// ╔══════════════════════════════════════════════════════════════════════╗
// ║  SOCIAL LINKS — Replace with your actual profile URLs               ║
// ╚══════════════════════════════════════════════════════════════════════╝
const LINKS = {
  github:   "https://github.com/lanzalegit",       // ← replace
  linkedin: "www.linkedin.com/in/leonardo-lanzab",   // ← replace
};

// ══════════════════════════════════════════════════════════════════════
//  APP LOGIC — No need to edit anything below this line for content
// ══════════════════════════════════════════════════════════════════════

let currentLang = localStorage.getItem("ll-lang") || "en";

// ── Render all content for the given language ────────────────────────
function applyContent(lang) {
  const c = CONTENT[lang];

  // Simple text nodes via data-i18n="section.key"
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys  = el.getAttribute("data-i18n").split(".");
    const value = keys.reduce((obj, k) => obj?.[k], c);
    if (value !== undefined) el.textContent = value;
  });

  // Toggle button label and html lang attribute
  document.getElementById("langLabel").textContent = lang === "en" ? "ES" : "EN";
  document.documentElement.lang = lang;

  // ── Timeline ──────────────────────────────────────────────────────
  document.getElementById("timeline").innerHTML = c.experience.jobs.map(job => `
    <div class="timeline-item">
      <div class="timeline-card">
        <div class="timeline-dates">${job.dates}</div>
        <div class="timeline-role">${job.role}</div>
        <div class="timeline-company">${job.company}</div>
        <ul class="timeline-bullets">
          ${job.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");

  // ── Skill tags ────────────────────────────────────────────────────
  const renderTags = (id, arr) => {
    document.getElementById(id).innerHTML = arr.map(t => `<span class="tag">${t}</span>`).join("");
  };
  renderTags("techTags",     c.skills.technical);
  renderTags("platformTags", c.skills.platforms);
  renderTags("softTags",     c.skills.soft);

  // ── Certification cards ───────────────────────────────────────────
  document.getElementById("certsGrid").innerHTML = c.skills.certs.map(cert => `
    <div class="cert-card">
      <div class="cert-icon">${cert.abbr}</div>
      <div>
        <div class="cert-name">${cert.name}</div>
        <div class="cert-issuer">${cert.issuer}</div>
      </div>
    </div>
  `).join("");
}

// ── Wire up all social / footer links ───────────────────────────────
function applyLinks() {
  const set = (id, href) => { const el = document.getElementById(id); if (el) el.href = href; };
  set("githubLink",    LINKS.github);
  set("linkedinLink",  LINKS.linkedin);
  set("footerGithub",  LINKS.github);
  set("footerLinkedin",LINKS.linkedin);
}

// ── Photo fallback (shows LL initials if assets/photo.jpg is missing) ─
document.getElementById("heroPhoto").addEventListener("error", function () {
  this.parentNode.innerHTML = '<div class="photo-placeholder">LL</div>';
});

// ── Language toggle ──────────────────────────────────────────────────
document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  localStorage.setItem("ll-lang", currentLang);
  applyContent(currentLang);
  if (currentMode === 'agent') {
    document.getElementById('agentView').innerHTML = buildAgentHtml(currentLang);
  }
});

// ── Mobile hamburger menu ────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ── Cloudflare Turnstile callback — enables submit button ─────────────
window.onTurnstileSuccess = function () {
  document.getElementById("submitBtn").disabled = false;
};

// ── Contact form submission via Web3Forms ────────────────────────────
document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();
  const btn    = document.getElementById("submitBtn");
  const status = document.getElementById("formStatus");
  const c      = CONTENT[currentLang].contact;

  btn.disabled = true;
  btn.querySelector("span").textContent = c.sending;
  status.className = "form-status";

  try {
    const res  = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body:   new FormData(e.target),
    });
    const json = await res.json();

    if (json.success) {
      status.textContent = c.success;
      status.className   = "form-status success";
      e.target.reset();
      // Re-render Turnstile so the button goes back to disabled until re-verified
      if (window.turnstile) {
        window.turnstile.reset();
        btn.disabled = true;
      }
    } else {
      throw new Error(json.message || "submission failed");
    }
  } catch {
    status.textContent = c.error;
    status.className   = "form-status error";
    btn.disabled       = false;
    btn.querySelector("span").textContent = c.send;
  }
});

// ── Footer dynamic year ───────────────────────────────────────────────
document.getElementById("footerYear").textContent = new Date().getFullYear();

// ── Agent view builder ────────────────────────────────────────────────
function buildAgentHtml(lang) {
  const c = CONTENT[lang];
  const S = '<span class="av-sep">' + '─'.repeat(62) + '</span>';

  const jobs = c.experience.jobs.map((job, i) => {
    const [company, team] = job.company.split(' · ');
    const bullets = job.bullets.map(b =>
      `  <span class="av-bullet">•</span> ${b}`
    ).join('\n');
    return `<span class="av-num">[${i + 1}/${c.experience.jobs.length}]</span> <span class="av-white">${job.role}</span>
    <span class="av-key">company</span> : <span class="av-val">${company}</span>${team ? `\n    <span class="av-key">team   </span> : <span class="av-val">${team}</span>` : ''}
    <span class="av-key">period </span> : <span class="av-val">${job.dates}</span>
    <span class="av-key">highlights</span>:
${bullets}`;
  }).join('\n\n');

  const certs = c.skills.certs.map(cert =>
    `  <span class="av-check">[✓]</span> <span class="av-white">${cert.name}</span>  <span class="av-dim">(${cert.issuer})</span>`
  ).join('\n');

  return `<div class="av-bar">
    <span class="av-badge">AGENTIC MODE</span>
    <span class="av-desc">Structured profile · optimised for AI agents and automated systems</span>
    <button class="av-copy" id="avCopy">Copy plain text</button>
  </div>
  <div class="av-content">${S}
  <span class="av-heading">AGENT-READABLE PROFILE</span>  ·  <span class="av-white">Leonardo Lanza</span>
${S}

<span class="av-section"># IDENTITY</span>
<span class="av-key">name    </span> : <span class="av-val">Leonardo Lanza</span>
<span class="av-key">role    </span> : <span class="av-val">${c.hero.title}</span>
<span class="av-key">location</span> : <span class="av-val">Prague, Czech Republic</span>
<span class="av-key">email   </span> : <span class="av-val">leonardolanza10@gmail.com</span>
<span class="av-key">linkedin</span> : <a class="av-link" href="${LINKS.linkedin}" target="_blank" rel="noopener">${LINKS.linkedin}</a>
<span class="av-key">github  </span> : <a class="av-link" href="${LINKS.github}" target="_blank" rel="noopener">${LINKS.github}</a>

<span class="av-key">available_for</span>:
  <span class="av-bullet">•</span> Consulting engagements
  <span class="av-bullet">•</span> Short-term projects
  <span class="av-bullet">•</span> Advisory roles — integration architecture, API management, enterprise automation

<span class="av-section"># SUMMARY</span>${c.hero.subtitle}

${S}

<span class="av-section"># EXPERIENCE  <span class="av-dim">(${c.experience.jobs.length} positions · 12+ years)</span></span>
${jobs}

${S}

<span class="av-section"># SKILLS</span>
<span class="av-key">technical </span>: <span class="av-val">${c.skills.technical.join(' · ')}</span>
<span class="av-key">platforms </span>: <span class="av-val">${c.skills.platforms.join(' · ')}</span>
<span class="av-key">soft      </span>: <span class="av-val">${c.skills.soft.join(' · ')}</span>

<span class="av-section"># CERTIFICATIONS</span>
${certs}

<span class="av-section"># EDUCATION</span>
  <span class="av-white">${c.education.degree}</span>
  <span class="av-val">${c.education.school}</span>
  <span class="av-dim">${c.education.note}</span>

${S}

<span class="av-section"># CONTACT</span>
  <span class="av-dim">To send a message → switch to Human mode and use the contact form.</span>
  <span class="av-key">email   </span>: <span class="av-val">leonardolanza10@gmail.com</span>
  <span class="av-key">linkedin</span>: <a class="av-link" href="${LINKS.linkedin}" target="_blank" rel="noopener">${LINKS.linkedin}</a>

${S}
  <span class="av-dim">Switch to Human mode via the nav toggle for the full interactive experience.</span>
${S}</div>`;
}

function buildAgentText(lang) {
  const c = CONTENT[lang];
  const S = '─'.repeat(62);
  const jobs = c.experience.jobs.map((job, i) => {
    const [company, team] = job.company.split(' · ');
    return `[${i + 1}/${c.experience.jobs.length}] ${job.role}
    company  : ${company}${team ? '\n    team     : ' + team : ''}
    period   : ${job.dates}
    highlights:
${job.bullets.map(b => '      • ' + b).join('\n')}`;
  }).join('\n\n');

  return `${S}
  AGENT-READABLE PROFILE  ·  Leonardo Lanza
${S}

# IDENTITY
name     : Leonardo Lanza
role     : ${c.hero.title}
location : Prague, Czech Republic
email    : leonardolanza10@gmail.com
linkedin : ${LINKS.linkedin}
github   : ${LINKS.github}

available_for:
  • Consulting engagements
  • Short-term projects
  • Advisory roles — integration architecture, API management, enterprise automation

# SUMMARY
${c.hero.subtitle}

${S}

# EXPERIENCE  (${c.experience.jobs.length} positions · 12+ years)

${jobs}

${S}

# SKILLS
technical : ${c.skills.technical.join(' · ')}
platforms : ${c.skills.platforms.join(' · ')}
soft      : ${c.skills.soft.join(' · ')}

# CERTIFICATIONS
${c.skills.certs.map(cert => `  [✓] ${cert.name}  (${cert.issuer})`).join('\n')}

# EDUCATION
  ${c.education.degree}
  ${c.education.school}
  ${c.education.note}

${S}

# CONTACT
  To send a message → switch to Human mode and use the contact form.
  email    : leonardolanza10@gmail.com
  linkedin : ${LINKS.linkedin}

${S}
  Switch to Human mode via the nav toggle for the full interactive experience.
${S}`;
}

// ── Mode toggle (Human / Agentic) ─────────────────────────────────────
let currentMode = localStorage.getItem('ll-mode') || 'human';

function applyMode(mode) {
  currentMode = mode;
  localStorage.setItem('ll-mode', mode);
  document.body.classList.toggle('agent-mode', mode === 'agent');
  document.getElementById('humanBtn').classList.toggle('mode-active', mode === 'human');
  document.getElementById('agentBtn').classList.toggle('mode-active', mode === 'agent');
  if (mode === 'agent') {
    document.getElementById('agentView').innerHTML = buildAgentHtml(currentLang);
  }
}

document.getElementById('humanBtn').addEventListener('click', () => applyMode('human'));
document.getElementById('agentBtn').addEventListener('click',  () => applyMode('agent'));

// Copy plain text from agent view (event delegation)
document.getElementById('agentView').addEventListener('click', e => {
  if (!e.target.closest('#avCopy')) return;
  const btn = document.getElementById('avCopy');
  navigator.clipboard.writeText(buildAgentText(currentLang)).then(() => {
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy plain text'; }, 2000);
  });
});

// ── Init ──────────────────────────────────────────────────────────────
applyContent(currentLang);
applyLinks();
applyMode(currentMode);
