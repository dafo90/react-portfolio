import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LayoutHeader from '../LayoutHeader';
import HeaderTitle from '../../common/HeaderTitle';
import SocialButtonsBar from '../../common/SocialButtonsBar';
import LayoutBody from '../LayoutBody';
import socials from '../../../configurations/socials';

const useStyles = makeStyles(theme => ({
    socialsBar: {
        paddingTop: theme.spacing(2)
    }
}));

const Contact = () => {
    const classes = useStyles();
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
                <Paper />
            </LayoutBody>
        </React.Fragment>
    );
};

export default Contact;
