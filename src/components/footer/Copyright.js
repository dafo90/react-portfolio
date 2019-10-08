import { Link, Typography } from '@material-ui/core';
import React from 'react';
import packageJson from '../../package.alias.json';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Copyright ©
            <Link color="inherit" href={packageJson.homepage}>
                {packageJson.author}
            </Link>
            {` ${new Date().getFullYear()}.`}
        </Typography>
    );
}

export default Copyright;
