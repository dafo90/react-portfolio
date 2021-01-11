import { Box, Button, Checkbox, FormControl, FormControlLabel, Slide, Snackbar, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Send } from '@material-ui/icons';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import SnackbarContentWrapper from '../../common/SnackbarContentWrapper';
import GoogleReCaptcha from '../../common/GoogleReCaptcha';
import Interpreter from '../../common/Interpreter';

const useStyles = makeStyles((theme) => ({
    privacyPolicyError: {
        marginLeft: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(4),
    },
    buttonIcon: {
        paddingRight: theme.spacing(1),
    },
}));

// eslint-disable-next-line react/jsx-props-no-spreading
const TransitionDown = (props) => <Slide {...props} direction="down" />;

const ContactForm = ({ formConfig }) => {
    const classes = useStyles();
    const { control, errors, handleSubmit } = useForm();
    const [snackbarData, setSnackbarData] = useState({ open: false, variant: 'success', message: '' });

    const {
        googleReCaptchaClientSiteKey,
        sendMessageOk,
        sendMessageUnknownError,
        nameField,
        emailField,
        messageField,
        privacyPolicyField,
        submitButton,
    } = formConfig;

    const onSubmit = (data) => {
        const bodyFormData = new FormData();
        bodyFormData.append('_replyto', data.email);
        bodyFormData.append('message', data.message);
        bodyFormData.append('_subject', `My Portfolio - Message from ${data.name}`);
        bodyFormData.append('g-recaptcha-response', data.privacyPolicyCheckboxController);

        axios
            .post(submitButton.url, bodyFormData)
            .then(() => {
                setSnackbarData({ open: true, variant: 'success', message: sendMessageOk });
            })
            .catch((err) => {
                if (err?.response?.data?.error) {
                    setSnackbarData({ open: true, variant: 'error', message: err?.response?.data?.error });
                } else {
                    setSnackbarData({ open: true, variant: 'error', message: sendMessageUnknownError });
                }
            });
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbarData({ ...snackbarData, open: false });
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: { value: true, message: nameField.requiredMessage } }}
                    render={({ onChange, value }) => (
                        <TextField
                            error={!!errors.name}
                            type="text"
                            autoComplete={nameField.autoComplete}
                            helperText={errors.name?.message}
                            label={nameField.label}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            placeholder={nameField.placeholder}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: { value: true, message: emailField.requiredMessage },
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: emailField.invalidMessage,
                        },
                    }}
                    render={({ onChange, value }) => (
                        <TextField
                            error={!!errors.email}
                            type="text"
                            autoComplete={emailField.autoComplete}
                            helperText={errors.email?.message}
                            label={emailField.label}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            placeholder={emailField.placeholder}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    rules={{ required: { value: true, message: messageField.requiredMessage } }}
                    render={({ onChange, value }) => (
                        <TextField
                            error={!!errors.message}
                            type="text"
                            autoComplete="off"
                            helperText={errors.message?.message}
                            label={messageField.label}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={12}
                            rowsMax={12}
                            placeholder={messageField.placeholder}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />

                <Controller
                    name="privacyPolicyCheckbox"
                    control={control}
                    defaultValue=""
                    rules={{ required: { value: true, message: privacyPolicyField.requiredMessage } }}
                    render={({ onChange, value }) => (
                        <FormControl error={!!errors.privacyPolicyCheckbox} component="fieldset">
                            <FormControlLabel
                                control={<Checkbox checked={value === 'privacyPolicy'} onChange={onChange} value="privacyPolicy" color="primary" />}
                                label={<Interpreter conf={privacyPolicyField.label} />}
                            />
                            {!!errors.privacyPolicyCheckbox && (
                                <Typography className={classes.privacyPolicyError} color="error" variant="caption" display="block">
                                    {errors.privacyPolicyCheckbox.message}
                                </Typography>
                            )}
                        </FormControl>
                    )}
                />

                <Controller
                    name="privacyPolicyCheckboxController"
                    control={control}
                    defaultValue=""
                    render={({ onChange }) => (
                        <GoogleReCaptcha
                            name="googleReCaptcha"
                            sitekey={googleReCaptchaClientSiteKey}
                            dataCallback={onChange}
                            dataExpiredCallback={onChange}
                            dataErrorCallback={onChange}
                        />
                    )}
                />

                <Box>
                    <Button className={classes.button} type="submit" variant="contained" size="large">
                        <Send className={classes.buttonIcon} />
                        {submitButton.label}
                    </Button>
                </Box>
            </form>
            <Snackbar
                TransitionComponent={TransitionDown}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={snackbarData.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
            >
                <SnackbarContentWrapper variant={snackbarData.variant} message={snackbarData.message} onClose={handleCloseSnackbar} />
            </Snackbar>
        </React.Fragment>
    );
};

ContactForm.propTypes = {
    formConfig: PropTypes.object.isRequired,
};

export default ContactForm;
