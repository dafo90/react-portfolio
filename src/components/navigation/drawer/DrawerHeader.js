import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography, Avatar } from '@material-ui/core';
import SocialButtonsBar from '../../common/SocialButtonsBar';
import Address from '../../common/Address';
import personalData from '../../../configurations/personalData';
import socials from '../../../configurations/socials';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: theme.spacing(5)
    },
    name: {
        padding: theme.spacing(2),
        fontWeight: 425
    },
    avatar: {
        margin: 'auto',
        width: '200px',
        height: '200px',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    shortBio: {
        margin: theme.spacing(1),
        fontSize: 15
    }
}));

function DrawerHeader() {
    const classes = useStyles();
    const { name, profileImage, shortBio, address } = personalData;
    return (
        <div className={classes.root}>
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
            {socials && <SocialButtonsBar socials={socials} />}
            {address && <Address address={address} iconSize="30px" />}
        </div>
    );
}

export default DrawerHeader;
