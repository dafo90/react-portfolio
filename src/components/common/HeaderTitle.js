import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Interpreter from './Interpreter';

const useStyles = makeStyles((theme) => ({
    title: {
        paddingBottom: theme.spacing(2),
    },
}));

const Section = ({ className, title, subtitle, icon }) => {
    const classes = useStyles();
    return (
        <div className={className}>
            <Grid container spacing={4} variant="body2" justify="center" alignItems="center">
                <Grid item xs>
                    <Typography className={classes.title} variant="h3" align="center">
                        <Interpreter conf={title} />
                    </Typography>
                    {subtitle && (
                        <Typography variant="h6" color="textSecondary" align="center">
                            <Interpreter conf={subtitle} />
                        </Typography>
                    )}
                </Grid>
                {icon && (
                    <Grid item xs="auto">
                        <Interpreter conf={icon} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

Section.propTypes = {
    className: PropTypes.string,
    title: PropTypes.any.isRequired,
    subtitle: PropTypes.any,
    icon: PropTypes.object,
};

Section.defaultProps = {
    className: undefined,
    subtitle: undefined,
    icon: undefined,
};

export default Section;
