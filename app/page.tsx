'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Download, Mail, Menu, X, Sparkles, Code2, Cpu, Database, Layers3, ExternalLink, BriefcaseBusiness } from 'lucide-react'
import { useState } from 'react'

const projects = [
  { title: 'Jarvis AI', type: 'AI-powered desktop assistant', description: 'A voice-controlled Windows application that launches apps, controls media, automates WhatsApp, and answers questions with Gemini.', tags: ['Python', 'Gemini API', 'SpeechRecognition'], featured: true, link: 'https://github.com/vikas-040304/Jarvis-AI' },
  { title: 'Renofix', type: 'Full-stack e-commerce', description: 'Home improvement and gardening marketplace with authentication, product discovery, cart, checkout, and MySQL integration.', tags: ['PHP', 'MySQL', 'JavaScript'], link: 'https://github.com/vikas-040304' },
  { title: 'Jujutsu Sorcerer RPG', type: '2D action game', description: 'A cinematic desktop game with combat mechanics, enemy spawning, special abilities, parallax backgrounds, and sound.', tags: ['Python', 'Pygame', 'PyInstaller'], link: 'https://github.com/vikas-040304' },
  { title: 'React Todo', type: 'Task management app', description: 'A focused CRUD productivity tool for creating, updating, completing, and organizing everyday tasks.', tags: ['React.js', 'CSS3', 'JavaScript'], link: 'https://github.com/vikas-040304' },
]

const skills = ['React.js', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'Git & GitHub', 'Figma', 'Pygame', 'AI Applications']

function GridBackground() {
  return <div className="grid-bg" aria-hidden="true"><div className="orb orb-one" /><div className="orb orb-two" /><div className="noise" /></div>
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Abstract glowing digital core visualization">
    <div className="visual-ring ring-a" /><div className="visual-ring ring-b" /><div className="visual-ring ring-c" />
    <div className="core"><div className="core-inner"><Sparkles size={30} /></div></div>
    <div className="satellite satellite-a"><Code2 size={17} /></div><div className="satellite satellite-b"><Cpu size={17} /></div><div className="satellite satellite-c"><Database size={17} /></div>
    <div className="visual-label"><span className="pulse-dot" /> creative systems / 01</div>
  </div>
}

function SocialLinks() {
  return <div className="social-links"><a href="https://github.com/vikas-040304" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a><a href="https://linkedin.com/in/vikas-vk" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness /></a><a href="mailto:sbvikas04@gmail.com" aria-label="Email"><Mail /></a></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <main>
    <GridBackground />
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Vikas B. home"><span>VB</span><i>software developer</i></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{['about', 'projects', 'skills', 'experience', 'contact'].map(item => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<a className="nav-resume" href="/Vikas-B-Resume.pdf" download>resume <Download size={14} /></a></nav>
    </header>

    <section className="hero wrap" id="top">
      <div className="hero-copy"><motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>Hello, I&apos;m <span>available for opportunities</span></motion.p><motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>Vikas <em>B.</em><br /><strong>Software developer<br />& creative builder.</strong></motion.h1><motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>I build thoughtful digital experiences with Python, React, JavaScript, and a curiosity for AI-powered applications.</motion.p><motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}><a className="button primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a><a className="button ghost" href="/Vikas-B-Resume.pdf" download>Download resume <Download size={16} /></a></motion.div></div>
      <HeroVisual />
      <div className="hero-foot"><SocialLinks /><a className="scroll-cue" href="#about">scroll to explore <ChevronDown size={16} /></a><span className="hero-index">01 / 09</span></div>
    </section>

    <section className="section wrap intro-section" id="about"><div className="section-kicker">01 / about me</div><div className="intro-grid"><h2>Curious by nature.<br /><span>Builder by choice.</span></h2><div><p className="lead">I&apos;m an engineering graduate passionate about software development, Python programming, and building interactive digital experiences.</p><p>From full-stack commerce applications and React tools to 2D games and an AI-powered desktop voice assistant, I enjoy turning ideas into useful software. I&apos;m looking for opportunities to learn from experienced teams and contribute to products that matter.</p><a className="text-link" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a></div></div></section>

    <section className="section wrap" id="projects"><div className="section-heading"><div className="section-kicker">02 / selected work</div><h2>Things I&apos;ve <span>built.</span></h2><p>A selection of projects where engineering meets creative problem-solving.</p></div><div className="project-grid">{projects.map((project, i) => <motion.a className={project.featured ? 'project-card featured' : 'project-card'} href={project.link} target="_blank" rel="noreferrer" key={project.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}><div className="project-visual"><span className="project-number">0{i + 1}</span>{project.featured ? <div className="jarvis-orb"><div /><div /><div /></div> : <div className={`abstract-mark mark-${i}`}><Layers3 /></div>}<ExternalLink className="project-arrow" size={18} /></div><div className="project-body"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></motion.a>)}</div></section>

    <section className="section wrap skills-section" id="skills"><div className="section-kicker">03 / capabilities</div><div className="skills-layout"><h2>Tools for<br /><span>the journey.</span></h2><div className="skill-list">{skills.map((skill, i) => <motion.div key={skill} className="skill-item" initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .04 }}><span>0{i + 1}</span><strong>{skill}</strong><ArrowUpRight size={16} /></motion.div>)}</div></div></section>

    <section className="section wrap timeline-section" id="experience"><div className="section-kicker">04 / education & training</div><div className="timeline-layout"><h2>Learning<br /><span>in motion.</span></h2><div className="timeline"><div className="timeline-item"><span>2025</span><div><h3>B.E. Electrical & Electronics Engineering</h3><p>SNS College of Engineering · 6.53 CGPA</p></div></div><div className="timeline-item"><span>2024</span><div><h3>Data Science course</h3><p>Devtown · January — March 2024</p></div></div><div className="timeline-item"><span>2023</span><div><h3>Cloud Computing training</h3><p>Gateway Software Solution IT & ITES, Coimbatore</p></div></div></div></div></section>

    <section className="contact-section" id="contact"><div className="wrap contact-inner"><div><div className="section-kicker">05 / contact</div><h2>Have an idea?<br /><span>Let&apos;s make it real.</span></h2></div><div><p>I&apos;m open to software development roles, collaborations, and interesting conversations.</p><a className="button primary" href="mailto:sbvikas04@gmail.com">Start a conversation <ArrowUpRight size={17} /></a><SocialLinks /></div></div></section>
    <footer className="site-footer wrap"><span>© 2025 Vikas B.</span><span>designed & built with curiosity</span><a href="#top">back to top ↑</a></footer>
  </main>
}

