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
    repo: 'web-infra-dev/rspack',
    description: 'A Rust-based web bundler with a webpack-compatible API.',
  },
  {
    name: 'Rsbuild',
    repo: 'web-infra-dev/rsbuild',
    description: 'A build tool for web applications powered by Rspack.',
  },
  {
    name: 'Rspress',
    repo: 'web-infra-dev/rspress',
    description: 'A static site generator for documentation, built on Rsbuild.',
  },
  {
    name: 'Rsdoctor',
    repo: 'web-infra-dev/rsdoctor',
    description: 'A build analyzer for inspecting Rspack bundles and build times.',
  },
  {
    name: 'Rslib',
    repo: 'web-infra-dev/rslib',
    description: 'A build tool for JavaScript and TypeScript libraries.',
  },
  {
    name: 'Rstest',
    repo: 'web-infra-dev/rstest',
    description: 'A JavaScript testing framework powered by Rspack.',
  },
  {
    name: 'Rslint',
    repo: 'web-infra-dev/rslint',
    description: 'An ESLint-compatible linter for JavaScript and TypeScript.',
  },
  {
    name: 'Midscene.js',
    repo: 'web-infra-dev/midscene',
    description: 'An AI-powered SDK for automating user interfaces with natural language.',
  },
  {
    name: 'Modern.js',
    repo: 'web-infra-dev/modern.js',
    description: 'A progressive web framework built on React and Rsbuild.',
  },
  {
    name: 'Garfish',
    repo: 'web-infra-dev/garfish',
    description: 'A micro-frontend framework for combining independent web applications.',
  },
  {
    name: 'Module Federation',
    repo: 'module-federation/core',
    description: 'Tools for sharing modules at runtime across independent JavaScript applications.',
  },
  {
    name: 'Rstack CLI',
    repo: 'rstackjs/rstack-cli',
    description: 'A CLI for building, testing, linting, and formatting JavaScript projects.',
  },
];

const wechatQrCode = '/images/webinfra-qrcode.png';

const channelGroups = [
  {
    lang: 'en',
    label: 'English',
    channels: [
      {
        name: 'Blogs',
        detail: 'web-infra-dev/blogs',
        href: 'https://github.com/web-infra-dev/blogs',
      },
      {
        name: 'Rspack Twitter',
        detail: '@rspack_dev',
        href: 'https://x.com/rspack_dev',
      },
      {
        name: 'Midscene Twitter',
        detail: '@midscene_ai',
        href: 'https://x.com/midscene_ai',
      },
      {
        name: 'Rspack Blog',
        detail: 'rspack.rs/blog',
        href: 'https://rspack.rs/blog/',
      },
    ],
  },
  {
    lang: 'zh-CN',
    label: '中文',
    channels: [
      {
        name: '微信公众号',
        detail: '微信扫码关注',
        href: wechatQrCode,
        qrCode: wechatQrCode,
      },
      {
        name: '掘金',
        detail: 'Web Infra 团队文章',
        href: 'https://juejin.cn/team/6930945479362478092/posts',
      },
    ],
  },
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
        <p className="team-byline">@ByteDance</p>
        <h1>Web Infrastructure Team</h1>
        <p className="team-mission">
          Our primitive goal is to provide e<strong>X</strong>cellent
          technical solutions to help the company's business grow, and build
          an open technical ecology to promote the development of frontend
          technology in the company and the industry.
        </p>
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
              <a href={`https://github.com/${repo}`}>
                <strong>{name}</strong>
                <span>{description}</span>
                <small>github.com/{repo}</small>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section id="publications" aria-labelledby="team-updates">
        <h2 id="team-updates">Team Updates</h2>
        <div className="team-channel-groups">
          {channelGroups.map(({ lang, label, channels }) => (
            <div key={lang} lang={lang}>
              <h3>{label}</h3>
              <ul className="team-channels">
                {channels.map(channel => (
                  <li key={channel.href}>
                    <a className="team-channel" href={channel.href}>
                      <span className="team-channel-copy">
                        <strong>{channel.name}</strong>
                        <span>{channel.detail}</span>
                      </span>
                      {channel.qrCode ? (
                        <img
                          className="team-channel-qr"
                          src={channel.qrCode}
                          width="112"
                          height="112"
                          alt="查看 Web Infra 公众号二维码原图"
                        />
                      ) : (
                        <span className="team-channel-arrow" aria-hidden="true">
                          ↗
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
