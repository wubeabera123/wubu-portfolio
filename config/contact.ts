export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
  // buymeacoffee = 'buymeacoffee',
  // googlescholar = 'googlescholar',
  instagram = 'instagram',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@wubethelearner',
  site: 'https://wubu-portfolio-website.vercel.app/',
  calendly: 'https://calendly.com/wubeabera123',
  links: {
    github: 'https://github.com/wubeabera123',
    linkedin: 'https://www.linkedin.com/in/wubeshet-abera-8ab52b26a',
    instagram: 'https://www.instagram.com/wubu4950/?theme=dark',
    // googlescholar:
    //   'https://scholar.google.com/citations?user=8wIfeAsAAAAJ&hl=en',
    twitter: 'https://x.com/wubethelearner',
    email: 'mailto:wubeabera123@gmail.com',
    // buymeacoffee: 'https://www.buymeacoffee.com/karanps',
  },
};
