import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Divider, ListItem, ListItemIcon, ListItemText, Typography, Grid, Avatar, Link } from '@material-ui/core';
import SocialButtonsBar from '../common/SocialButtonsBar';

const useStyles = makeStyles(theme => ({
    name: {
        padding: theme.spacing(2)
    },
    avatar: {
        margin: 'auto',
        width: 150,
        height: 150,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    shortBio: {
        margin: theme.spacing(2)
    }
}));

function LeftMenu() {
    const classes = useStyles();
    const name = 'Name Surname';
    const profileImage = 'https://............';
    const shortBio = `Hi, my name is ${name}!`;
    const socials = [
        { name: 'Facebook', url: 'https://facebook.com', iconName: 'facebook' },
        { name: 'Instagram', url: 'https://instagram.com', iconName: 'instagram' }
    ];

    return (
        <div>
            <ListItem button key="headerName" />
            <Typography className={classes.name} variant="h5" align="center">
                {name}
            </Typography>
            <Avatar alt={name} src={profileImage} className={classes.avatar} />
            {shortBio && (
                <Typography className={classes.shortBio} align="center">
                    {shortBio}
                </Typography>
            )}
            <SocialButtonsBar socials={socials} />
            {/*
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List> */}
        </div>
    );
}

export default LeftMenu;
