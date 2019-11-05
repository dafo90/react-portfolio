import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import layouts from '../../../configurations/layouts';
import DrawerHeader from './DrawerHeader';
import { setLayout } from '../../../actions/actions';

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
    return (
        <React.Fragment>
            <DrawerHeader className={classes.header} />
            <Divider variant="middle" />
            <List>
                {layouts
                    .filter(({ urls, enabled }) => urls && enabled)
                    .map(({ id, buttonLabel, urls, icon: Icon }) => (
                        <ListItem button key={id} to={urls[0]} onClick={() => dispatch(setLayout(urls[0]))}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={buttonLabel} />
                        </ListItem>
                    ))}
            </List>
        </React.Fragment>
    );
};

export default DrawerMenu;
