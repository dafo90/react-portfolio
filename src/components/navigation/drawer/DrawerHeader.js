import { Avatar, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import { personalInformationConfigSelector, socialsConfigSelector } from '../../../store/selectors';
import Address from '../../common/Address';
import Interpreter from '../../common/Interpreter';
import SocialButtonsBar from '../../common/socialbutton/SocialButtonsBar';

const useStyles = makeStyles((theme) => ({
    name: {
        paddingTop: theme.spacing(2),
        fontWeight: 450,
    },
    avatarBox: {
        margin: 'auto',
        maxWidth: '200px',
        maxHeight: '200px',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    biographyDescriptionShort: {
        paddingTop: theme.spacing(1),
        fontSize: 15,
    },
    socials: {
        paddingTop: theme.spacing(2),
    },
}));

const DrawerHeader = ({ className }) => {
    const classes = useStyles();
    const socials = useSelector(socialsConfigSelector);
    const { name, profileImage, biographyDescriptionShort, address } = useSelector(personalInformationConfigSelector);

    return (
        <div className={className}>
            <ListItem button key="headerName" />
            <Typography className={classes.name} variant="h5" align="center">
                {name}
            </Typography>
            <div className={classes.avatarBox}>
                <Avatar alt={name} src={profileImage} className={classes.avatar} />
            </div>
            {biographyDescriptionShort && (
                <Typography className={classes.biographyDescriptionShort} align="center">
                    <Interpreter conf={biographyDescriptionShort} />
                </Typography>
            )}
            {socials && <SocialButtonsBar className={classes.socials} socials={socials} />}
            {address && <Address address={address} iconSize="30px" />}
        </div>
    );
};

DrawerHeader.propTypes = {
    className: PropTypes.string,
};

DrawerHeader.defaultProps = {
    className: undefined,
};

export default DrawerHeader;
