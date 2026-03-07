// src/App.jsx
import React, { useEffect, useState } from 'react';
import {
    Github, Linkedin, Mail, ArrowRight, User, Briefcase,
    Code, Star, Send, ChevronDown
} from 'lucide-react';

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app-wrapper">
            {/* Background Shapes */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>

            {/* Navigation */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-container">
                    <a href="#" className="nav-logo">Rakesh<span className="text-gradient">.</span></a>
                    <div className="nav-links">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#experience" className="nav-link">Experience</a>
                        <a href="#skills" className="nav-link">Skills</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Let's Talk</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-content">
                        <div className="tag animate-fade-up">
                            <span className="pulse-dot" style={{ width: 8, height: 8, background: '#60a5fa', borderRadius: '50%' }}></span>
                            Available for new opportunities
                        </div>
                        <h1 className="hero-title animate-fade-up delay-1">
                            Building dynamic, <br />
                            <span className="text-gradient">scalable solutions</span>.
                        </h1>
                        <p className="hero-subtitle animate-fade-up delay-2">
                            I am Rakesh Sharma, a Software Engineer dedicated to crafting robust applications
                            with premium user experiences and highly optimized architectures.
                        </p>
                        <div className="animate-fade-up delay-3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn btn-primary">
                                View My Work <ArrowRight size={20} />
                            </a>
                            <a href="https://linkedin.com/in/rakeshsharma23" target="_blank" rel="noreferrer" className="btn btn-outline">
                                <Linkedin size={20} /> Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, textAlign: 'center', opacity: 0.5 }}>
                    <ChevronDown size={32} className="animate-fade-up delay-3" style={{ animation: 'fadeUp 1s ease-out forwards, float 3s infinite ease-in-out' }} />
                </div>
            </section>

            {/* About Section */}
            <section className="section" id="about">
                <div className="container">
                    <h2 className="section-title"><User size={36} color="#3b82f6" /> About Me</h2>
                    <p className="section-subtitle">Discover more about my background, passion, and what drives me in software engineering.</p>

                    <div className="glass-panel">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f9fafb' }}>Profile Summary</h3>
                        <p style={{ color: '#9ca3af', fontSize: '1.125rem', lineHeight: '1.8' }}>
                            I am a results-driven professional capable of translating complex requirements into highly functional robust software.
                            Currently, my specific details (from LinkedIn) are pending integration, but my focus remains on utilizing cutting edge
                            web technologies to create impactful digital products. I excel in collaborative environments and am
                            constantly learning to stay ahead of industry trends.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section" id="experience">
                <div className="container">
                    <h2 className="section-title"><Briefcase size={36} color="#3b82f6" /> Experience</h2>
                    <p className="section-subtitle">A chronological view of my professional journey and key achievements.</p>

                    <div className="glass-panel">
                        <div className="timeline">

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span className="timeline-date">Present</span>
                                <h3 className="timeline-title">Software Engineer</h3>
                                <h4 className="timeline-company">Company Name Placeholder</h4>
                                <ul>
                                    <li>Developed responsive web applications using React and modern CSS.</li>
                                    <li>Collaborated closely with cross-functional teams to deliver high-quality software.</li>
                                    <li>Optimized system performance leading to significant improvements in load time.</li>
                                </ul>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span className="timeline-date">Previous Date</span>
                                <h3 className="timeline-title">Frontend Developer</h3>
                                <h4 className="timeline-company">Previous Company Placeholder</h4>
                                <ul>
                                    <li>Designed and implemented UI components with pixel-perfect precision.</li>
                                    <li>Ensured accessibility standard compliance across multiple web platforms.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section" id="skills">
                <div className="container">
                    <h2 className="section-title"><Code size={36} color="#3b82f6" /> Technical Skills</h2>
                    <p className="section-subtitle">A snapshot of the languages, frameworks, and tools I use to build robust software.</p>

                    <div className="grid-3">
                        <div className="glass-panel">
                            <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Frontend</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <span className="tag">React</span>
                                <span className="tag">Next.js</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">CSS / SASS</span>
                                <span className="tag">Tailwind CSS</span>
                            </div>
                        </div>

                        <div className="glass-panel">
                            <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Backend</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <span className="tag">Node.js</span>
                                <span className="tag">Express</span>
                                <span className="tag">Python</span>
                                <span className="tag">SQL / NoSQL</span>
                                <span className="tag">REST APIs</span>
                            </div>
                        </div>

                        <div className="glass-panel">
                            <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Tools & Cloud</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <span className="tag">Git & GitHub</span>
                                <span className="tag">Docker</span>
                                <span className="tag">AWS</span>
                                <span className="tag">CI/CD</span>
                                <span className="tag">Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section" id="projects">
                <div className="container">
                    <h2 className="section-title"><Star size={36} color="#3b82f6" /> Featured Projects</h2>
                    <p className="section-subtitle">Some of my recent work showcasing technical depth and UX focus.</p>

                    <div className="grid-2">
                        {[1, 2].map((item) => (
                            <div key={item} className="glass-panel">
                                <div style={{ background: 'rgba(0,0,0,0.3)', height: '200px', borderRadius: '12px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ color: '#4b5563' }}>Project Preview Image</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Dynamic Web Application {item}</h3>
                                <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
                                    A full-stack application leveraging modern web technologies to deliver highly responsive
                                    and performant user experiences. Includes complex state management and API integrations.
                                </p>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href="#" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                        <Github size={16} /> Source Code
                                    </a>
                                    <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section" id="contact">
                <div className="container">
                    <h2 className="section-title"><Send size={36} color="#3b82f6" /> Get In Touch</h2>
                    <p className="section-subtitle">Have a project in mind or want to explore an opportunity? Let's connect.</p>

                    <div className="grid-2">
                        <div className="glass-panel">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Contact Information</h3>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: '#9ca3af', fontSize: '0.875rem' }}>Email</span>
                                    <a href="mailto:rakesh@example.com" style={{ color: '#f9fafb', textDecoration: 'none', fontWeight: 500 }}>rakesh@example.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa' }}>
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <span style={{ display: 'block', color: '#9ca3af', fontSize: '0.875rem' }}>LinkedIn</span>
                                    <a href="https://linkedin.com/in/rakeshsharma23" target="_blank" rel="noreferrer" style={{ color: '#f9fafb', textDecoration: 'none', fontWeight: 500 }}>in/rakeshsharma23</a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel">
                            <form>
                                <div className="grid-2" style={{ gap: '1rem' }}>
                                    <div className="form-group">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-input" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-input" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Message</label>
                                    <textarea className="form-input" rows="4" placeholder="How can I help you?"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '2rem 0', textAlign: 'center', color: '#9ca3af' }}>
                <div className="container">
                    <p>© {new Date().getFullYear()} Rakesh Sharma. Built with React & Vite.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
