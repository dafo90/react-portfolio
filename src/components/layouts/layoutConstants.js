import uuid from 'uuid/v4';
import AboutMe from './aboutme/AboutMe';
import Contact from './contact/Contact';
import NotFound from './notfound/NotFound';
import Projects from './projects/Projects';
import Resume from './resume/Resume';

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
