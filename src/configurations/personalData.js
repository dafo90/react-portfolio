import { Link, Typography } from '@material-ui/core';
import React from 'react';

export default {
    name: 'Didier Dafond',
    title: 'Full-Stack Developer',
    profileImage: '/profile.jpg',
    bioImage: '/background.jpg',
    email: 'didier.dafond@gmail.com',
    cvPdf: '/docs/cv.pdf',
    location: 'Switzerland',
    birthdate: {
        date: '09.10.1990',
        format: 'DD.MM.YYYY',
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
            <p>
                This website was born in 2019 from my need to learn more deeply and practice with React Hooks and Material-UI, with which I decided to
                build something useful but simple as a web CV. Any improvements regarding this project is more than welcome, bearing in mind that the
                main focus is to be able to make it as generic as possible so that any other user could benefit from its use.
                {' ' /* eslint-disable-next-line react/jsx-one-expression-per-line */}
                The project is public on{' '}
                <Link
                    color="inherit"
                    underline="always"
                    component="a"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/dafo90/react-porfolio"
                >
                    GitHub
                </Link>
                .
            </p>
            <Typography variant="body2" align="center" color="textSecondary">
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                <i>&ldquo;Simplify, then add lightness&rdquo;</i> &mdash; Colin Chapman
            </Typography>
        </React.Fragment>
    ),
};
