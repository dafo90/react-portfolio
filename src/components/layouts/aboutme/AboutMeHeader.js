import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import personalData from '../../../configurations/personalData';
import { setLayout } from '../../../actions/actions';
import HeaderTitle from '../../common/HeaderTitle';

const useStyles = makeStyles(theme => ({
    longBio: {
        paddingTop: theme.spacing(2),
        textAlign: 'justify',
        textJustify: 'inter-word'
    },
    bioImageBox: {
        float: 'left',
        [theme.breakpoints.up('md')]: {
            float: 'right'
        }
    },
    bioImage: {
        borderRadius: '3px',
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
    },
    buttonIcon: {
        paddingRight: theme.spacing(1)
    }
}));

function AboutMeHeader({ layouts }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { bioImage, name, title, longBio } = personalData;
    const links = layouts.filter(({ homepage, enabled }) => enabled && !homepage);
    return (
        <Grid container spacing={4} justify="center">
            <Grid item xs>
                <HeaderTitle title={name} subtitle={title} />
                {longBio && <div className={classes.longBio}>{longBio}</div>}
                {links.length && (
                    <Grid container className={classes.buttonsBar} justify="center" alignItems="center">
                        {links.map(({ id, buttonLabel, icon: Icon, urls }) => (
                            <Button key={id} className={classes.button} variant="outlined" size="medium" onClick={() => dispatch(setLayout(urls[0]))}>
                                <Icon className={classes.buttonIcon} />
                                {buttonLabel}
                            </Button>
                        ))}
                    </Grid>
                )}
            </Grid>
            <Grid item xs="auto">
                <div className={classes.bioImageBox}>
                    <img alt={name} src={bioImage} className={classes.bioImage} />
                </div>
            </Grid>
        </Grid>
    );
}

AboutMeHeader.propTypes = {
    layouts: PropTypes.array.isRequired
};

export default AboutMeHeader;
