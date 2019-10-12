import uuid from 'uuid/v4';
import { Gavel, Code, CallSplit, Visibility, Star, BusinessCenter } from '@material-ui/icons';

export default {
    username: 'dafo90',
    dateFormat: 'YYYY-MM-DDTHH:mm:ssZ',
    repos: [
        {
            id: 142853515,
            name: 'caldera-forms-anti-spam',
            enabled: true,
            main: false,
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
                color: 'default',
                variant: 'default',
                url: completeLicense.html_url
            });
        }

        tags.push({
            id: uuid(),
            text: language || 'Unknown',
            tooltip: 'Language',
            icon: Code,
            color: 'default',
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
                color: 'default',
                variant: 'outlined'
            });

            tags.push({
                id: uuid(),
                text: stars,
                tooltip: 'Stars',
                icon: Star,
                color: 'default',
                variant: 'outlined'
            });

            tags.push({
                id: uuid(),
                text: forks,
                tooltip: 'Forks',
                icon: CallSplit,
                color: 'default',
                variant: 'outlined'
            });
        }

        return tags;
    }
};
