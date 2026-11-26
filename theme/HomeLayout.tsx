import { IconGithub, SvgWrapper } from '@rspress/core/theme-original';
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  GitFork,
} from 'lucide-react';
import { Button } from './components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from './components/ui/card';
import { channelGroups, jobs, projects } from './home-data';
import './home.css';

const github = 'https://github.com/web-infra-dev';
const jobDate = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function HomeNav() {
  return (
    <header className="home-nav">
      <nav className="home-container nav-inner" aria-label="Homepage">
        <a className="home-brand" href="#top">
          <img src="/favicon.png" width="30" height="30" alt="" />
          Web Infra
        </a>
        <a className="nav-github" href={github} aria-label="Web Infra on GitHub">
          <SvgWrapper icon={IconGithub} aria-hidden="true" />
          <span>GitHub</span>
        </a>
      </nav>
    </header>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="home-section"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading">
        <h2 id="projects-heading">Open Source Projects</h2>
      </div>
      <ul className="project-grid">
        {projects.map(({ name, repo, description, icon: Icon }) => (
          <li key={repo}>
            <a className="project-link" href={`https://github.com/${repo}`}>
              <Card className="project-card">
                <CardHeader className="project-header">
                  <span className="project-icon">
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <h3>{name}</h3>
                  <ArrowUpRight
                    className="outbound-arrow"
                    size={16}
                    aria-hidden="true"
                  />
                </CardHeader>
                <CardDescription className="project-description">
                  {description}
                </CardDescription>
                <CardFooter className="project-repo">
                  <GitFork size={13} aria-hidden="true" />
                  <span>{repo}</span>
                </CardFooter>
              </Card>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Updates() {
  return (
    <section
      id="publications"
      className="home-section"
      aria-labelledby="team-updates"
    >
      <div className="section-heading">
        <h2 id="team-updates">Team Updates</h2>
      </div>
      <div className="channel-groups">
        {channelGroups.map(({ label, lang, channels }) => (
          <div lang={lang} key={lang}>
            <h3 className="channel-language">{label}</h3>
            <ul className="channel-list">
              {channels.map(({ name, href, detail, qrCode, icon: Icon }) => (
                <li key={href}>
                  <a className="channel-link" href={href}>
                    <Icon
                      className="channel-icon"
                      size={20}
                      aria-hidden="true"
                    />
                    <span className="channel-copy">
                      <strong>{name}</strong>
                      <small>{detail}</small>
                    </span>
                    {qrCode ? (
                      <img
                        className="channel-qr"
                        src={qrCode}
                        width="88"
                        height="88"
                        alt="查看 Web Infra 公众号二维码原图"
                      />
                    ) : (
                      <ArrowUpRight
                        size={15}
                        className="outbound-arrow"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="jobs" className="home-section" aria-labelledby="jobs-heading">
      <div className="section-heading">
        <h2 id="jobs-heading">Careers</h2>
      </div>
      <ul className="job-list">
        {jobs.map(({ href, title, date }) => (
          <li key={href}>
            <a href={href}>
              <BriefcaseBusiness size={19} aria-hidden="true" />
              <strong>{title}</strong>
              <time dateTime={date}>{jobDate.format(new Date(date))}</time>
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HomeLayout() {
  return (
    <div className="team-home" id="top">
      <a className="home-skip" href="#main">
        Skip to content
      </a>
      <HomeNav />
      <main id="main">
        <div className="hero">
          <div className="home-container hero-inner">
            <div className="hero-copy">
              <h1>
                ByteDance <span className="hero-title-end">Web Infra</span>
              </h1>
              <p className="team-mission">
                We are the Web Infra team at ByteDance. We build tools for
                developers and AI agents across the JavaScript ecosystem.
              </p>
              <div className="hero-actions">
                <Button asChild size="lg">
                  <a href="#projects">Explore projects</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#publications">Team Updates</a>
                </Button>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <img
                src="/images/infra-stack.webp"
                width="1280"
                height="853"
                fetchPriority="high"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="home-container">
          <Projects />
          <Updates />
          <Careers />
        </div>
      </main>
      <footer className="home-footer">
        <div className="home-container">
          <span>ByteDance Web Infra</span>
          <a href="#top">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
}
