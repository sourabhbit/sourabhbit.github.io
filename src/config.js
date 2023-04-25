module.exports = {
  siteTitle: 'Sourabh Kumar | Frontend Developer',
  siteDescription:
    'Sourabh Kumar is a Frontend Developer at Lenskart, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Sourabh Kumar, Sourabh, Kumar, Sourabhbit, software engineer, frontend developer, crud vue, crud react, crud angular, web developer, javascript, datametica, Gomoh, lenskart, bit, mesra, deoghar',
  siteUrl: 'https://sourabhbi.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sourabh Kumar',
  location: 'Bangalore, India',
  email: 'kumarsourabh556@gmail.com',
  github: 'https://github.com/sourabhbit',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sourabhbit',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sourabhbit/',
    },
    // {
    //   name: 'Stackoverflow',
    //   url: 'https://codepen.io/SourabhKumar7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kumarsourabh556',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
