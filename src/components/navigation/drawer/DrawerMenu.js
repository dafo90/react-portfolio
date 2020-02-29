import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import layouts from '../../../configurations/layouts';
import { setSelectedLayout } from '../../../redux/actions/navigationAction';
import { selectedLayout } from '../../../redux/selectors/selectors';
import DrawerHeader from './DrawerHeader';

const useStyles = makeStyles(theme => ({
    header: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(5)
    }
}));

const DrawerMenu = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const currentLayout = useSelector(selectedLayout);
    return (
        <React.Fragment>
            <DrawerHeader className={classes.header} />
            <Divider variant="middle" />
            <List>
                {layouts
                    .filter(({ urls, enabled }) => urls && enabled)
                    .map(layout => {
                        const { id, buttonLabel, urls, icon: Icon } = layout;
                        return (
                            <ListItem
                                button
                                key={id}
                                to={urls[0]}
                                onClick={() => {
                                    dispatch(setSelectedLayout(layout));
                                }}
                                selected={id === currentLayout.id}
                            >
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
};

export default DrawerMenu;
