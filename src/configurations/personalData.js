import React from 'react';

export default {
    name: 'Didier Dafond',
    title: 'Full-Stack Developer',
    profileImage: '/profile.jpg',
    bioImage: '/profile.jpg',
    birthdate: {
        date: '09.10.1990',
        format: 'DD.MM.YYYY'
    },
    shortBio: `Hi 👋, I'm Didier Dafond`,
    longBio: (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div>Duis congue, orci non hendrerit egestas, felis eros dignissim sapien, at accumsan augue massa ac tellus.</div>
            Pellentesque arcu nibh, mattis ac sem id, faucibus interdum massa. Phasellus ex eros, tincidunt sed tincidunt non, ornare non est. Morbi
            sem ex, facilisis at congue sed, condimentum non lorem. Maecenas non sem nec lacus faucibus suscipit at sit amet libero. Proin mattis,
            tortor eu faucibus tincidunt, augue tortor ornare est, sit amet viverra purus justo eu orci. Curabitur non semper arcu, eget euismod erat.
            Nam volutpat consequat augue vel ornare. Integer venenatis dolor ac aliquam eleifend. Sed posuere quam urna, ut euismod velit varius vel.
        </div>
    )
};
