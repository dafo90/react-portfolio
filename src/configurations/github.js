import uuid from 'uuid/v4';
// import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton } from 'react-share';
// import { TiSocialFacebook, TiSocialInstagram, TiSocialGithub, TiSocialLinkedin, TiSocialFlickr } from 'react-icons/ti';
import { Gavel, Code, CallSplit, Visibility, Star, BusinessCenter } from '@material-ui/icons';

export default {
    username: 'dafo90',
    url: 'https://github.com/dafo90',
    dateFormat: 'YYYY-MM-DDTHH:mm:ssZ',
    repos: [
        {
            id: 215624053,
            name: 'Tic-Tac-Toe',
            enabled: true,
            main: true,
            description: 'Tic-Tac-Toe game built with React, Material-UI, Redux and Saga'
            // share: [
            //     { socialButton: FacebookShareButton, key: 'facebook', icon: TiSocialFacebook },
            //     { socialButton: LinkedinShareButton, key: 'linkedin' },
            //     { socialButton: TwitterShareButton, key: 'twitter' },
            //     { socialButton: WhatsappShareButton, key: 'whatsapp' },
            //     { socialButton: EmailShareButton, key: 'email' }
            // ],
            // demo: 'https://dafo90.github.io/tic-tac-toe'
        },
        {
            id: 182591319,
            name: 'Node Password Generator',
            enabled: true,
            main: true
        },
        {
            id: 186187657,
            name: 'Telegram Bot Docker Manager',
            enabled: true,
            main: true
        },
        {
            id: 218816700,
            name: 'Docker - vsftpd',
            enabled: true,
            main: false
        },
        {
            id: 142853515,
            name: 'Caldera Forms Anti Spam',
            enabled: true,
            main: false
        }
    ],
    buildTags: (archived, completeLicense, language, forks, watchers, stars) => {
        const tags = [];

        if (completeLicense) {
            tags.push({
                id: uuid(),
                text: completeLicense.spdx_id,
                tooltip: 'License',
                icon: Gavel,
                color: 'secondary',
                variant: 'default',
                url: completeLicense.html_url
            });
        }

        tags.push({
            id: uuid(),
            text: language || 'Unknown',
            tooltip: 'Language',
            icon: Code,
            color: 'secondary',
            variant: 'default'
        });

        if (archived) {
            tags.push({
                id: uuid(),
                text: 'Archived',
                icon: BusinessCenter,
                color: 'default',
                variant: 'outlined'
            });
        } else {
            tags.push({
                id: uuid(),
                text: watchers,
                tooltip: 'Watchers',
                icon: Visibility,
                color: 'secondary',
                variant: 'outlined'
            });

            tags.push({
                id: uuid(),
                text: stars,
                tooltip: 'Stars',
                icon: Star,
                color: 'secondary',
                variant: 'outlined'
            });

            tags.push({
                id: uuid(),
                text: forks,
                tooltip: 'Forks',
                icon: CallSplit,
                color: 'secondary',
                variant: 'outlined'
            });
        }

        return tags;
    }
};
