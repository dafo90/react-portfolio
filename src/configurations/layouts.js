/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Person, FolderShared, Email, DeveloperMode } from '@material-ui/icons';
import { Link } from '@material-ui/core';
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
                    level: 5,
                    imageUrl: '/logos/npm.svg',
                    url: 'https://www.npmjs.com/',
                    name: 'npm',
                    description: 'Before you can even use Node.js or React, getting in touch with npm is mandatory.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/eslint.svg',
                    url: 'https://eslint.org',
                    name: 'ESLint',
                    description: 'Once tried it is impossible to do without it. Since I use JavaScript ESLint is my inseparable tool.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 4,
                    imageUrl: '/logos/nodejs.svg',
                    url: 'https://nodejs.org',
                    name: 'Node.js',
                    description: 'Starting from the end of 2017 Node.js has supported Java as back-end technology in my developer life.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 4,
                    imageUrl: '/logos/feathersjs.svg',
                    url: 'https://feathersjs.com',
                    name: 'Feathers',
                    description:
                        'I always used Node.js with Feathers. Like Spring for Java, Feathers is a framework to simplify the development of REST APIs in Node.js.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/react.svg',
                    url: 'https://reactjs.org',
                    name: 'React (Hooks)',
                    description: 'I started using React around the same time as Node.js. To better understand this technology I created this webpage.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/redux-saga.svg',
                    url: 'https://redux-saga.js.org',
                    name: 'Redux and Saga',
                    description: 'To build complex Apps with react this two libraries are indispensable.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 4,
                    imageUrl: '/logos/material.svg',
                    url: 'https://material-ui.com',
                    name: 'Material-UI',
                    description: 'After a few months with Semantic UI, the power and cleanliness of Material-UI "imposed" its introduction.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 4,
                    imageUrl: '/logos/mongodb.svg',
                    url: 'https://www.mongodb.com',
                    name: 'MongoDB',
                    description:
                        'To complete the transition to current technologies, MongoDB is absolutly the DB that best fits a server Node.js (for flexibility and method of use).'
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
                // maven
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/spring.svg',
                    url: 'https://spring.io',
                    name: 'Spring & Spring Boot',
                    description: 'Spring (and Spring Boot) is the framework for Java I use since 2014 to create web services.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/oracle.svg',
                    url: 'https://www.oracle.com',
                    name: 'Oracle DB',
                    description: 'Before using MongoDB the main database that I used was Oracle Database.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/git.svg',
                    url: 'https://git-scm.com',
                    name: 'Git',
                    description: 'Git... Can you really develop without it!?'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 2,
                    imageUrl: '/logos/rancher.svg',
                    url: 'https://rancher.com',
                    name: 'Rancher',
                    description: 'I use Rancher (litterally as user) to manage the deployed Apps.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 3,
                    imageUrl: '/logos/docker.svg',
                    url: 'https://www.docker.com',
                    name: 'Docker',
                    description: 'Quite the same of Rancher, but in this case I use Docker a little bit deeper with my home server.'
                },
                // raspberry
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/arduino.svg',
                    url: 'https://www.arduino.cc',
                    name: 'Arduino',
                    description: 'Arduino is more like one of my hobbies. I like being able to build small, low-cost circuits at home.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/wordpress.svg',
                    url: 'https://wordpress.com',
                    name: 'WordPress',
                    description: 'In some cases the fastest, simplest and most immediate choice...'
                },
                {
                    id: uuid(),
                    enabled: true,
                    main: true,
                    level: 5,
                    imageUrl: '/logos/latex.svg',
                    url: 'https://www.latex-project.org',
                    name: 'LaTeX',
                    description: 'Simply LaTeX is my favorite typesetting system!'
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
        enabled: true,
        content: {
            skills: [
                {
                    id: uuid(),
                    title: 'Programming',
                    description: 'Java · JavaScript · ActionScript · LaTeX · Bash · C/C++',
                    image: '/icons/dev.png'
                },
                { id: uuid(), title: 'Back-end', description: 'Spring & Spring Boot · NodeJS (FeathersJS & Express)', image: '/icons/gear.png' },
                {
                    id: uuid(),
                    title: 'Front-end',
                    description: 'React · Redux & Saga · Material-UI · HTML5 · CSS · Flex · JSP',
                    image: '/icons/frames.png'
                },
                { id: uuid(), title: 'Database', description: 'Oracle Database · MySQL · MongoDB', image: '/icons/bookshelf.png' },
                {
                    id: uuid(),
                    title: 'DevOps',
                    description: 'Docker · Rancher · Jenkins · Kibana · Atlassian Suite · Nexus',
                    image: '/icons/speedometer.png'
                },
                {
                    id: uuid(),
                    title: 'Tools',
                    description: 'Npm · Maven · Git · Tomcat & JBoss · Postman · IntelliJ IDEA · Visual Studio Code · NetBeans',
                    image: '/icons/tools.png'
                },
                { id: uuid(), title: 'CMS', description: 'WordPress', image: '/icons/browser.png' },
                { id: uuid(), title: 'Hardware', description: 'Arduino · Raspberry', image: '/icons/computer.png' }
            ],
            languages: [
                { id: uuid(), title: 'Italian', description: 'Mother tongue', image: '/flags/italy.png' },
                {
                    id: uuid(),
                    title: 'English',
                    description: 'Technical - Good technical notions, basic spoken and writing',
                    image: '/flags/unitedkingdom.png'
                },
                { id: uuid(), title: 'German', description: 'Intermediate - Good spoken and written notions', image: '/flags/germany.png' },
                { id: uuid(), title: 'French', description: 'Basic - Basic spoken and written notions', image: '/flags/france.png' }
            ],
            courses: [
                {
                    id: uuid(),
                    title: '2019',
                    description: 'M001: MongoDB Basics',
                    others: 'MongoDB University',
                    image: '/logos/mongodbuniversity.png'
                },
                {
                    id: uuid(),
                    title: '2016',
                    description: 'ITIL Foundation certificate in IT Service Management',
                    others: 'AXELOS',
                    image: '/logos/itil.jpeg'
                },
                {
                    id: uuid(),
                    title: '2012',
                    description: 'Zertifikat Deutsch TELC B1',
                    others: 'Carl Duisberg, D-78315 Radolfzell (Germany)',
                    image: '/logos/telc.png'
                }
            ],
            awards: [
                {
                    id: uuid(),
                    title: '2010',
                    description: 'Third best grade of Technical Professional Maturity, Scuola Arti e Mestieri di Bellinzona (SAMB)',
                    image: '/icons/trophy.png'
                }
            ],
            knowMeMore: [
                {
                    id: uuid(),
                    title: 'Good knowledge of electronics in general',
                    image: '/icons/bolt.png'
                },
                { id: uuid(), title: 'Passionate about combustion engines (ICE) and the automotive world in general', image: '/icons/car.png' },
                { id: uuid(), title: "80's Arcade Cabinet Machine enthusiast; built five entirely by myself", image: '/icons/gamecontroller.png' },
                {
                    id: uuid(),
                    title: 'Active in the carnival group of Castione (Sciatt) as a committee mebmer since 2014 and accountant since 2018',
                    image: '/icons/trends.png'
                }
            ],
            worksAndSchools: [
                {
                    id: uuid(),
                    enabled: true,
                    imageUrl: '/logos/eoc.svg',
                    imageAlt: 'EOC',
                    date: '2014 - Present',
                    title: (
                        <div>
                            {'Full-Stack Developer '}
                            <Link color="inherit" underline="always" href="https://www.eoc.ch" target="_blank" rel="noreferrer">
                                @EOC
                            </Link>
                        </div>
                    ),
                    subtitle: 'Ente Ospedaliero Cantonale, CH-6500 Bellinzona',
                    description:
                        "Full-Stack developer mainly in Java (Spring & Spring Boot) and Oracle Database as back-end and React Hooks as front-end. Since the end of 2017 the back-end's development moved gradually on NodeJS (with framework FeathersJS) and MongoDB as database. Using Jenkins as a build & deploy system, Docker (with Rancher) as a service manager and Kibana as a log aggregator."
                },
                {
                    id: uuid(),
                    enabled: true,
                    imageUrl: '/logos/supsi.png',
                    imageAlt: 'SUPSI',
                    date: '2011 - 2014',
                    title: (
                        <div>
                            {"Bachelor's in Computer Science "}
                            <Link color="inherit" underline="always" href="http://www.supsi.ch" target="_blank" rel="noreferrer">
                                @SUPSI
                            </Link>
                        </div>
                    ),
                    subtitle: 'Scuola Universitaria della Svizzera Italiana, CH-6928 Manno',
                    description:
                        "Diploma's project: P2P photo sharing via gesture recognition. Experience with basic AI in gesture recognition and the (old) Android framework."
                },
                {
                    id: uuid(),
                    enabled: true,
                    imageUrl: '/logos/arbedo-castione.svg',
                    imageAlt: 'Arbedo-Castione',
                    date: '2010 - 2011',
                    url: 'https://www.arbedocastione.ch',
                    title: (
                        <div>
                            {'Civil Service '}
                            <Link color="inherit" underline="always" href="https://www.arbedocastione.ch" target="_blank" rel="noreferrer">
                                @Municipality of Arbedo-Castione
                            </Link>
                        </div>
                    ),
                    subtitle: 'Municipio di Arbedo-Castione, CH-6517 Arbedo',
                    description:
                        'Mainly administrative work with Microsoft Office suite, cadastral map updating and two months (one in 2016 and one in 2017) of landscaping and gardening work. Ended in 2017.'
                },
                {
                    id: uuid(),
                    enabled: true,
                    imageUrl: '/logos/samb.png',
                    imageAlt: 'SAMB',
                    date: '2006 - 2010',
                    title: (
                        <div>
                            {'Federal Proficiency Certificate and Certificate of Technical Professional Maturity '}
                            <Link color="inherit" underline="always" href="http://www.samb.ti.ch" target="_blank" rel="noreferrer">
                                @SAMB
                            </Link>
                        </div>
                    ),
                    subtitle: 'Scuola Arti e Mestieri Bellinzona, CH-6500 Bellinzona',
                    description: "Electronics' notions and development of simple software for microprocessors."
                }
            ]
        }
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
