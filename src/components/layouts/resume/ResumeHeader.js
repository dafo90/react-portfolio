import React from 'react';
import { Link, Grid, Typography, Divider, Avatar, Box, Hidden, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { LocationOn as LocationIcon, Cake as CakeIcon, Email as EmailIcon, Language as LanguageIcon } from '@material-ui/icons';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import personalData from '../../../configurations/personalData';
import packageJson from '../../../package.alias.json';

const height = '120px';

const useStyles = makeStyles(theme => ({
    avatarBox: {
        margin: 'auto',
        maxWidth: height,
        maxHeight: height,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    avatar: {
        width: '100%',
        height: '100%'
    },
    divider: {
        height,
        marginTop: 0,
        marginBottom: 0
    },
    leftColumn: ({ leftColumnMinWidth }) => ({
        width: leftColumnMinWidth
    }),
    rightColumn: ({ rightColumnWidth }) => ({
        [theme.breakpoints.up('sm')]: {
            width: rightColumnWidth
        }
    })
}));

const ResumeHeader = ({ leftColumnMinWidth, rightColumnWidth }) => {
    const classes = useStyles({ leftColumnMinWidth, rightColumnWidth });
    const { name, title, profileImage, birthdate, email, location } = personalData;
    const momentBirthdate = birthdate && birthdate.date && birthdate.format ? moment(birthdate.date, birthdate.format) : undefined;
    return (
        <Grid container spacing={4} variant="body2" justify="flex-start" alignItems="center">
            <Grid item xs="auto">
                <Box className={classes.avatarBox}>
                    <Avatar alt={name} src={profileImage} className={classes.avatar} />
                </Box>
            </Grid>
            <Grid item xs>
                <Typography variant="h4" align="left">
                    {name}
                </Typography>
                {title && (
                    <Typography variant="subtitle1" color="textSecondary" align="left">
                        {title}
                    </Typography>
                )}
            </Grid>
            <Hidden xsDown implementation="css">
                <Grid item sm="auto" className={classes.divider}>
                    <Divider orientation="vertical" variant="fullWidth" />
                </Grid>
            </Hidden>
            <Grid className={classes.rightColumn} item xs={12} sm="auto">
                <List dense disablePadding>
                    {email && (
                        <ListItem>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Link color="inherit" underline="always" href={`mailto:${email}`} target="_top" rel="noreferrer">
                                        {email}
                                    </Link>
                                }
                            />
                        </ListItem>
                    )}
                    {momentBirthdate && (
                        <ListItem>
                            <ListItemIcon>
                                <CakeIcon />
                            </ListItemIcon>
                            <ListItemText primary={momentBirthdate.format('Do MMMM YYYY')} />
                        </ListItem>
                    )}
                    {location && (
                        <ListItem>
                            <ListItemIcon>
                                <LocationIcon />
                            </ListItemIcon>
                            <ListItemText primary={location} />
                        </ListItem>
                    )}
                    {packageJson.homepage && (
                        <ListItem>
                            <ListItemIcon>
                                <LanguageIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Link color="inherit" underline="always" href={packageJson.homepage} target="_blank" rel="noreferrer">
                                        {packageJson.homepage}
                                    </Link>
                                }
                            />
                        </ListItem>
                    )}
                </List>
            </Grid>
        </Grid>
    );
};

ResumeHeader.propTypes = {
    leftColumnMinWidth: PropTypes.string,
    rightColumnWidth: PropTypes.string
};
ResumeHeader.defaultProps = {
    leftColumnMinWidth: undefined,
    rightColumnWidth: undefined
};

export default ResumeHeader;
