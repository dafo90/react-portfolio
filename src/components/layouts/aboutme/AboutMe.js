import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Grid, Paper, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import personalData from '../../../configurations/personalData';

const useStyles = makeStyles(theme => ({
    header: {
        background: theme.palette.secondary[50]
    },
    basicInformationPanel: {
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(9),
            paddingRight: theme.spacing(9)
        }
    },
    name: {
        fontWeight: 550
    },
    title: {
        paddingTop: theme.spacing(3),
        color: theme.palette.text.secondary
    },
    longBio: {
        paddingTop: theme.spacing(2),
        textAlign: 'justify',
        textJustify: 'inter-word'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    bioImageBox: {
        float: 'left',
        [theme.breakpoints.up('md')]: {
            float: 'right'
        }
    },
    bioImage: {
        [theme.breakpoints.only('xs')]: {
            width: '100%'
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: '400px'
        },
        [theme.breakpoints.only('md')]: {
            objectFit: 'cover',
            objectPosition: 'center',
            maxWidth: '250px'
        },
        [theme.breakpoints.up('lg')]: {
            objectFit: 'cover',
            objectPosition: 'center',
            maxWidth: '400px'
        }
    }
}));

function AboutMe({ content }) {
    const { bioImage, name, title, longBio } = personalData;
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.header}>
                <Box className={classes.basicInformationPanel}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md>
                            <Typography className={classes.name} variant="h3" align="left">
                                {name}
                            </Typography>
                            {title && (
                                <Typography className={classes.title} variant="h5" align="left">
                                    {title}
                                </Typography>
                            )}
                            {longBio && <div className={classes.longBio}>{longBio}</div>}
                        </Grid>
                        <Grid item xs={12} md="auto">
                            <div className={classes.bioImageBox}>
                                <img alt={name} src={bioImage} className={classes.bioImage} />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </React.Fragment>
    );
}

AboutMe.propTypes = {
    content: PropTypes.object.isRequired
};

export default AboutMe;
