import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

const arrowGenerator = color => ({
    '&[x-placement*="bottom"] $arrow': {
        top: 0,
        left: 0,
        marginTop: '-0.95em',
        width: '2em',
        height: '1em',
        '&::before': {
            borderWidth: '0 1em 1em 1em',
            borderColor: `transparent transparent ${color} transparent`
        }
    },
    '&[x-placement*="top"] $arrow': {
        bottom: 0,
        left: 0,
        marginBottom: '-0.95em',
        width: '2em',
        height: '1em',
        '&::before': {
            borderWidth: '1em 1em 0 1em',
            borderColor: `${color} transparent transparent transparent`
        }
    },
    '&[x-placement*="right"] $arrow': {
        left: 0,
        marginLeft: '-0.95em',
        height: '2em',
        width: '1em',
        '&::before': {
            borderWidth: '1em 1em 1em 0',
            borderColor: `transparent ${color} transparent transparent`
        }
    },
    '&[x-placement*="left"] $arrow': {
        right: 0,
        marginRight: '-0.95em',
        height: '2em',
        width: '1em',
        '&::before': {
            borderWidth: '1em 0 1em 1em',
            borderColor: `transparent transparent transparent ${color}`
        }
    }
});

const useStylesArrow = makeStyles(theme => ({
    tooltip: {
        position: 'relative',
        backgroundColor: theme.palette.grey[900]
    },
    arrow: {
        position: 'absolute',
        fontSize: 6,
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid'
        }
    },
    popper: arrowGenerator(theme.palette.grey[900])
}));

const ArrowTooltip = ({ title, ...props }) => {
    const { arrow, ...classes } = useStylesArrow();
    const [arrowRef, setArrowRef] = useState(null);

    return (
        <Tooltip
            classes={classes}
            PopperProps={{
                popperOptions: {
                    modifiers: {
                        arrow: {
                            enabled: Boolean(arrowRef),
                            element: arrowRef
                        }
                    }
                }
            }}
            enterDelay={300}
            leaveDelay={300}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            title={
                <React.Fragment>
                    {title}
                    <span className={arrow} ref={setArrowRef} />
                </React.Fragment>
            }
        />
    );
};

ArrowTooltip.propTypes = {
    title: PropTypes.string.isRequired
};

export default ArrowTooltip;
