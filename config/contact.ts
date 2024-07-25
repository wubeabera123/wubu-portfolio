export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  email = 'email',
  instagram = 'instagram',
}

export interface Contact {
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  links: {
    github: 'https://github.com/wubeabera123',
    linkedin:
      'https://www.linkedin.com/in/wubeshet-abera-8ab52b26a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhebAyRWxRIetA6pIdcQNaw%3D%3D',
    instagram: 'https://www.instagram.com/wubu4950/?theme=dark',
    twitter: 'https://x.com/wubethelearner',
    email: 'wubeabera123@gmail.com',
  },
};
