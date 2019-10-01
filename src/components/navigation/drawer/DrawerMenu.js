import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import layouts from '../../../constants/layoutConstants';
import DrawerHeader from './DrawerHeader';
import history from '../../../utils/history';

function DrawerMenu({ closeDrawer }) {
    const handleOnMenuClick = urls => {
        history.push(urls[0]);
        closeDrawer();
    };

    return (
        <div>
            <DrawerHeader />
            <Divider />
            <List>
                {layouts
                    .filter(({ urls, enabled }) => urls && enabled)
                    .map(({ id, buttonLabel, urls, icon }) => (
                        <ListItem button key={id} to={urls[0]} onClick={() => handleOnMenuClick(urls)}>
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={buttonLabel} />
                        </ListItem>
                    ))}
            </List>
        </div>
    );
}

DrawerMenu.propTypes = {
    closeDrawer: PropTypes.func.isRequired
};

export default DrawerMenu;
