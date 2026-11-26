import publications from './publications.json';
import './home.css';

const jobs = [
  {
    href: '/en/about',
    title: 'Mountain View Team / Seattle Team is hiring',
    date: '2023-11-17',
  },
  {
    href: '/about',
    title: '字节跳动 Web Infra 团队招聘信息',
    date: '2023-11-17',
  },
];

const projects = [
  {
    name: 'Rspack',
    repo: 'rspack',
    description: 'Fast Rust-based web bundler',
  },
  { name: 'Rsbuild', repo: 'rsbuild', description: 'Rspack-based build tool' },
  {
    name: 'Rspress',
    repo: 'rspress',
    description: 'Rspack-based static site generator',
  },
  {
    name: 'Modern.js',
    repo: 'modern.js',
    description: 'Web engineering system',
  },
  { name: 'Garfish', repo: 'garfish', description: 'Micro frontend framework' },
];

const jobDate = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export function HomeLayout() {
  return (
    <div className="team-home">
      <header className="team-intro">
        <div>
          <p className="team-byline">@ByteDance</p>
          <h1>Web Infrastructure Team</h1>
          <p className="team-mission">
            Our primitive goal is to provide e<strong>X</strong>cellent
            technical solutions to help the company's business grow, and build
            an open technical ecology to promote the development of frontend
            technology in the company and the industry.
          </p>
        </div>
        <figure className="team-wechat">
          <img
            src="/images/webinfra-qrcode.png"
            width="132"
            height="132"
            alt="Web Infra team WeChat QR code"
          />
          <figcaption>Follow us on WeChat.</figcaption>
        </figure>
      </header>

      <section id="jobs" aria-labelledby="jobs-heading">
        <h2 id="jobs-heading">Opening Jobs</h2>
        <ul className="team-entries">
          {jobs.map(({ href, title, date }) => (
            <li key={href}>
              <a href={href}>
                <span>
                  <span aria-hidden="true">🔥 </span>
                  {title}
                </span>
                <time dateTime={date}>{jobDate.format(new Date(date))}</time>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Open Source Projects</h2>
        <ul className="team-projects">
          {projects.map(({ name, repo, description }) => (
            <li key={repo}>
              <a href={`https://github.com/web-infra-dev/${repo}`}>
                <strong>{name}</strong>
                <span>{description}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="publications" aria-labelledby="publications-heading">
        <h2 id="publications-heading">Publications</h2>
        <ul className="team-entries">
          {publications.map(({ title, url, date }) => (
            <li key={url}>
              <a href={url}>
                <span>{title}</span>
                <time dateTime={date}>{date.replaceAll('-', '/')}</time>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
