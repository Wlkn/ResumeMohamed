import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import calculator from '../images/portfolio/calculator.jpg';
import counterapp from '../images/portfolio/counterapp.jpg';
import quiz from '../images/portfolio/quizfixed.png';
// import personalwebsite from '../images/portfolio/personalwebsite.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonialWall.jpg';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/winterpic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mohamed.dev',
  description: 'Personal Website',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mohamed Ali.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Montreal based <strong className="text-stone-100">Front End </strong>Developer.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me looking at new <strong className="text-stone-100">technologies</strong>,
        and trying to learn some of them, or just having fun with
        <strong className="text-stone-100"> Friends!</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1ynXI0JjdgHLvnK2BuSueEvHFV6okWOlk/view?usp=share_link',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi! I'm Mohamed, a front end freelancer that finds fun in making web pages and in always learning new things.`,
  aboutItems: [
    {label: 'Location', text: 'Montréal, QC', Icon: MapIcon},
    {label: 'Age', text: '18', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Moroccan', Icon: FlagIcon},
    {label: 'Interests', text: 'Programming, Gym, Cars', Icon: SparklesIcon},
    {label: 'Study', text: 'Freelancer', Icon: AcademicCapIcon},
    {label: 'Employment', text: '-', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'French',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Arabic',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript',
        level: 6,
      },
      {
        name: 'React',
        level: 4,
      },
      {
        name: 'TypeScript',
        level: 3.5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Currently learning',
        level: 0,
      },
      {
        name: '...',
        level: 0,
      },
      {
        name: '...',
        level: 0,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Javascript Quiz',
    description:
      'A site that is also made with Javascript but this time it uses an external API, you have to answer different questions in a time limit of 20 seconds. The site will tell you if you had the right or wrong answer to the question and a score will be displayed at the end.',
    url: 'https://wlkn.github.io/Quiz_Javascript',
    image: quiz,
  },
  {
    title: 'Time Calculator',
    description: `This site is a calculator that can do mathematical calculations with time. React and JavaScript were used.
    `,
    url: 'https://wlkn.github.io/Time-Calculator-App',
    image: calculator,
  },
  {
    title: 'Tally-Ho Counter',
    description:
      'A simple website made with Javascript, Html, CSS. The purpose of this site was to replicate an application on iPhone. This required an effort at the CSS level which was therefore a very good project to start.',
    url: 'https://wlkn.github.io/Javascript-CounterApp',
    image: counterapp,
  },
  // {
  //   title: 'Personal Website',
  //   description: `This website was made with React. I'll use this as a blog and a portfolio in the future.`,
  //   url: 'https://wlkn.vercel.app',
  //   image: personalwebsite,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'November 2022',
    location: 'OpenClassrooms',
    title: 'Started learning JavaScript',
    content: <p>Dropped out of college to pursure my passion in programming.</p>,
  },
  {
    date: 'August 2021 to November 2022',
    location: 'Montmorency College',
    title: 'Computer Technology',
    content: <p>Left as the pace was slow, and found another way to achieve my goals.</p>,
  },
  {
    date: 'May 2021',
    location: 'Curé Antoine Labelle',
    title: 'Secondary School (High School)',
    content: <p>Standard High school.</p>,
  },
];

export const experience: TimelineItem[] = [
  // {
  //   date: 'March 2010 - Present',
  //   location: 'Awesome Development Company',
  //   title: 'Senior UX Engineer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Fares Bessrour ' + '\u00B7' + ' Senior Developer',
      text: 'If you are looking for a hard working with an unmatched analytical mindset software developer, this is your guy. There is no task too hard for Mohamed Ali, he will not rest until he understands and finds solutions to get any project going. Very underrated by Professionals in the Development space but the Communication and social skills of Mohamed Ali makes it great working with him, these skills are a must for any team centered projects.',
      image: 'https://i.postimg.cc/QxfhhrmN/faresbg.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here are the best ways you can reach out to me, the fastest way to access me is through emails.',
  items: [
    {
      type: ContactType.Email,
      text: 'alibachar27@gmail.com',
      href: 'mailto:alibachar27@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Montréal QC, Canada',
      href: 'https://www.google.ca/maps/place/Montreal',
    },

    {
      type: ContactType.Github,
      text: 'Wlkn',
      href: 'https://github.com/Wlkn',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Wlkn'},
  {
    label: 'Stack Overflow',
    Icon: StackOverflowIcon,
    href: 'https://stackoverflow.com/users/20286553/mohamed-ali-bachar',
  },
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/MohamedAliBachar/'},

  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
