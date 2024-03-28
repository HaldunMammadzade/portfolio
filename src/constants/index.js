import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  next,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  agros,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  va,
  webzool,
  apertech,
  mina,
  div,
  irshi,
  etsn,
  software,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: next,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: ' Virtual Azerbaijan group of Companies',
    icon: va,
    time: 'Full Time',
    iconBg: '#333333',
    date: 'Nov 2020 - Mar 2023',
  },
  {
    title: 'Front-End Developer',
    company_name: 'MinA Azerbaijan',
    time: 'Full Time',
    icon: mina,
    iconBg: '#333333',
    date: 'Jan 2023 - May 2023',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Webzool  Creative',
    time: 'Remote',
    icon: webzool,
    iconBg: '#333333',
    date: 'Jan 2023 - Jan 2024',
  },
  {
    title: 'Lead Front-End Developer',
    company_name: 'Apertech ERP Solutions',
    time: 'Full Time',
    icon: apertech,
    iconBg: '#333333',
    date: 'May 2023 - Oct 2023',
  },

  {
    title: 'Front-End Instructor',
    company_name: 'Div Academy',
    time: 'Part Time',
    icon: div,
    iconBg: '#333333',
    date: 'Apr 2023 - Aug 2023',
  },
  {
    title: 'Front-End Developer',
    company_name: 'IRSHI',
    time: 'Remote ',
    icon: irshi,
    iconBg: '#333333',
    date: 'Jan 2024 - Present',
  },
  {
    title: 'Front-End Instructor',
    company_name: 'Software Village',
    time: 'Part Time',
    icon: software,
    iconBg: '#333333',
    date: 'Oct 2023 - Present',
  },
  {
    title: 'Front-End Developer',
    company_name: 'Ministry of Ecology and Natural Resources of Azerbaijan',
    time: 'Full Time',
    icon: etsn,
    iconBg: '#333333',
    date: 'Oct 2023 - Present',
  },


];

const projects = [
  {
    id: 'project-1',
    name: 'Agros',
    description: 'Agriculture management system with React js',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: agros,
    repo: null,
    demo: 'https://agros.az',
  },
  {
    id: 'project-2',
    name: 'Anama',
    description:
      'Mine Action Agency of the Republic of Azerbaijan with ADMIN panel, was use Next js',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: null,
    demo: 'https://anama.gov.az ',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
