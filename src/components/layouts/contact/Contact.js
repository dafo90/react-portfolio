import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import LayoutHeader from '../LayoutHeader';
import HeaderTitle from '../../common/HeaderTitle';
import SocialButtonsBar from '../../common/SocialButtonsBar';
import LayoutBody from '../LayoutBody';
import socials from '../../../configurations/socials';

const useStyles = makeStyles(theme => ({
    socialsBar: {
        paddingTop: theme.spacing(2)
    },
    form: {
        padding: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(3)
    },
    buttonIcon: {
        paddingRight: theme.spacing(1)
    }
}));

const Contact = () => {
    const classes = useStyles();

    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [message, setMessage] = useState();

    // const validate = values => {
    //     const errors = {};
    //     const requiredFields = ['name', 'email', 'message'];
    //     requiredFields.forEach(field => {
    //         if (!values[field]) {
    //             errors[field] = 'Required';
    //         }
    //     });
    //     if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Invalid email address';
    //     }
    //     return errors;
    // };

    const handleSubmit = event => {
        event.stopPropagation();
        event.preventDefault();
        // console.log(name, email, message);
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
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            placeholder="Name"
                            name="name"
                            autoComplete="cc-name"
                            type="text"
                            // onChange={event => setName(event.target.value)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue=""
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            placeholder="Email"
                            name="email"
                            autoComplete="email"
                            type="email"
                            // onChange={event => setEmail(event.target.value)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Message"
                            defaultValue=""
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
                            // onChange={event => setMessage(event.target.value)}
                        />
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

export default Contact;
