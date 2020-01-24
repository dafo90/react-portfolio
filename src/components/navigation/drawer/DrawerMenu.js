import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import layouts from '../../../configurations/layouts';
import DrawerHeader from './DrawerHeader';
import { setLayout, setSelectedIndexMenu } from '../../../redux/actions/actions';

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
    const selectedIndexMenu = useSelector(state => state.selectedIndexMenu);
    return (
        <React.Fragment>
            <DrawerHeader className={classes.header} />
            <Divider variant="middle" />
            <List>
                {layouts
                    .filter(({ urls, enabled }) => urls && enabled)
                    .map(({ id, buttonLabel, urls, icon: Icon }, i) => (
                        <ListItem
                            button
                            key={id}
                            to={urls[0]}
                            onClick={() => {
                                dispatch(setLayout(urls[0]));
                                setSelectedIndexMenu(i);
                            }}
                            selected={selectedIndexMenu === i}
                        >
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
