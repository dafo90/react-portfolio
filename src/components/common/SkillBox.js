import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '350px',
        padding: theme.spacing(2)
    },
    logoColumn: {
        paddingRight: theme.spacing(2),
        height: '100%'
    },
    logo: {
        maxWidth: '60px',
        verticalAlign: 'middle'
    },
    name: {
        paddingBottom: theme.spacing(1)
    },
    description: {
        minWidth: '100px'
    }
}));

function SkillBox({ iconUrl, name, description }) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Typography className={classes.name} variant="h5" align="left">
                {name}
            </Typography>
            <table>
                <tbody>
                    <tr>
                        {iconUrl && (
                            <td className={classes.logoColumn}>
                                <img className={classes.logo} src={iconUrl} alt={name} />
                            </td>
                        )}
                        <td>
                            <Typography className={classes.description} variant="body2" align="justify">
                                {description}
                            </Typography>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Paper>
    );
}

SkillBox.propTypes = {
    iconUrl: PropTypes.elementType,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

SkillBox.defaultProps = {
    iconUrl: undefined
};

export default SkillBox;
