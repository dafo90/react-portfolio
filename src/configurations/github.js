import uuid from 'uuid/v4';
import { Gavel, Code, CallSplit, Visibility, Star, BusinessCenter } from '@material-ui/icons';

export default {
    username: 'dafo90',
    url: 'https://github.com/dafo90',
    dateFormat: 'YYYY-MM-DDTHH:mm:ssZ',
    repos: [
        {
            id: 215624053,
            name: 'tic-tac-toe',
            enabled: true,
            main: true,
            imageUrl: undefined
        },
        {
            id: 182591319,
            name: 'node-password-generator',
            enabled: true,
            main: true,
            imageUrl: undefined
        },
        {
            id: 186187657,
            name: 'telegram-bot-docker-manager',
            enabled: true,
            main: true,
            imageUrl: '/logos/telegram-bot-docker-manager.png'
        },
        {
            id: 142853515,
            name: 'caldera-forms-anti-spam',
            enabled: true,
            main: false,
            imageUrl: undefined
        }
    ],
    buildTags: (archived, completeLicense, language, forks, watchers, stars) => {
        const tags = [];

        tags.push({
            id: uuid(),
            text: completeLicense ? completeLicense.spdx_id : '-',
            tooltip: 'License',
            icon: Gavel,
            color: 'secondary',
            variant: 'default',
            url: completeLicense ? completeLicense.html_url : undefined
        });

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
