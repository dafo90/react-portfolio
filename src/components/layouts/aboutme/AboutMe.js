import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import personalData from '../../../configurations/personalData';

const useStyles = makeStyles(theme => ({
    backgroundImage: ({ backgroundImage }) => ({
        backgroundImage: `url('${backgroundImage}')`,
        width: '100%',
        height: 450,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: 0.15,
        backgroundColor: theme.palette.background.paper
    })
}));

function AboutMe() {
    const { backgroundImage } = personalData;
    const classes = useStyles({ backgroundImage });
    return (
        <React.Fragment>
            <div className={classes.backgroundImage} />
        </React.Fragment>
    );
}

export default AboutMe;
