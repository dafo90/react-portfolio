import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { NotInterested, Person, FolderShared, Email, DeveloperMode } from '@material-ui/icons';
import PropTypes from 'prop-types';
import history from '../../utils/history';

const useStyles = makeStyles(theme => ({ socialCircle: { width: 32, height: 32, margin: theme.spacing(0.5) } }));

function DrawerButtonsMenu({ buttons }) {
    const classes = useStyles();
    if (!buttons || buttons.length === 0) {
        return undefined;
    }
    const findIconComponent = menuIconName => {
        switch (menuIconName.toLowerCase()) {
            case 'aboutme':
                return <Person />;
            case 'resume':
                return <FolderShared />;
            case 'contact':
                return <Email />;
            case 'projects':
                return <DeveloperMode />;
            default:
                return <NotInterested />;
        }
    };
    return (
        <List>
            {buttons
                .filter(({ enabled }) => enabled === undefined || enabled === true)
                .map(({ name, url, iconName }) => (
                    <ListItem
                        button
                        key={name}
                        to={url}
                        onClick={() => {
                            history.push(url);
                        }}
                    >
                        <ListItemIcon>{findIconComponent(iconName)}</ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
        </List>
    );
}

DrawerButtonsMenu.propTypes = {
    buttons: PropTypes.array.isRequired
};

export default DrawerButtonsMenu;
