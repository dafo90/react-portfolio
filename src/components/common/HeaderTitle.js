import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    title: {
        paddingBottom: theme.spacing(2)
    }
}));

const Section = ({ className, title, subtitle, icon }) => {
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
                {icon && (
                    <Grid item xs="auto">
                        {icon}
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
    icon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Section.defaultProps = {
    className: undefined,
    subtitle: undefined,
    icon: undefined
};

export default Section;
