import { Box, Button, Checkbox, FormControl, FormControlLabel, Link, Slide, Snackbar, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Send } from '@material-ui/icons';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import SnackbarContentWrapper from '../../common/SnackbarContentWrapper';

const captchaError = 'Sorry, robots cannot contact me.';

const useStyles = makeStyles((theme) => ({
    privacyPolicyError: {
        marginLeft: theme.spacing(2),
    },
    captchaError: {
        marginTop: theme.spacing(2),
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

const ContactForm = ({ formSubmitUrl }) => {
    const classes = useStyles();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [token, setToken] = useState();
    const [snackbarData, setSnackbarData] = useState({ open: false, variant: 'success', message: '' });

    useEffect(() => {
        async function fetchData() {
            if (executeRecaptcha) {
                setToken(await executeRecaptcha('contact'));
            }
        }
        fetchData();
        return () => {
            setToken();
        };
    }, [executeRecaptcha]);

    const isValid = (errorFields, formFields) =>
        !Object.keys(errorFields).find((errorField) => errorFields[errorField]) &&
        Object.keys(formFields).filter((field) => formFields[field]).length === 4;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (!token) {
            setError({
                ...error,
                captcha: captchaError,
            });
            return;
        }
        if (!isValid(error, form)) return;
        const bodyFormData = new FormData();
        bodyFormData.append('_replyto', form.email);
        bodyFormData.append('message', form.message);
        bodyFormData.append('_subject', `My Portfolio - Message from ${form.name}`);
        axios
            .post(formSubmitUrl, bodyFormData)
            .then(() => {
                setSnackbarData({ open: true, variant: 'success', message: 'Thanks for contacting me, I will reply to you as soon as possible!' });
                setForm({});
                setError({});
            })
            .catch(() => {
                setSnackbarData({ open: true, variant: 'error', message: 'Something went wrong' });
            });
    };

    const handlePrivacyPolicyCheckbox = (event) => {
        const newError = { ...error, privacyPolicyCheckbox: event.target.checked ? undefined : 'Please check this box if you want to proceed.' };
        const newForm = { ...form, privacyPolicyCheckbox: event.target.checked };
        setForm(newForm);
        setError(newError);
    };

    const handleInvalid = (event, field) => {
        event.preventDefault();
        if (!token) {
            setError({
                ...error,
                [field]: event.target.validity.valid ? undefined : event.target.validationMessage,
                captcha: captchaError,
            });
        } else {
            setError({ ...error, [field]: event.target.validity.valid ? undefined : event.target.validationMessage });
        }
    };

    const handleChange = (event, field) => {
        setForm({ ...form, [field]: event.target.value });
        setError({ ...error, [field]: undefined });
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbarData({ ...snackbarData, open: false });
    };

    return (
        <React.Fragment>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    error={!!error.name}
                    helperText={error.name}
                    onInvalid={(event) => handleInvalid(event, 'name')}
                    required
                    label="Name"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    placeholder="Name"
                    name="name"
                    autoComplete="cc-name"
                    type="text"
                    value={form.name || ''}
                    onChange={(event) => handleChange(event, 'name')}
                />
                <TextField
                    error={!!error.email}
                    helperText={error.email}
                    onInvalid={(event) => handleInvalid(event, 'email')}
                    required
                    label="Email"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    placeholder="Email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    value={form.email || ''}
                    onChange={(event) => handleChange(event, 'email')}
                />
                <TextField
                    error={!!error.message}
                    helperText={error.message}
                    onInvalid={(event) => handleInvalid(event, 'message')}
                    required
                    label="Message"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={12}
                    rowsMax={12}
                    name="message"
                    autoComplete="off"
                    type="text"
                    value={form.message || ''}
                    onChange={(event) => handleChange(event, 'message')}
                />
                <FormControl error={!!error.privacyPolicyCheckbox} component="fieldset">
                    <FormControlLabel
                        control={
                            <Checkbox
                                onInvalid={(event) => handleInvalid(event, 'privacyPolicyCheckbox')}
                                required
                                checked={!!form.privacyPolicyCheckbox}
                                onChange={handlePrivacyPolicyCheckbox}
                                value="privacyPolicy"
                                color="primary"
                            />
                        }
                        label={
                            <Typography variant="body2" display="block">
                                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                                By using this form you agree with the storage and handling of your data by Formspree in accordance with its{' '}
                                <Link
                                    color="inherit"
                                    underline="always"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://formspree.io/legal/privacy-policy"
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </Typography>
                        }
                    />
                    {!!error.privacyPolicyCheckbox && (
                        <Typography className={classes.privacyPolicyError} color="error" variant="caption" display="block">
                            {error.privacyPolicyCheckbox}
                        </Typography>
                    )}
                </FormControl>
                {error.captcha && (
                    <Typography className={classes.captchaError} color="error" variant="caption" display="block">
                        {error.captcha}
                    </Typography>
                )}
                <Box>
                    <Button className={classes.button} type="submit" variant="contained" size="large">
                        <Send className={classes.buttonIcon} />
                        Submit
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
    formSubmitUrl: PropTypes.string.isRequired,
};

export default ContactForm;
