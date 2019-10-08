import { Person, FolderShared, Email, DeveloperMode } from '@material-ui/icons';
import uuid from 'uuid/v4';
import AboutMe from '../components/layouts/aboutme/AboutMe';
import Contact from '../components/layouts/contact/Contact';
import Projects from '../components/layouts/projects/Projects';
import Resume from '../components/layouts/resume/Resume';

export default [
    {
        id: uuid(),
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
                    iconUrl: '/logos/js.svg',
                    name: 'JavaScript',
                    description:
                        'I started developing in JavaScript in 2017, thanks to the continuous improvements of this language I can now exploit its potential.'
                },
                {
                    id: uuid(),
                    iconUrl: '/logos/java.svg',
                    name: 'Java EE',
                    description: 'Java is the language I use mainly since 2014, notwithstanding JavaScript in the last few years is taking over.'
                },
                {
                    id: uuid(),
                    iconUrl: '/logos/spring.svg',
                    name: 'Spring & Spring Boot',
                    description: 'Spring (and Spring Boot) is the framework for Java I use since 2014 to create web services.'
                }
            ]
        }
    },
    {
        id: uuid(),
        label: 'Resume',
        component: Resume,
        urls: ['/resume'],
        buttonLabel: 'Resume',
        icon: FolderShared,
        homepage: false,
        enabled: true,
        content: {}
    },
    {
        id: uuid(),
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
        label: 'Contact',
        component: Contact,
        urls: ['/contact'],
        buttonLabel: 'Contact',
        icon: Email,
        homepage: false,
        enabled: true,
        content: {}
    }
];
