import { Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { personalInformationConfigSelector } from '../../../store/selectors';

import { setLayout } from '../../../store/slices/navigation';
import HeaderTitle from '../../common/HeaderTitle';
import Interpreter from '../../common/Interpreter';

const useStyles = makeStyles((theme) => ({
    biographyDescription: {
        paddingTop: theme.spacing(2),
        textAlign: 'justify',
        textJustify: 'inter-word',
    },
    biographyImageBox: {
        float: 'left',
        [theme.breakpoints.up('md')]: {
            float: 'right',
        },
    },
    biographyImage: {
        borderRadius: '4px',
        [theme.breakpoints.only('xs')]: {
            width: '100%',
        },
        [theme.breakpoints.only('sm')]: {
            maxWidth: '500px',
        },
        [theme.breakpoints.only('md')]: {
            objectFit: 'cover',
            objectPosition: 'center',
            maxWidth: '250px',
        },
        [theme.breakpoints.up('lg')]: {
            objectFit: 'cover',
            objectPosition: 'center',
            maxWidth: '400px',
        },
    },
    buttonsBar: {
        paddingTop: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
    },
    buttonIcon: {
        paddingBottom: 1,
        paddingRight: theme.spacing(1),
    },
}));

const AboutMeHeader = ({ layouts }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { biographyImage, name, title, biographyDescription, icon } = useSelector(personalInformationConfigSelector);
    const linkLayouts = layouts.filter(({ homepage = false, enabled }) => enabled && !homepage);

    return (
        <Grid container spacing={4} justify="center">
            <Grid item xs>
                <HeaderTitle title={name} subtitle={title} icon={icon ? { ...icon, fontsizenumber: icon.fontsizenumber || 150 } : undefined} />
                {biographyDescription && (
                    <Box className={classes.biographyDescription}>
                        <Interpreter conf={biographyDescription} />
                    </Box>
                )}
                {linkLayouts.length && (
                    <Grid container className={classes.buttonsBar} justify="center" alignItems="center">
                        {linkLayouts.map((linkLayout) => {
                            const { code, buttonLabel, icon: buttonIcon } = linkLayout;
                            return (
                                <Button
                                    key={code}
                                    className={classes.button}
                                    variant="outlined"
                                    size="medium"
                                    onClick={() => dispatch(setLayout(linkLayout))}
                                >
                                    <Box className={classes.buttonIcon}>
                                        <Interpreter
                                            conf={
                                                buttonIcon
                                                    ? { ...buttonIcon, fontsizenumber: buttonIcon?.fontsizenumber || 16, verticalalign: 'middle' }
                                                    : undefined
                                            }
                                        />
                                    </Box>
                                    {buttonLabel}
                                </Button>
                            );
                        })}
                    </Grid>
                )}
            </Grid>
            <Grid item xs="auto">
                <div className={classes.biographyImageBox}>
                    <img alt={name} src={biographyImage} className={classes.biographyImage} />
                </div>
            </Grid>
        </Grid>
    );
};

AboutMeHeader.propTypes = {
    layouts: PropTypes.array.isRequired,
};

export default AboutMeHeader;
