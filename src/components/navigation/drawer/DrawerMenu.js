import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import layouts from '../../../configurations/layouts';
import DrawerHeader from './DrawerHeader';
import { setLayout, closeMobileDrawer } from '../../../actions/actions';
import history from '../../../utils/history';

function DrawerMenu() {
    const dispatch = useDispatch();
    const handleOnMenuClick = layout => {
        const { urls } = layout;
        history.push(urls[0]);
        dispatch(setLayout(layout));
        dispatch(closeMobileDrawer());
    };
    return (
        <React.Fragment>
            <DrawerHeader />
            <Divider />
            <List>
                {layouts
                    .filter(({ urls, enabled }) => urls && enabled)
                    .map(layout => {
                        const { id, buttonLabel, urls, icon } = layout;
                        return (
                            <ListItem button key={id} to={urls[0]} onClick={() => handleOnMenuClick(layout)}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={buttonLabel} />
                            </ListItem>
                        );
                    })}
            </List>
        </React.Fragment>
    );
}

export default DrawerMenu;
