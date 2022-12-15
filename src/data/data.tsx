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
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header.jpg';
// import porfolioImage1 from '../images/portfolio/counterapp.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage2 from '../images/portfolio/quiz.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
      href: 'https://drive.google.com/file/d/125G05Y8Sq9fuZRT8Pc2wZuLyUjJzoc5B/view?usp=sharing',
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
    description: 'A Javascript Quiz that uses an external API.',
    url: 'https://wlkn.github.io/Quiz_Javascript',
    image: porfolioImage4
  },
  {
    title: 'Time Calculator',
    description: 'A Calculator that can also calculate with time, made with React.',
    url: 'https://wlkn.github.io/Time-Calculator-App',
    image: porfolioImage5,
  },
  {
    title: 'Tally-Ho Counter',
    description: 'A Javascript Counter that can count with jumps of 1 to 100.',
    url: 'https://wlkn.github.io/Javascript-CounterApp',
    image: porfolioImage6,
  },
 
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
      name: 'Coming..',
      text: 'Coming..',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Coming soon..',
      text: ' ',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
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
