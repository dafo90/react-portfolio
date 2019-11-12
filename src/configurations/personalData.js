import React from 'react';
import { Typography } from '@material-ui/core';

export default {
    name: 'Didier Dafond',
    title: 'Full-Stack Developer',
    profileImage: '/profile.jpg',
    bioImage: '/profile.jpg',
    birthdate: {
        date: '09.10.1990',
        format: 'DD.MM.YYYY'
    },
    shortBio: `Hi 👋, I'm Didier Dafond and I'm a Full-Stack Developer. Welcome to my website!`,
    longBio: (
        <React.Fragment>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Duis congue, orci non hendrerit egestas, felis eros dignissim sapien, at accumsan augue massa ac tellus.</p>
            <p>
                Pellentesque arcu nibh, mattis ac sem id, faucibus interdum massa. Phasellus ex eros, tincidunt sed tincidunt non, ornare non est.
                Morbi sem ex, facilisis at congue sed, condimentum non lorem. Maecenas non sem nec lacus faucibus suscipit at sit amet libero. Proin
                mattis, tortor eu faucibus tincidunt, augue tortor ornare est, sit amet viverra purus justo eu orci. Curabitur non semper arcu, eget
                euismod erat. Nam volutpat consequat augue vel ornare. Integer venenatis dolor ac aliquam eleifend. Sed posuere quam urna, ut euismod
                velit varius vel.
            </p>
            <Typography variant="body2" align="center" color="textSecondary">
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                <i>&ldquo;Simplify, then add lightness&rdquo;</i> &mdash; Colin Chapman
            </Typography>
        </React.Fragment>
    )
};
