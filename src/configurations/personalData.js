import React from 'react';
import { Typography } from '@material-ui/core';

export default {
    name: 'Didier Dafond',
    title: 'Full-Stack Developer',
    profileImage: '/profile.jpg',
    bioImage: '/profile.jpg',
    email: 'didier.dafond@gmail.com',
    location: 'Switzerland',
    birthdate: {
        date: '09.10.1990',
        format: 'DD.MM.YYYY'
    },
    shortBio: `Hi 👋, I'm Didier Dafond and I'm a Full-Stack Developer`,
    longBio: (
        <React.Fragment>
            <p>
                I&apos;m Didier Dafond and I&apos;m a Full-Stack Developer since 2014. I like to experiment and work in team to keep up to date with
                new technologies. I have also a good electronic knowledge thanks to the high school&apos;s technical address. I have high expectations
                for myself and a strong work ethics. I always do my best by striving for the finest result without forgetting to pay attention to
                details.
            </p>
            <Typography variant="body2" align="center" color="textSecondary">
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                <i>&ldquo;Simplify, then add lightness&rdquo;</i> &mdash; Colin Chapman
            </Typography>
        </React.Fragment>
    )
};
