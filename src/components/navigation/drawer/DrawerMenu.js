import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { layoutsConfigSelector, selectedLayoutSelector } from '../../../store/selectors';
import { setLayout } from '../../../store/slices/navigation';
import Interpreter from '../../common/Interpreter';
import DrawerHeader from './DrawerHeader';

const useStyles = makeStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(5),
    },
}));

const DrawerMenu = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { code: currentLayoutCode } = useSelector(selectedLayoutSelector);
    const layouts = useSelector(layoutsConfigSelector);

    return (
        <React.Fragment>
            <DrawerHeader className={classes.header} />
            <Divider variant="middle" />
            <List>
                {layouts
                    .filter(({ urls, enabled }) => urls && enabled)
                    .map((layout) => {
                        const { code, buttonLabel, urls, icon } = layout;
                        return (
                            <ListItem
                                button
                                key={code}
                                to={urls[0]}
                                onClick={() => {
                                    dispatch(setLayout(layout));
                                }}
                                selected={code === currentLayoutCode}
                            >
                                <ListItemIcon>
                                    <Interpreter conf={icon ? { ...icon, fontsizenumber: icon.fontsizenumber || 24 } : undefined} />
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
