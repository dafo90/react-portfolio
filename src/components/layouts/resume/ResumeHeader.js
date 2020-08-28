import { Avatar, Box, Button, Divider, Grid, Hidden, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    Cake as CakeIcon,
    Email as EmailIcon,
    InsertDriveFile as InsertDriveFileIcon,
    Language as LanguageIcon,
    LocationOn as LocationIcon,
} from '@material-ui/icons';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import personalData from '../../../configurations/personalData';
import packageJson from '../../../package.alias.json';

const height = '120px';

const useStyles = makeStyles((theme) => ({
    avatarBox: {
        margin: 'auto',
        maxWidth: height,
        maxHeight: height,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    divider: {
        height,
        marginTop: 0,
        marginBottom: 0,
    },
    button: {
        marginTop: theme.spacing(2),
    },
    buttonIcon: {
        paddingRight: theme.spacing(1),
    },
    leftColumn: ({ leftColumnMinWidth }) => ({
        width: leftColumnMinWidth,
    }),
    rightColumn: ({ rightColumnWidth }) => ({
        [theme.breakpoints.up('xs')]: {
            width: rightColumnWidth.xs,
        },
        [theme.breakpoints.up('md')]: {
            width: rightColumnWidth.md,
        },
        [theme.breakpoints.up('lg')]: {
            width: rightColumnWidth.lg,
        },
    }),
}));

const ResumeHeader = ({ leftColumnMinWidth, rightColumnWidth }) => {
    const classes = useStyles({ leftColumnMinWidth, rightColumnWidth });
    const { name, title, profileImage, birthdate, email, location, cvPdf } = personalData;
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
                {cvPdf && (
                    <Button className={classes.button} component="a" target="_blank" rel="noreferrer" href={cvPdf} variant="outlined" size="medium">
                        <InsertDriveFileIcon className={classes.buttonIcon} />
                        Download PDF
                    </Button>
                )}
            </Grid>
            <Hidden xsDown implementation="css">
                <Grid item md="auto" className={classes.divider}>
                    <Divider orientation="vertical" variant="fullWidth" />
                </Grid>
            </Hidden>
            <Grid className={classes.rightColumn} item xs={12} md="auto">
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
    rightColumnWidth: PropTypes.object,
};
ResumeHeader.defaultProps = {
    leftColumnMinWidth: undefined,
    rightColumnWidth: undefined,
};

export default ResumeHeader;
