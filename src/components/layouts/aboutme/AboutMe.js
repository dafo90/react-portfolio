import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import personalData from '../../../configurations/personalData';
import { setLayout } from '../../../actions/actions';

const useStyles = makeStyles(theme => ({
    header: {
        background: theme.palette.secondary[50]
    },
    basicInformationPanel: {
        padding: theme.spacing(6),
        margin: 'auto',
        [theme.breakpoints.only('xs')]: {
            width: '100%'
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: '760px'
        },
        [theme.breakpoints.only('md')]: {
            maxWidth: '900px'
        },
        [theme.breakpoints.only('lg')]: {
            maxWidth: '1250px'
        },
        [theme.breakpoints.only('xl')]: {
            maxWidth: '1700px'
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
            maxWidth: '500px'
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
    },
    buttonsBar: {
        paddingTop: theme.spacing(3)
    },
    button: {
        margin: theme.spacing(1)
    }
}));

function AboutMe({ content, layouts }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { bioImage, name, title, longBio } = personalData;
    const links = layouts.filter(({ homepage }) => !homepage);
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
                            {links.length && (
                                <Grid container className={classes.buttonsBar} justify="center" variant="body2" alignItems="center">
                                    {links.map(layout => {
                                        const { id, buttonLabel, icon: Icon } = layout;
                                        return (
                                            <Button
                                                key={id}
                                                className={classes.button}
                                                variant="contained"
                                                size="medium"
                                                color="secondary"
                                                onClick={() => dispatch(setLayout(layout))}
                                            >
                                                <Icon />
                                                {buttonLabel}
                                            </Button>
                                        );
                                    })}
                                </Grid>
                            )}
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
    content: PropTypes.object.isRequired,
    layouts: PropTypes.array.isRequired
};

export default AboutMe;
