import {
  Activity,
  AtSign,
  BookOpen,
  FlaskConical,
  Hammer,
  Layers3,
  ListChecks,
  MessagesSquare,
  Network,
  NotebookPen,
  PackageOpen,
  PanelsTopLeft,
  ScanEye,
  Terminal,
} from 'lucide-react';

export const jobs = [
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

export const projects = [
  {
    name: 'Midscene.js',
    icon: ScanEye,
    repo: 'web-infra-dev/midscene',
    description:
      'An AI-powered SDK for automating user interfaces with natural language.',
  },
  {
    name: 'Modern.js',
    icon: PanelsTopLeft,
    repo: 'web-infra-dev/modern.js',
    description: 'A progressive web framework built on React and Rsbuild.',
  },
  {
    name: 'Module Federation',
    icon: Network,
    repo: 'module-federation/core',
    description:
      'Tools for sharing modules at runtime across independent JavaScript applications.',
  },
  {
    name: 'Rsbuild',
    icon: Hammer,
    repo: 'web-infra-dev/rsbuild',
    description: 'A build tool for web applications powered by Rspack.',
  },
  {
    name: 'Rsdoctor',
    icon: Activity,
    repo: 'web-infra-dev/rsdoctor',
    description:
      'A build analyzer for inspecting Rspack bundles and build times.',
  },
  {
    name: 'Rslib',
    icon: PackageOpen,
    repo: 'web-infra-dev/rslib',
    description: 'A build tool for JavaScript and TypeScript libraries.',
  },
  {
    name: 'Rslint',
    icon: ListChecks,
    repo: 'web-infra-dev/rslint',
    description: 'An ESLint-compatible linter for JavaScript and TypeScript.',
  },
  {
    name: 'Rspack',
    icon: Layers3,
    repo: 'web-infra-dev/rspack',
    description: 'A Rust-based web bundler with a webpack-compatible API.',
  },
  {
    name: 'Rspress',
    icon: BookOpen,
    repo: 'web-infra-dev/rspress',
    description: 'A static site generator for documentation, built on Rsbuild.',
  },
  {
    name: 'Rstack CLI',
    icon: Terminal,
    repo: 'rstackjs/rstack-cli',
    description:
      'A CLI for building, testing, linting, and formatting JavaScript projects.',
  },
  {
    name: 'Rstest',
    icon: FlaskConical,
    repo: 'web-infra-dev/rstest',
    description: 'A JavaScript testing framework powered by Rspack.',
  },
];

const wechatQrCode = '/images/webinfra-qrcode.png';

export const channelGroups = [
  {
    lang: 'en',
    label: 'English',
    channels: [
      {
        name: 'Team Blogs',
        icon: NotebookPen,
        detail: 'web-infra-dev/blogs',
        href: 'https://github.com/web-infra-dev/blogs',
      },
      {
        name: 'Rspack Twitter',
        icon: AtSign,
        detail: '@rspack_dev',
        href: 'https://x.com/rspack_dev',
      },
      {
        name: 'Midscene Twitter',
        icon: AtSign,
        detail: '@midscene_ai',
        href: 'https://x.com/midscene_ai',
      },
      {
        name: 'Rspack Blog',
        icon: BookOpen,
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
        icon: MessagesSquare,
        detail: '微信扫码关注',
        href: wechatQrCode,
        qrCode: wechatQrCode,
      },
      {
        name: '掘金',
        icon: Layers3,
        detail: 'Web Infra 团队文章',
        href: 'https://juejin.cn/team/6930945479362478092/posts',
      },
    ],
  },
];
