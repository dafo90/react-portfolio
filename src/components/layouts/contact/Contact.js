import React, { useState, useRef } from 'react';
import { Paper, TextField, Button, Typography } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import LayoutHeader from '../LayoutHeader';
import HeaderTitle from '../../common/HeaderTitle';
import SocialButtonsBar from '../../common/SocialButtonsBar';
import LayoutBody from '../LayoutBody';
import socials from '../../../configurations/socials';
import { openSnackbar } from '../../../actions/actions';

const useStyles = makeStyles(theme => ({
    socialsBar: {
        paddingTop: theme.spacing(2)
    },
    form: {
        padding: theme.spacing(2)
    },
    captcha: {
        marginTop: theme.spacing(2)
    },
    captchaError: {
        marginLeft: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(4)
    },
    buttonIcon: {
        paddingRight: theme.spacing(1)
    }
}));

const Contact = ({ content }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const recaptchaRef = useRef({});

    const { googleRecaptchaClientSiteKey, formSubmitUrl } = content;

    const [form, setForm] = useState({});
    const [error, setError] = useState({});

    const isValid = (errorFields, formFields) =>
        !Object.keys(errorFields).find(errorField => errorFields[errorField]) &&
        Object.keys(formFields).filter(field => formFields[field]).length === 4;

    const handleOnSubmit = event => {
        event.preventDefault();
        if (!error.captcha && !form.captcha) {
            setError({
                ...error,
                captcha: 'Please fill out this field.'
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
                dispatch(openSnackbar('success', 'Thanks for contacting me, I will reply to you as soon as possible!'));
                recaptchaRef.current.reset(recaptchaRef.current.getWidgetId());
                setForm({});
                setError({});
            })
            .catch(() => {
                dispatch(openSnackbar('error', 'Something went wrong'));
            });
    };

    const handleChangeCaptcha = newCaptcha => {
        const newError = { ...error, captcha: newCaptcha ? undefined : 'Please fill out this field.' };
        const newForm = { ...form, captcha: newCaptcha };
        setForm(newForm);
        setError(newError);
    };

    const handleInvalid = (event, field) => {
        event.preventDefault();
        if (!error.captcha && !form.captcha) {
            setError({
                ...error,
                [field]: event.target.validity.valid ? undefined : event.target.validationMessage,
                captcha: 'Please fill out this field.'
            });
        } else {
            setError({ ...error, [field]: event.target.validity.valid ? undefined : event.target.validationMessage });
        }
    };

    const handleChange = (event, field) => {
        setForm({ ...form, [field]: event.target.value });
        setError({ ...error, [field]: undefined });
    };

    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle
                    title="Contact"
                    subtitle={
                        <div>
                            <div>Get in touch</div>
                            <SocialButtonsBar socials={socials} iconSize="22px" className={classes.socialsBar} />
                        </div>
                    }
                    imgSrc="/logos/mail.svg"
                    imgAlt="Contact"
                />
            </LayoutHeader>
            <LayoutBody>
                <Paper className={classes.form}>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            error={!!error.name}
                            helperText={error.name}
                            onInvalid={event => handleInvalid(event, 'name')}
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
                            onChange={event => handleChange(event, 'name')}
                        />
                        <TextField
                            error={!!error.email}
                            helperText={error.email}
                            onInvalid={event => handleInvalid(event, 'email')}
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
                            onChange={event => handleChange(event, 'email')}
                        />
                        <TextField
                            error={!!error.message}
                            helperText={error.message}
                            onInvalid={event => handleInvalid(event, 'message')}
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
                            onChange={event => handleChange(event, 'message')}
                        />
                        <ReCAPTCHA
                            className={classes.captcha}
                            ref={recaptchaRef}
                            theme="dark"
                            sitekey={googleRecaptchaClientSiteKey}
                            onChange={newCaptcha => handleChangeCaptcha(newCaptcha)}
                            onExpired={() => handleChangeCaptcha(undefined)}
                            onErrored={() => handleChangeCaptcha(undefined)}
                        />
                        {error.captcha && (
                            <Typography className={classes.captchaError} color="error" variant="caption" display="block">
                                {error.captcha}
                            </Typography>
                        )}
                        <Button className={classes.button} type="submit" variant="contained" size="large">
                            <Send className={classes.buttonIcon} />
                            Submit
                        </Button>
                    </form>
                </Paper>
            </LayoutBody>
        </React.Fragment>
    );
};

Contact.propTypes = {
    content: PropTypes.object.isRequired
};

Contact.propTypes = {
    content: PropTypes.object.isRequired
};

export default Contact;
