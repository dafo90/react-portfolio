import { Link, Typography } from '@material-ui/core';
import React from 'react';
import packageJson from '../../package.alias.json';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
            {'Copyright © '}
            <Link color="inherit" href={packageJson.homepage} underline="always">
                {packageJson.author}
            </Link>
            {` ${new Date().getFullYear()}.`}
        </Typography>
    );
};

export default Copyright;
