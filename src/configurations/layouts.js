import { Person, FolderShared, Email, DeveloperMode } from '@material-ui/icons';
import uuid from 'uuid/v4';
import AboutMe from '../components/layouts/aboutme/AboutMe';
import Contact from '../components/layouts/contact/Contact';
import Projects from '../components/layouts/projects/Projects';
import Resume from '../components/layouts/resume/Resume';

export default [
    {
        id: uuid(),
        code: 'aboutme',
        label: 'About Me',
        component: AboutMe,
        urls: ['/', '/aboutme'],
        buttonLabel: 'About Me',
        icon: Person,
        homepage: true,
        enabled: true,
        content: {
            skills: [
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/js.svg',
                    url: 'https://www.javascript.com',
                    name: 'JavaScript',
                    description:
                        'I started developing in JavaScript in 2017, thanks to the continuous improvements of this language I can now exploit its potential.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 6,
                    imageUrl: '/logos/java.svg',
                    url: 'https://www.javascript.com',
                    name: 'Java EE',
                    description: 'Java is the language I use mainly since 2014, notwithstanding JavaScript in the last few years is taking over.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/spring.svg',
                    url: 'https://spring.io',
                    name: 'Spring & Spring Boot',
                    description: 'Spring (and Spring Boot) is the framework for Java I use since 2014 to create web services.'
                }
            ]
        }
    },
    {
        id: uuid(),
        code: 'resume',
        label: 'Resume',
        component: Resume,
        urls: ['/resume'],
        buttonLabel: 'Resume',
        icon: FolderShared,
        homepage: false,
        enabled: false,
        content: {}
    },
    {
        id: uuid(),
        code: 'projects',
        label: 'Projects',
        component: Projects,
        urls: ['/projects'],
        buttonLabel: 'Projects',
        icon: DeveloperMode,
        homepage: false,
        enabled: true,
        content: {}
    },
    {
        id: uuid(),
        code: 'contact',
        label: 'Contact',
        component: Contact,
        urls: ['/contact'],
        buttonLabel: 'Contact',
        icon: Email,
        homepage: false,
        enabled: true,
        content: {
            googleRecaptchaClientSiteKey: '6LfnwsQUAAAAAM4sjdJb7BPUe-Bv0SzZksDJQCkB',
            formSubmitUrl: 'https://formspree.io/xyyzybdj'
        }
    }
];
