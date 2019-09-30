import React from 'react';
import uuid from 'uuid/v4';
import { Person, FolderShared, Email, DeveloperMode } from '@material-ui/icons';
import AboutMe from './aboutme/AboutMe';
import Contact from './contact/Contact';
import NotFound from './notfound/NotFound';
import Projects from './projects/Projects';
import Resume from './resume/Resume';

export default [
    {
        id: uuid(),
        label: 'About Me',
        component: AboutMe,
        urls: ['/', '/aboutme'],
        buttonLabel: 'About Me',
        icon: <Person />,
        active: true
    },
    { id: uuid(), label: 'Resume', component: Resume, urls: ['/resume'], buttonLabel: 'Resume', icon: <FolderShared />, active: true },
    {
        id: uuid(),
        label: 'Projects',
        component: Projects,
        urls: ['/projects'],
        buttonLabel: 'Projects',
        icon: <DeveloperMode />,
        active: true
    },
    {
        id: uuid(),
        label: 'Contact',
        component: Contact,
        urls: ['/contact'],
        buttonLabel: 'Contact',
        icon: <Email />,
        active: true
    },
    { id: uuid(), label: 'Page not found', component: NotFound, active: true }
];
