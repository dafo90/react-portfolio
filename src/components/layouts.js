import uuid from 'uuid/v4';
import NotFound from './layouts/404';
import AboutMe from './layouts/aboutme';
import Contact from './layouts/contact';
import Projects from './layouts/projects';
import Resume from './layouts/resume';

export default [
    { id: uuid(), name: 'About Me', component: AboutMe, url: '/aboutme', buttonName: 'About Me', notFoundPage: false, homepage: true, visible: true },
    { id: uuid(), name: 'Resume', component: Resume, url: '/resume', buttonName: 'Resume', notFoundPage: false, homepage: false, visible: true },
    {
        id: uuid(),
        name: 'Projects',
        component: Projects,
        url: '/projects',
        buttonName: 'Projects',
        notFoundPage: false,
        homepage: false,
        visible: true
    },
    { id: uuid(), name: 'Contact', component: Contact, url: '/contact', buttonName: 'Contact', notFoundPage: false, homepage: false, visible: true },
    { id: uuid(), name: 'Page not found', component: NotFound, link: undefined, notFoundPage: true, homepage: false, visible: true }
];
