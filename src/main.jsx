import { useState } from 'react'
import {
  ArrowUpRight, BarChart3, Check, ChevronDown, CirclePlay, Compass, Cpu,
  Globe2, Menu, MoveUpRight, Palette,
  Play, Quote, Send, Sparkles, Target, Users, X, Zap
} from 'lucide-react'
import './styles.css'

const projects = [
  { id: 1, title: 'Aurora Finance', category: 'Strategy', year: '2025', desc: 'Menyederhanakan pengalaman finansial untuk 2,4 juta pengguna di Asia Tenggara.', color: 'violet', metric: '+68%', metricLabel: 'activation rate' },
  { id: 2, title: 'Karsa Health', category: 'Digital Product', year: '2025', desc: 'Membangun ekosistem layanan kesehatan yang terasa lebih manusiawi.', color: 'lime', metric: '4.9/5', metricLabel: 'user satisfaction' },
  { id: 3, title: 'Kota Baru', category: 'Brand Experience', year: '2024', desc: 'Membawa identitas kawasan mixed-use ke dalam era digital.', color: 'orange', metric: '3.2×', metricLabel: 'engagement growth' },
  { id: 4, title: 'Sagara Energy', category: 'Strategy', year: '2024', desc: 'Mengubah data energi menjadi keputusan yang lebih cepat dan berkelanjutan.', color: 'blue', metric: '−41%', metricLabel: 'time to insight' },
]

const services = [
  { icon: Compass, number: '01', title: 'Brand & Strategy', text: 'Menemukan posisi yang relevan, lalu mengubahnya menjadi arah yang dapat dijalankan.' },
  { icon: Palette, number: '02', title: 'Experience Design', text: 'Merancang pengalaman digital yang mudah dipahami, terasa tepat, dan memberi hasil.' },
  { icon: Cpu, number: '03', title: 'Technology', text: 'Membangun fondasi teknologi yang siap bertumbuh bersama kebutuhan bisnis Anda.' },
]

const faqs = [
  ['Apa yang dikerjakan Northstar?', 'Kami membantu perusahaan merumuskan strategi, membangun identitas, dan mengembangkan produk digital yang memberi dampak terukur.'],
  ['Berapa lama proses sebuah proyek?', 'Sebagian besar proyek berjalan selama 8 hingga 16 minggu. Durasi bergantung pada ruang lingkup, kompleksitas, dan kesiapan tim klien.'],
  ['Apakah Northstar menerima proyek di luar Indonesia?', 'Ya. Kami bekerja dengan tim di Indonesia, Singapura, Malaysia, dan Australia secara hybrid.'],
  ['Bagaimana cara memulai kolaborasi?', 'Kirimkan konteks singkat melalui formulir kontak. Tim kami akan menghubungi Anda dalam 2 hari kerja untuk sesi perkenalan.'],
]

function Logo() { return <a className="logo" href="#top"><span className="logo-mark"><span /></span><span>northstar<span className="logo-dot">.</span></span></a> }

