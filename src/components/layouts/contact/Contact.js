import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderTitle from '../../common/HeaderTitle';
import LayoutBody from '../LayoutBody';
import LayoutHeader from '../LayoutHeader';
import ContactForm from './ContactForm';

const useStyles = makeStyles((theme) => ({
    form: {
        padding: theme.spacing(2),
    },
}));

const Contact = ({ pageConf }) => {
    const classes = useStyles();
    const { title, subtitle, icon, form } = pageConf;

    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title={title} subtitle={subtitle} icon={icon ? { ...icon, fontsizenumber: icon.fontsizenumber || 150 } : undefined} />
            </LayoutHeader>
            <LayoutBody>
                <Paper className={classes.form}>
                    <ContactForm formConfig={form} />
                </Paper>
            </LayoutBody>
        </React.Fragment>
    );
};

Contact.propTypes = {
    pageConf: PropTypes.object.isRequired,
};

export default Contact;
