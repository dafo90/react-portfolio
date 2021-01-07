export default {
    username: 'dafo90',
    url: 'https://github.com/dafo90',
    repos: [
        {
            id: 209611683,
            name: 'React Portfolio',
            enabled: true,
            main: true,
            description: 'React Portfolio built with React, Material-UI, Redux and Saga',
        },
        {
            id: 215624053,
            name: 'Tic-Tac-Toe',
            enabled: true,
            main: true,
            description: 'Tic-Tac-Toe game built with React, Material-UI, Redux and Saga',
        },
        {
            id: 228206818,
            name: 'DIY Arcade Cabinet',
            enabled: true,
            main: true,
            description: 'Instruction to build your own customized Arcade Cabinet',
            imageUrl: '/images/arcade-cabinet.JPG',
        },
        {
            id: 182591319,
            name: 'Node Password Generator',
            enabled: true,
            main: true,
        },
        {
            id: 186187657,
            name: 'Telegram Bot Docker Manager',
            enabled: true,
            main: true,
        },
        {
            id: 218816700,
            name: 'Docker - vsftpd',
            enabled: true,
            main: false,
        },
        {
            id: 230647506,
            name: 'Raspberry Pi Scripts',
            enabled: true,
            main: false,
            description: 'Raspberry Pi Scripts to manage power on/off button and one fan in PWM mode',
        },
        {
            id: 142853515,
            name: 'Caldera Forms Anti Spam',
            enabled: true,
            main: false,
        },
    ],
    tags: [
        {
            fieldName: 'license',
            params: [
                { fieldName: 'text', type: 'field', value: 'spdx_id' },
                { fieldName: 'tooltip', type: 'text', value: 'License' },
                { fieldName: 'icon', type: 'icon', value: 'gavel' },
                { fieldName: 'url', type: 'field', value: 'html_url' },
                { fieldName: 'color', type: 'text', value: 'secondary' },
                { fieldName: 'variant', type: 'text', value: 'default' },
            ],
        },
        {
            fieldName: 'language',
            params: [
                { fieldName: 'text', type: 'this' },
                { fieldName: 'tooltip', type: 'text', value: 'Language' },
                { fieldName: 'icon', type: 'icon', value: 'code' },
                { fieldName: 'color', type: 'text', value: 'secondary' },
                { fieldName: 'variant', type: 'text', value: 'default' },
            ],
        },
        {
            fieldName: 'archived',
            onlyIf: true,
            params: [
                { fieldName: 'text', type: 'text', value: 'Archived' },
                { fieldName: 'icon', type: 'icon', value: 'business_center' },
                { fieldName: 'color', type: 'text', value: 'default' },
                { fieldName: 'variant', type: 'text', value: 'outlined' },
            ],
        },
        {
            fieldName: 'watchers_count',
            params: [
                { fieldName: 'text', type: 'this' },
                { fieldName: 'tooltip', type: 'text', value: 'Watchers' },
                { fieldName: 'icon', type: 'icon', value: 'visibility' },
                { fieldName: 'color', type: 'text', value: 'secondary' },
                { fieldName: 'variant', type: 'text', value: 'outlined' },
            ],
        },
        {
            fieldName: 'stargazers_count',
            params: [
                { fieldName: 'text', type: 'this' },
                { fieldName: 'tooltip', type: 'text', value: 'Stars' },
                { fieldName: 'icon', type: 'icon', value: 'star' },
                { fieldName: 'color', type: 'text', value: 'secondary' },
                { fieldName: 'variant', type: 'text', value: 'outlined' },
            ],
        },
        {
            fieldName: 'forks_count',
            params: [
                { fieldName: 'text', type: 'this' },
                { fieldName: 'tooltip', type: 'text', value: 'Forks' },
                { fieldName: 'icon', type: 'icon', value: 'call_split' },
                { fieldName: 'color', type: 'text', value: 'secondary' },
                { fieldName: 'variant', type: 'text', value: 'outlined' },
            ],
        },
    ],
};
