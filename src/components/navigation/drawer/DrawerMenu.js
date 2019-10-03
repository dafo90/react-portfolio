import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import layouts from '../../../configurations/layouts';
import DrawerHeader from './DrawerHeader';
import history from '../../../utils/history';

function DrawerMenu({ closeDrawer, selectMenu }) {
    const handleOnMenuClick = urls => {
        history.push(urls[0]);
        closeDrawer();
    };
    useEffect(() => {
        const { label } = layouts.find(({ urls }) => urls && urls.find(url => url === '/'));
        selectMenu(label);
    }, [selectMenu]);
    return (
        <React.Fragment>
            <DrawerHeader />
            <Divider />
            <List>
                {layouts
                    .filter(({ urls, enabled }) => urls && enabled)
                    .map(({ id, buttonLabel, urls, icon, label }) => (
                        <ListItem
                            button
                            key={id}
                            to={urls[0]}
                            onClick={() => {
                                selectMenu(label);
                                handleOnMenuClick(urls);
                            }}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText primary={buttonLabel} />
                        </ListItem>
                    ))}
            </List>
        </React.Fragment>
    );
}

DrawerMenu.propTypes = {
    closeDrawer: PropTypes.func.isRequired,
    selectMenu: PropTypes.func
};

DrawerMenu.defaultProps = {
    selectMenu: () => {}
};

export default DrawerMenu;