function SectionLabel({ children }) { return <div className="section-label"><span />{children}</div> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All work')
  const [selectedProject, setSelectedProject] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)
  const [sent, setSent] = useState(false)
  const filters = ['All work', 'Strategy', 'Digital Product', 'Brand Experience']
  const visibleProjects = activeFilter === 'All work' ? projects : projects.filter(p => p.category === activeFilter)

  const scrollTo = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return <div id="top">
    <header className="nav-shell">
      <nav className="nav container">
        <Logo />
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('work')}>Work</button>
          <button onClick={() => scrollTo('services')}>Services</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('insights')}>Insights</button>
          <button className="mobile-contact" onClick={() => scrollTo('contact')}>Start a project <ArrowUpRight size={15}/></button>
        </div>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>Start a project <ArrowUpRight size={16}/></button>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </nav>
    </header>

    <main>
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot"/>Independent digital studio · Jakarta / Everywhere</div>
          <h1>Make your next<br/><em>move matter.</em></h1>
          <p className="hero-lead">Kami membantu organisasi ambisius menemukan arah, menciptakan pengalaman, dan tumbuh dengan percaya diri.</p>
          <div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo('work')}>Explore our work <ArrowUpRight size={17}/></button><button className="play-link" onClick={() => scrollTo('about')}><span><Play size={13} fill="currentColor"/></span> Meet Northstar</button></div>
        </div>
        <div className="hero-visual" aria-label="Abstract data visualization">
          <div className="visual-glow"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="visual-core"><Sparkles size={26}/></div><div className="visual-tag tag-one">strategy</div><div className="visual-tag tag-two">experience</div><div className="visual-tag tag-three">technology</div>
          <div className="hero-stats"><strong>12<span>+</span></strong><small>years shaping<br/>what's next</small></div>
        </div>
      </section>

      <div className="trust-bar"><div className="container trust-inner"><span>TRUSTED BY TEAMS AT</span><strong>astra<span>.</span></strong><strong>sequis</strong><strong>telkomsel</strong><strong>GOJEK</strong><strong>Traveloka</strong></div></div>

      <section className="section container" id="work">
        <div className="section-head"><div><SectionLabel>Selected work</SectionLabel><h2>Ideas that move<br/><em>business forward.</em></h2></div><p className="section-intro">Kami percaya pekerjaan yang baik harus indah untuk dilihat dan berguna untuk dijalankan.</p></div>
        <div className="filter-row">{filters.map(filter => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        <div className="project-grid">{visibleProjects.map((project, index) => <article className={`project-card ${project.color}`} key={project.id} onClick={() => setSelectedProject(project)}><div className="project-art"><span className="art-number">0{index + 1}</span><div className="art-shape"/><div className="art-line"/><span className="art-label">{project.category}</span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.desc}</p></div><button aria-label={`View ${project.title}`}><ArrowUpRight size={20}/></button></div><div className="project-result"><strong>{project.metric}</strong><span>{project.metricLabel}</span><small>{project.year}</small></div></article>)}</div>
      </section>

      <section className="dark-section" id="services"><div className="container"><div className="section-head light"><div><SectionLabel>What we do</SectionLabel><h2>Clarity creates<br/><em>momentum.</em></h2></div><p className="section-intro">Dari pertanyaan yang belum terjawab hingga produk yang dicintai, kami bekerja di setiap titik yang penting.</p></div><div className="service-grid">{services.map(({icon: Icon, number, title, text}) => <div className="service-card" key={number}><div className="service-top"><span>{number}</span><Icon size={28}/></div><h3>{title}</h3><p>{text}</p><button onClick={() => scrollTo('contact')}>Explore service <ArrowUpRight size={15}/></button></div>)}</div></div></section>

      <section className="about-section container" id="about"><div className="about-art"><div className="about-circle circle-one"/><div className="about-circle circle-two"/><div className="about-circle circle-three"/><span className="about-coordinate">06° 12' S<br/>106° 49' E</span><span className="about-stamp">N / S<br/><small>EST. 2013</small></span></div><div className="about-copy"><SectionLabel>Why Northstar</SectionLabel><h2>Good work starts<br/>with <em>good questions.</em></h2><p>Kami adalah tim multidisiplin yang terdiri dari strategis, desainer, dan engineer. Bersama-sama, kami membuat kompleksitas terasa sederhana dan peluang terasa mungkin.</p><p className="about-muted">Kami tidak datang dengan jawaban yang sudah jadi. Kami datang untuk menemukan jawaban yang tepat, bersama Anda.</p><button className="text-link" onClick={() => scrollTo('contact')}>Get to know us <ArrowUpRight size={17}/></button><div className="about-metrics"><div><strong>42</strong><span>people<br/>in our team</span></div><div><strong>86</strong><span>projects<br/>shipped</span></div><div><strong>14</strong><span>markets<br/>reached</span></div></div></div></section>

      <section className="quote-section"><div className="container quote-inner"><Quote size={34}/><blockquote>“Northstar helped us see the problem differently. The solution became clear after that.”</blockquote><div className="quote-person"><div className="avatar">RP</div><div><strong>Raka Pranoto</strong><span>VP Product, Aurora Finance</span></div></div></div></section>

      <section className="insights-section container" id="insights"><div className="section-head"><div><SectionLabel>From the studio</SectionLabel><h2>Fresh thinking,<br/><em>shared openly.</em></h2></div><button className="text-link">View all insights <ArrowUpRight size={17}/></button></div><div className="insight-grid"><article className="insight-feature"><div className="insight-art"><BarChart3 size={48}/><div className="bars"><i/><i/><i/><i/><i/></div></div><div className="insight-content"><span>Perspective · 6 min read</span><h3>Why the best digital products feel less like software.</h3><button className="text-link">Read article <ArrowUpRight size={15}/></button></div></article><div className="insight-list"><article><span>Field note · 4 min read</span><h3>Building for the next billion users in Southeast Asia.</h3><ArrowUpRight size={19}/></article><article><span>Studio news · 3 min read</span><h3>Northstar earns B Corp pending status.</h3><ArrowUpRight size={19}/></article><article><span>Toolkit · 8 min read</span><h3>The questions we ask before we make anything.</h3><ArrowUpRight size={19}/></article></div></div></section>

      <section className="faq-section container"><div><SectionLabel>Good to know</SectionLabel><h2>Questions,<br/><em>answered.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown size={19}/></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section className="contact-section" id="contact"><div className="container contact-inner"><div><SectionLabel>Have a challenge?</SectionLabel><h2>Let's make<br/><em>it matter.</em></h2><p>Tell us a little about what you're working on. We usually respond within two business days.</p><div className="contact-details"><span><Globe2 size={16}/>northstar.studio</span><span><Send size={16}/>hello@northstar.studio</span></div></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>{sent ? <div className="success-state"><div><Check size={27}/></div><h3>Message received.</h3><p>Terima kasih. Tim Northstar akan menghubungi Anda segera.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Send another message <ArrowUpRight size={15}/></button></div> : <><label>Your name<input required placeholder="e.g. Bintang Maulana"/></label><label>Work email<input required type="email" placeholder="you@company.com"/></label><label>Tell us about your project<textarea required rows="4" placeholder="A few words about your challenge, timeline, and ambition..."/></label><button className="button button-light" type="submit">Send inquiry <ArrowUpRight size={17}/></button></>}</form></div></section>
    </main>

    <footer className="footer"><div className="container footer-top"><Logo/><p>Digital with direction.<br/>Made with intent in Jakarta.</p><div className="socials"><a href="#top" aria-label="LinkedIn">in</a><a href="#top" aria-label="Instagram">ig</a><a href="#top" aria-label="Dribbble">dr</a></div></div><div className="container footer-bottom"><span>© 2025 Northstar Studio. All rights reserved.</span><span>Privacy · Terms · Cookies</span></div></footer>

    {selectedProject && <div className="modal-backdrop" onClick={() => setSelectedProject(null)}><div className="project-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)}><X size={20}/></button><div className={`modal-art ${selectedProject.color}`}><span>CASE STUDY</span><strong>{selectedProject.title}</strong><MoveUpRight size={34}/></div><div className="modal-body"><SectionLabel>{selectedProject.category} · {selectedProject.year}</SectionLabel><h2>{selectedProject.title}</h2><p>{selectedProject.desc} Proyek ini mempertemukan strategi, desain, dan teknologi dalam satu pengalaman yang konsisten dan dapat diukur.</p><div className="modal-stat"><strong>{selectedProject.metric}</strong><span>{selectedProject.metricLabel}</span></div></div></div></div>}
  </div>
}

export default App
