import React from 'react';
import { Paper } from '@material-ui/core';
import LayoutHeader from '../LayoutHeader';
import HeaderTitle from '../../common/HeaderTitle';
import LayoutBody from '../LayoutBody';

const Contact = () => {
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title="Contact" subtitle="Get in touch" imgSrc="/logos/mail.svg" imgAlt="Contact" />
            </LayoutHeader>
            <LayoutBody>
                <Paper />
            </LayoutBody>
        </React.Fragment>
    );
};

export default Contact;
