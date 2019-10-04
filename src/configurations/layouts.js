import React from 'react';
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
        icon: <Person />,
        enabled: true
    },
    { id: uuid(), label: 'Resume', component: Resume, urls: ['/resume'], buttonLabel: 'Resume', icon: <FolderShared />, enabled: true },
    {
        id: uuid(),
        label: 'Projects',
        component: Projects,
        urls: ['/projects'],
        buttonLabel: 'Projects',
        icon: <DeveloperMode />,
        enabled: true
    },
    {
        id: uuid(),
        label: 'Contact',
        component: Contact,
        urls: ['/contact'],
        buttonLabel: 'Contact',
        icon: <Email />,
        enabled: true
    }
];
