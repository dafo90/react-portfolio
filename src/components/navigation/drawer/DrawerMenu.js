import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import layouts from '../../../configurations/layouts';
import DrawerHeader from './DrawerHeader';
import { setLayout } from '../../../actions/actions';

function DrawerMenu() {
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <DrawerHeader />
            <Divider variant="middle" />
            <List>
                {layouts
                    .filter(({ urls, enabled }) => urls && enabled)
                    .map(layout => {
                        const { id, buttonLabel, urls, icon: Icon } = layout;
                        return (
                            <ListItem button key={id} to={urls[0]} onClick={() => dispatch(setLayout(layout))}>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={buttonLabel} />
                            </ListItem>
                        );
                    })}
            </List>
        </React.Fragment>
    );
}

export default DrawerMenu;
