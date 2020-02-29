import { IconButton, SnackbarContent } from '@material-ui/core';
import { amber, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle as CheckCircleIcon, Close as CloseIcon, Error as ErrorIcon, Info as InfoIcon, Warning as WarningIcon } from '@material-ui/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon
};

const useStyles = makeStyles(theme => ({
    success: {
        backgroundColor: green[600]
    },
    error: {
        backgroundColor: theme.palette.error.dark
    },
    info: {
        backgroundColor: theme.palette.primary.main
    },
    warning: {
        backgroundColor: amber[700]
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1)
    },
    message: {
        display: 'flex',
        alignItems: 'center'
    }
}));

const SnackbarContentWrapper = React.forwardRef(({ className, message, onClose, variant, ...props }, ref) => {
    const classes = useStyles();
    const Icon = variantIcon[variant];
    return (
        <SnackbarContent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            ref={ref}
            className={classNames(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={classNames(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>
            ]}
        />
    );
});

SnackbarContentWrapper.propTypes = {
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    message: PropTypes.string,
    className: PropTypes.string,
    onClose: PropTypes.func
};

SnackbarContentWrapper.defaultProps = {
    message: undefined,
    className: undefined,
    onClose: () => {}
};

export default SnackbarContentWrapper;
