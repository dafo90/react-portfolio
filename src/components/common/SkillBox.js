import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '350px',
        padding: theme.spacing(2)
    },
    logoColumn: {
        paddingRight: theme.spacing(2),
        height: '100%'
    },
    logoHoverZoom: {
        maxWidth: '60px',
        overflow: 'hidden',
        borderRadius: '5px',
        background: theme.palette.background.paper
    },
    logo: {
        maxWidth: '60px',
        objectPosition: 'center',
        objectFit: 'cover',
        verticalAlign: 'middle',
        borderRadius: '5px',
        transition: 'transform .5s ease',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    },
    name: {
        paddingBottom: theme.spacing(1)
    },
    description: {
        minWidth: '100px'
    }
}));

function SkillBox({ iconUrl, name, description, url }) {
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
                                <Link href={url} component="a" target="_blank" rel="noreferrer">
                                    <div className={classes.logoHoverZoom}>
                                        <img className={classes.logo} src={iconUrl} alt={name} />
                                    </div>
                                </Link>
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
    description: PropTypes.string.isRequired,
    url: PropTypes.string
};

SkillBox.defaultProps = {
    iconUrl: undefined,
    url: undefined
};

export default SkillBox;
