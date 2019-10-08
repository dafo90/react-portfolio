import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import LayoutHeader from '../LayoutHeader';
import BasicInformationPanel from './BasicInformationPanel';
import SkillBox from '../../common/SkillBox';

const useStyles = makeStyles(theme => ({
    skills: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(6),
            paddingRight: theme.spacing(6)
        }
    }
}));

function AboutMe({ content, layouts }) {
    const classes = useStyles();
    const { skills } = content;
    return (
        <React.Fragment>
            <LayoutHeader>
                <BasicInformationPanel layouts={layouts} />
            </LayoutHeader>
            {skills && skills.length && (
                <div className={classes.skills}>
                    <Grid container variant="body2" justify="center" spacing={3}>
                        {skills.map(({ id, iconUrl, name, description }) => (
                            <Grid key={id} item>
                                <SkillBox iconUrl={iconUrl} name={name} description={description} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </React.Fragment>
    );
}

AboutMe.propTypes = {
    content: PropTypes.object.isRequired,
    layouts: PropTypes.array.isRequired
};

export default AboutMe;
