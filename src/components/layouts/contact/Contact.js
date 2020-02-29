import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Email } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import HeaderTitle from '../../common/HeaderTitle';
import LayoutBody from '../LayoutBody';
import LayoutHeader from '../LayoutHeader';
import ContactForm from './ContactForm';

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
