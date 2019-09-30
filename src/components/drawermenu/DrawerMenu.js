import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, ListItem, Typography, Avatar } from '@material-ui/core';
import SocialButtonsBar from '../common/SocialButtonsBar';
import DrawerButtonsMenu from './DrawerMenuButtons';
import layouts from '../layouts/indexLayouts';

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

function DrawerMenu() {
    const classes = useStyles();
    const name = 'Name Surname';
    const profileImage = 'https://............';
    const shortBio = `Hi, my name is ${name}!`;
    const socials = [
        { name: 'Facebook', url: 'https://facebook.com', iconName: 'facebook' },
        { name: 'Instagram', url: 'https://instagram.com', iconName: 'instagram' }
    ];
    const menuButtons = layouts
        .filter(({ urls, active }) => urls && active === true)
        .map(({ id, buttonLabel: label, icon, urls }) => ({
            id,
            label,
            icon,
            urls
        }));

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
            <Divider />
            <DrawerButtonsMenu buttons={menuButtons} />
        </div>
    );
}

export default DrawerMenu;
