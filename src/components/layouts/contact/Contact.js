import React from 'react';
import { Paper } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import LayoutHeader from '../LayoutHeader';
import HeaderTitle from '../../common/HeaderTitle';
import LayoutBody from '../LayoutBody';

const useStyles = makeStyles(theme => ({
    form: {
        padding: theme.spacing(2)
    },
    icon: {
        fontSize: '150px'
    }
}));

const Contact = ({ pageConf }) => {
    const classes = useStyles();
    const { title, subtitle, content } = pageConf;
    const { googleRecaptchaClientSiteKey, formSubmitUrl } = content;

    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title={title} subtitle={subtitle} icon={<Email className={classes.icon} />} />
            </LayoutHeader>
            <LayoutBody>
                <Paper className={classes.form}>
                    <GoogleReCaptchaProvider reCaptchaKey={googleRecaptchaClientSiteKey}>
                        <ContactForm formSubmitUrl={formSubmitUrl} />
                    </GoogleReCaptchaProvider>
                </Paper>
            </LayoutBody>
        </React.Fragment>
    );
};

Contact.propTypes = {
    pageConf: PropTypes.object.isRequired
};

export default Contact;
