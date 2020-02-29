import { Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import personalData from '../../../configurations/personalData';
import { setSelectedLayout } from '../../../redux/actions/navigationAction';
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
        borderRadius: '4px',
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

const AboutMeHeader = ({ layouts }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { bioImage, name, title, longBio } = personalData;
    const linkLayouts = layouts.filter(({ homepage, enabled }) => enabled && !homepage);
    return (
        <Grid container spacing={4} justify="center">
            <Grid item xs>
                <HeaderTitle title={name} subtitle={title} />
                {longBio && <Box className={classes.longBio}>{longBio}</Box>}
                {linkLayouts.length && (
                    <Grid container className={classes.buttonsBar} justify="center" alignItems="center">
                        {linkLayouts.map(linkLayout => {
                            const { id, buttonLabel, icon: Icon } = linkLayout;
                            return (
                                <Button
                                    key={id}
                                    className={classes.button}
                                    variant="outlined"
                                    size="medium"
                                    onClick={() => dispatch(setSelectedLayout(linkLayout))}
                                >
                                    <Icon className={classes.buttonIcon} />
                                    {buttonLabel}
                                </Button>
                            );
                        })}
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
};

AboutMeHeader.propTypes = {
    layouts: PropTypes.array.isRequired
};

export default AboutMeHeader;
