import uuid from 'uuid/v4';
import { TiSocialFacebook, TiSocialInstagram, TiSocialGithub, TiSocialLinkedin, TiSocialFlickr } from 'react-icons/ti';

export default [
    {
        id: uuid(),
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/didierdafond',
        icon: TiSocialLinkedin,
        enabled: true
    },
    {
        id: uuid(),
        name: 'GitHub',
        url: 'https://github.com/dafo90',
        icon: TiSocialGithub,
        enabled: true
    },
    {
        id: uuid(),
        name: 'Flickr',
        url: 'https://flickr.com/people/140115200@N07',
        icon: TiSocialFlickr,
        enabled: true
    },
    {
        id: uuid(),
        name: 'Facebook',
        url: 'https://facebook.com/didier.dafond',
        icon: TiSocialFacebook,
        enabled: true
    },
    {
        id: uuid(),
        name: 'Instagram',
        url: 'https://instagram.com/didierdafond',
        icon: TiSocialInstagram,
        enabled: true
    }
];
