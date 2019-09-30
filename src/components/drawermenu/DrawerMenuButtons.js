import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import history from '../../utils/history';

function DrawerMenuButtons({ buttons }) {
    if (!buttons || buttons.length === 0) return undefined;
    return (
        <List>
            {buttons
                .filter(({ enabled }) => enabled === undefined || enabled === true)
                .map(({ id, label, urls, icon }) => (
                    <ListItem
                        button
                        key={id}
                        to={urls[0]}
                        onClick={() => {
                            history.push(urls[0]);
                        }}
                    >
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                ))}
        </List>
    );
}

DrawerMenuButtons.propTypes = {
    buttons: PropTypes.array.isRequired
};

export default DrawerMenuButtons;
