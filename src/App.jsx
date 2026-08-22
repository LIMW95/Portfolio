import { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { FaArrowRight, FaBars, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import Portrait from './assets/images/Sit.png';
import Logo from './assets/images/wl2.png';
import { capabilities, credentials, currentWork, engagements, projects } from './data/portfolio';

const navItems = ['home', 'current', 'work', 'expertise', 'about', 'contact'];

function SectionTitle({ eyebrow, children, copy }) {
  return <header className="section-heading reveal"><div><span className="eyebrow">{eyebrow}</span><h2>{children}</h2></div>{copy && <p>{copy}</p>}</header>;
}

function App() {
  const root = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      anime.timeline({ easing: 'easeOutExpo' })
        .add({ targets: '.nav-shell', translateY: [-30, 0], opacity: [0, 1], duration: 700 })
        .add({ targets: '.hero-stagger', translateY: [30, 0], opacity: [0, 1], delay: anime.stagger(90), duration: 750 }, '-=400')
        .add({ targets: '.portrait-console', translateX: [35, 0], opacity: [0, 1], duration: 900 }, '-=650');
    }
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      if (reduceMotion) entry.target.classList.add('revealed');
      else anime({ targets: entry.target, translateY: [24, 0], opacity: [0, 1], duration: 700, easing: 'easeOutCubic' });
      revealObserver.unobserve(entry.target);
    }), { threshold: 0.12 });
    root.current.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: '-35% 0px -55%', threshold: 0 });
    navItems.forEach((id) => { const section = document.getElementById(id); if (section) sectionObserver.observe(section); });
    return () => { revealObserver.disconnect(); sectionObserver.disconnect(); anime.remove('*'); };
  }, []);

  const navigate = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  return <div ref={root} className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <nav className="nav-shell" aria-label="Primary navigation">
      <button className="brand" onClick={() => navigate('home')} aria-label="Go to home"><img src={Logo} alt="" /><span>WILSON / LIM</span></button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => <button key={item} className={activeSection === item ? 'active' : ''} onClick={() => navigate(item)}>{item}</button>)}
        <a className="nav-resume" href="https://resume.io/r/LEuD7r0TL" target="_blank" rel="noreferrer">Résumé <FiDownload /></a>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <FaTimes /> : <FaBars />}</button>
    </nav>

    <main id="main">
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="status-line hero-stagger"><span className="status-light" />Building public-service platforms</div>
          <p className="kicker hero-stagger">FULL-STACK DEVELOPER · SYSTEMS ANALYST</p>
          <h1 className="hero-stagger">I build software that feels <em>considered.</em></h1>
          <p className="hero-intro hero-stagger">I’m Wilson Lim—a full-stack engineer maintaining essential public-service systems at DSWD while building modern platforms, integrations, automation, and independent products.</p>
          <div className="hero-actions hero-stagger"><button className="control primary" onClick={() => navigate('work')}>Explore my work <FaArrowRight /></button><button className="control" onClick={() => navigate('contact')}>Start a conversation <FiArrowUpRight /></button></div>
          <dl className="readouts hero-stagger"><div><dt>FOCUS</dt><dd>End-to-end products</dd></div><div><dt>BASED IN</dt><dd>Philippines</dd></div><div><dt>MODE</dt><dd>Build · learn · improve</dd></div></dl>
        </div>
        <div className="portrait-console" aria-label="Portrait of Wilson Lim">
          <div className="console-top"><span>OPERATOR / 01</span><span className="tiny-led" /></div><div className="portrait-screen"><img src={Portrait} alt="Wilson Lim" /></div>
          <div className="console-label"><strong>WILSON LIM</strong><span>SOFTWARE ENGINEER</span></div><div className="console-controls"><i /><i /><i /><span>ONLINE</span></div>
        </div>
      </section>

      <section id="current" className="section-wrap section-block">
        <SectionTitle eyebrow="01 / Current work" copy="Public-safe highlights from production systems, platform integration, and ongoing independent development.">Engineering for real operations.</SectionTitle>
        <div className="current-grid">
          {currentWork.map((item, index) => <article className="current-card reveal" key={item.title}>
            <div className="current-meta"><span>{item.type}</span><strong><i className="status-light" />{item.status}</strong></div>
            <span className="current-number">0{index + 1}</span><h3>{item.title}</h3><p className="current-role">{item.role}</p><p>{item.description}</p>
            <ul>{item.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
          </article>)}
        </div>
        <p className="disclosure-note reveal"><span>PUBLIC DISCLOSURE NOTE</span> This portfolio intentionally describes government and client work at a high level. It excludes beneficiary data, internal endpoints, security controls, infrastructure details, and confidential client information.</p>
      </section>

      <section id="work" className="section-wrap section-block">
        <SectionTitle eyebrow="02 / Selected work" copy="A growing archive of product, interface, and software work—built around useful outcomes, not decoration.">Projects with purpose.</SectionTitle>
        <div className="project-grid">{projects.map((project, index) => <article className={`project-card reveal ${index === 0 ? 'featured' : ''}`} key={project.title}>
          <div className="project-image"><img src={project.image} alt={`${project.title} project preview`} /></div>
          <div className="project-body"><span className="project-index">PROJECT / {String(index + 1).padStart(2, '0')}</span><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><a href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>View project <FiArrowUpRight /></a></div>
        </article>)}</div>
        <div className="archive-callout reveal"><span className="status-light amber" /><div><strong>The archive is expanding.</strong><p>Current and historical projects can be added without redesigning the page.</p></div><a href="https://github.com/LIMW95" target="_blank" rel="noreferrer">GitHub archive <FiArrowUpRight /></a></div>
        <div className="engagements reveal"><div><span className="eyebrow">DELIVERED / OUTSIDE WORK</span><h3>Additional engagements</h3></div>{engagements.map((item) => <article key={item.title}><span>{item.role}</span><h4>{item.title}</h4><p>{item.description}</p></article>)}</div>
      </section>

      <section id="expertise" className="section-wrap section-block">
        <SectionTitle eyebrow="03 / Capabilities" copy="A cross-functional toolkit for moving from a rough requirement to a maintainable, working product.">Tools are only useful in context.</SectionTitle>
        <div className="capability-grid">{capabilities.map((capability, index) => <article className="capability-card reveal" key={capability.group}><span>CH / {index + 1}</span><h3>{capability.group}</h3><ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
        <div className="credentials reveal"><div className="credentials-heading"><span className="eyebrow">TRAINING LOG</span><h3>Continuous learning, documented.</h3></div>{credentials.map((credential) => <article key={credential.title}><img src={credential.image} alt="" /><div><strong>{credential.title}</strong><span>{credential.issuer}</span></div></article>)}</div>
      </section>

      <section id="about" className="section-wrap section-block about-grid">
        <div><SectionTitle eyebrow="04 / About">An engineer who sees the whole system.</SectionTitle></div>
        <div className="about-panel reveal"><span className="plate-label">PROFILE / WL-95</span><p className="about-lead">I care about the details users notice—and the infrastructure they shouldn’t have to.</p><p>My work spans frontend development, backend services, databases, and systems support. That range helps me understand where a product can become simpler, faster, and more dependable.</p><p>I’m most engaged when translating real operational needs into software people can trust every day.</p><div className="principles"><span>01 · CLARITY</span><span>02 · RELIABILITY</span><span>03 · CRAFT</span></div></div>
      </section>

      <section id="contact" className="section-wrap contact-section"><div className="contact-console reveal">
        <div className="contact-copy"><span className="eyebrow">05 / Contact</span><h2>Let’s build something that holds up.</h2><p>Have a product, system, or role where thoughtful engineering matters? Tell me what you’re working on.</p></div>
        <div className="contact-actions"><a className="control primary" href="https://www.linkedin.com/in/wilson-lim-30a984213" target="_blank" rel="noreferrer">Message me on LinkedIn <FiArrowUpRight /></a><div className="socials"><a href="https://github.com/LIMW95" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/in/wilson-lim-30a984213" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></div></div>
      </div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Wilson Lim</span><span>Designed and engineered with intention.</span><button onClick={() => navigate('home')}>Back to top ↑</button></footer>
  </div>;
}

export default App;
