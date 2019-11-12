import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinkImg from './LinkImg';

const useStyles = makeStyles(theme => ({
    title: {
        paddingBottom: theme.spacing(2)
    },
    logo: {
        height: '100px'
    }
}));

const Section = ({ className, title, subtitle, imgSrc, imgAlt, imgHref }) => {
    const classes = useStyles();
    return (
        <div className={className}>
            <Grid container spacing={4} variant="body2" justify="center" alignItems="center">
                <Grid item xs>
                    <Typography className={classes.title} variant="h3" align="center">
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography variant="h6" color="textSecondary" align="center">
                            {subtitle}
                        </Typography>
                    )}
                </Grid>
                {imgSrc && imgAlt && (
                    <Grid item xs="auto">
                        {imgHref ? (
                            <LinkImg imgClassName={classes.logo} src={imgSrc} alt={imgAlt} href={imgHref} scale={1.0} />
                        ) : (
                            <img className={classes.logo} src={imgSrc} alt={imgAlt} />
                        )}
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

Section.propTypes = {
    className: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    subtitle: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    imgHref: PropTypes.string
};

Section.defaultProps = {
    className: undefined,
    subtitle: undefined,
    imgSrc: undefined,
    imgAlt: undefined,
    imgHref: undefined
};

export default Section;
