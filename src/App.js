import { BrowserRouter as Router, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import './App.css';
import blogPosts from './data/blogPosts';

const navItems = [
  { label: 'about', path: '/' },
  { label: 'offer', path: '/offer' },
  { label: 'blog', path: '/blog' },
  { label: 'contact', path: '/contact' },
];

const services = [
  {
    title: 'Frontend Consulting',
    summary:
      'Deep audits of your codebase, architectural guidance, and pairing sessions that unblock your team in days instead of months.',
  },
  {
    title: 'Design System Ops',
    summary:
      'From tokens to documentation, I help teams ship cohesive UI kits that scale across products without sacrificing speed.',
  },
  {
    title: 'Performance Workshops',
    summary:
      'Hands-on workshops focused on Core Web Vitals, profiling, and practical optimizations tailored to your stack.',
  },
  {
    title: 'Delivery Partner',
    summary:
      'Need a senior engineer embedded in your squad? I join sprints, mentor devs, and own mission-critical features.',
  },
];

const AboutSection = () => (
  <section className="panel">
    <h2>About • Builder, mentor, partner</h2>
    <p className="panel-intro">
      I help companies translate ambitious product ideas into resilient frontend experiences. From prototypes to
      billion-user platforms, I bridge the gap between design taste and engineering rigor.
    </p>
    <div className="grid two-col">
      <article className="card highlight">
        <h3>Philosophy</h3>
        <p>
          Brutalism is direct, honest, and structural. I treat code the same way: expose the grid, reduce ornament, and
          reinforce the parts that carry the most load.
        </p>
      </article>
      <article className="card">
        <h3>Focus Areas</h3>
        <ul>
          <li>Design system rollouts & governance</li>
          <li>Performance and accessibility audits</li>
          <li>Senior engineering mentorship</li>
          <li>Roadmap triage for scale-ups</li>
        </ul>
      </article>
    </div>
  </section>
);

const OfferSection = () => (
  <section className="panel">
    <h2>Offer • Frontend Leadership on Demand</h2>
    <p className="panel-intro">
      Pick the level of engagement you need. Every package is bespoke, but these pillars keep projects focused and
      measurable.
    </p>
    <div className="grid">
      {services.map((service) => (
        <article key={service.title} className="card">
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
        </article>
      ))}
    </div>
  </section>
);

const ContactSection = () => (
  <section className="panel">
    <h2>Contact • Let’s build together</h2>
    <div className="contact-card">
      <p>
        I consult remotely from Europe, partnering with product teams across time zones. If you value rapid iteration,
        honest communication, and design-forward engineering, we will get along great.
      </p>
      <ul>
        <li>Email: hello@dziabniety.dev</li>
        <li>Signal / Telegram: @dziabniety</li>
        <li>Preferred timezone: CET ±3h</li>
      </ul>
      <button type="button" className="cta-button">
        Schedule a discovery call
      </button>
    </div>
  </section>
);

const BlogList = () => (
  <section className="panel">
    <h2>Blog • Notes from the Frontline</h2>
    <div className="stack">
      {blogPosts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`} className="card-link">
          <article className="card blog-card">
            <div className="blog-meta">{post.date}</div>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <span className="card-cta">Read story →</span>
          </article>
        </Link>
      ))}
    </div>
  </section>
);

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <section className="panel">
        <h2>Post not found</h2>
        <p>The article you are looking for has either moved or does not exist.</p>
        <Link to="/blog" className="nav-button inline">
          ← Back to all posts
        </Link>
      </section>
    );
  }

  return (
    <section className="panel">
      <Link to="/blog" className="nav-button inline ghost">
        ← Back to blog
      </Link>
      <div className="post-header">
        <div className="blog-meta">{post.date}</div>
        <h2>{post.title}</h2>
      </div>
      <div className="post-body">
        {post.content.map((paragraph, index) => (
          <p key={paragraph.slice(0, 12) + index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

const Layout = () => {
  const location = useLocation();
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="badge">Brutalist IT Studio</div>
        <h1>
          Dziabniety Dzik
          <span className="outline">Frontend Partner</span>
        </h1>
        <p>
          I build fearless interfaces with raw grids, loud typography, and engineering discipline that keeps chaos under
          control.
        </p>
        <nav className="nav">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={`nav-button ${isActive(item.path) ? 'is-active' : ''}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="content">
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="/offer" element={<OfferSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="*" element={<AboutSection />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Dziabniety Dzik.</span>
        <span>Available for fractional CTO work and focused engagements.</span>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
