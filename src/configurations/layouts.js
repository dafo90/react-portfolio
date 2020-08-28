/* eslint-disable react/jsx-curly-brace-presence */
import { Link } from '@material-ui/core';
import { DeveloperMode, Email, Extension, FolderShared, Person } from '@material-ui/icons';
import React from 'react';
import { v4 as uuid } from 'uuid';

import AboutMe from '../components/layouts/aboutme/AboutMe';
import Contact from '../components/layouts/contact/Contact';
import Projects from '../components/layouts/projects/Projects';
import Resume from '../components/layouts/resume/Resume';
import Skills from '../components/layouts/skills/Skills';
import github from './github';

export default [
    {
        id: uuid(),
        code: 'aboutme',
        title: 'About Me',
        component: AboutMe,
        urls: ['/', '/aboutme'],
        buttonLabel: 'About Me',
        icon: Person,
        homepage: true,
        enabled: true,
        content: {},
    },
    {
        id: uuid(),
        code: 'resume',
        title: 'Resume',
        component: Resume,
        urls: ['/resume'],
        buttonLabel: 'Resume',
        icon: FolderShared,
        homepage: false,
        enabled: true,
        content: {
            skills: [
                {
                    id: uuid(),
                    title: 'Programming',
                    description: 'Java · JavaScript · ActionScript · LaTeX · Bash · C/C++',
                    image: '/icons/dev.png',
                },
                { id: uuid(), title: 'Back-end', description: 'Spring & Spring Boot · NodeJS (FeathersJS & Express)', image: '/icons/gear.png' },
                {
                    id: uuid(),
                    title: 'Front-end',
                    description: 'React · Redux & Saga · Material-UI · HTML5 · CSS · Flex · JSP',
                    image: '/icons/frames.png',
                },
                { id: uuid(), title: 'Database', description: 'Oracle Database · MySQL · MongoDB', image: '/icons/bookshelf.png' },
                {
                    id: uuid(),
                    title: 'DevOps',
                    description: 'Docker · Rancher · Jenkins · Kibana · Atlassian Suite · Nexus',
                    image: '/icons/speedometer.png',
                },
                {
                    id: uuid(),
                    title: 'Tools',
                    description: 'Npm · Maven · Git · Tomcat & JBoss · Postman · IntelliJ IDEA · Visual Studio Code · NetBeans',
                    image: '/icons/tools.png',
                },
                { id: uuid(), title: 'CMS', description: 'WordPress', image: '/icons/browser.png' },
                { id: uuid(), title: 'Hardware', description: 'Arduino · Raspberry', image: '/icons/computer.png' },
            ],
            languages: [
                { id: uuid(), title: 'Italian', level: 'native speaker', image: '/flags/italy.png' },
                {
                    id: uuid(),
                    title: 'English',
                    level: 3,
                    description: 'Technical - Good technical notions, basic spoken and writing',
                    image: '/flags/unitedkingdom.png',
                },
                { id: uuid(), title: 'German', level: 2, description: 'Intermediate - Good spoken and written notions', image: '/flags/germany.png' },
                { id: uuid(), title: 'French', level: 1, description: 'Basic - Basic spoken and written notions', image: '/flags/france.png' },
            ],
            courses: [
                {
                    id: uuid(),
                    title: '2019',
                    description: 'M001: MongoDB Basics',
                    others: 'MongoDB University',
                    image: '/logos/mongodbuniversity.png',
                },
                {
                    id: uuid(),
                    title: '2016',
                    description: 'ITIL Foundation certificate in IT Service Management',
                    others: 'AXELOS',
                    image: '/logos/itil.jpeg',
                },
                {
                    id: uuid(),
                    title: '2012',
                    description: 'Zertifikat Deutsch TELC B1',
                    others: 'Carl Duisberg, D-78315 Radolfzell (Germany)',
                    image: '/logos/telc.png',
                },
            ],
            awards: [
                {
                    id: uuid(),
                    title: '2010',
                    description: 'Third best grade of Technical Professional Maturity, Scuola Arti e Mestieri di Bellinzona (SAMB)',
                    image: '/icons/trophy.png',
                },
            ],
            knowMeMore: [
                {
                    id: uuid(),
                    title: 'Good knowledge of electronics in general',
                    image: '/icons/bolt.png',
                },
                { id: uuid(), title: 'Passionate about combustion engines (ICE) and the automotive world in general', image: '/icons/car.png' },
                { id: uuid(), title: "80's Arcade Cabinet Machine enthusiast; built five entirely by myself", image: '/icons/gamecontroller.png' },
                {
                    id: uuid(),
                    title: 'Active in the carnival group of Castione (Sciatt) as a committee member since 2014 and accountant since 2018',
                    image: '/icons/trends.png',
                },
            ],
            interests: [
                { label: 'Ice Hockey', value: 4 },
                { label: 'Cars (ICE)', value: 5 },
                { label: 'Bike', value: 1 },
                { label: 'Mountain', value: 2 },
                { label: 'DIY Arcade Cabinet', value: 3 },
            ],
            worksAndSchools: [
                {
                    id: uuid(),
                    enabled: true,
                    imageUrl: '/logos/eoc.svg',
                    imageAlt: 'EOC',
                    date: '2014 - Present',
                    title: (
                        <React.Fragment>
                            {'Full-Stack Developer '}
                            <Link color="inherit" underline="always" href="https://www.eoc.ch" target="_blank" rel="noreferrer">
                                @EOC
                            </Link>
                        </React.Fragment>
                    ),
                    subtitle: 'Ente Ospedaliero Cantonale, CH-6500 Bellinzona',
                    description:
                        "Full-Stack developer mainly in Java (Spring & Spring Boot) and Oracle Database as back-end and React Hooks as front-end. Since the end of 2017 the back-end's development moved gradually on NodeJS (with framework FeathersJS) and MongoDB as database. We also use Jenkins as a build & deploy system, Docker (with Rancher) as a service manager and Kibana as a log aggregator.",
                },
                {
                    id: uuid(),
                    enabled: true,
                    imageUrl: '/logos/supsi.png',
                    imageAlt: 'SUPSI',
                    date: '2011 - 2014',
                    title: (
                        <React.Fragment>
                            {"Bachelor's in Computer Science "}
                            <Link color="inherit" underline="always" href="http://www.supsi.ch" target="_blank" rel="noreferrer">
                                @SUPSI
                            </Link>
                        </React.Fragment>
                    ),
                    subtitle: 'Scuola Universitaria Professionale della Svizzera Italiana, CH-6928 Manno',
                    description:
                        "Diploma's project: P2P photo sharing via gesture recognition. Experience with basic AI in gesture recognition and the (old) Android framework.",
                },
                {
                    id: uuid(),
                    enabled: true,
                    imageUrl: '/logos/arbedo-castione.svg',
                    imageAlt: 'Arbedo-Castione',
                    date: '2010 - 2011',
                    url: 'https://www.arbedocastione.ch',
                    title: (
                        <React.Fragment>
                            {'Civil Service '}
                            <Link color="inherit" underline="always" href="https://www.arbedocastione.ch" target="_blank" rel="noreferrer">
                                @Municipality of Arbedo-Castione
                            </Link>
                        </React.Fragment>
                    ),
                    subtitle: 'Municipio di Arbedo-Castione, CH-6517 Arbedo',
                    description:
                        'Mainly administrative work with Microsoft Office suite, cadastral map updating and two months (one in 2016 and one in 2017) of landscaping and gardening work. Ended in 2017.',
                },
                {
                    id: uuid(),
                    enabled: true,
                    imageUrl: '/logos/samb.png',
                    imageAlt: 'SAMB',
                    date: '2006 - 2010',
                    title: (
                        <React.Fragment>
                            {'Federal Proficiency Certificate and Certificate of Technical Professional Maturity '}
                            <Link color="inherit" underline="always" href="http://www.samb.ti.ch" target="_blank" rel="noreferrer">
                                @SAMB
                            </Link>
                        </React.Fragment>
                    ),
                    subtitle: 'Scuola Arti e Mestieri Bellinzona, CH-6500 Bellinzona',
                    description: "Electronics' notions and development of simple software for microprocessors.",
                },
            ],
        },
    },
    {
        id: uuid(),
        code: 'projects',
        title: 'Projects',
        subtitle: (
            <React.Fragment>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                All my personal Project Sources are published on{' '}
                <Link color="inherit" underline="always" href={github.url} target="_blank" rel="noreferrer">
                    GitHub
                </Link>
            </React.Fragment>
        ),
        component: Projects,
        urls: ['/projects'],
        buttonLabel: 'Projects',
        icon: DeveloperMode,
        homepage: false,
        enabled: true,
        content: {},
    },
    {
        id: uuid(),
        code: 'skills',
        title: 'Technical Skills',
        subtitle: 'A short list of my major Skills',
        component: Skills,
        urls: ['/skills'],
        buttonLabel: 'Skills',
        icon: Extension,
        homepage: false,
        enabled: true,
        content: {},
    },
    {
        id: uuid(),
        code: 'contact',
        title: 'Contact',
        subtitle: 'Get in touch',
        component: Contact,
        urls: ['/contact'],
        buttonLabel: 'Contact',
        icon: Email,
        homepage: false,
        enabled: true,
        content: {
            googleRecaptchaClientSiteKey: '6LcybtAUAAAAABoPFS-l2HodL_NRrZIGOTDqULmd',
            formSubmitUrl: 'https://formspree.io/xyyzybdj',
        },
    },
];
