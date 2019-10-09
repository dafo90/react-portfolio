import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import LayoutHeader from '../LayoutHeader';
import BasicInformationPanel from './BasicInformationPanel';
import Section from '../../common/Section';
import LayoutBody from '../LayoutBody';
import SkillsSection from '../../common/SkillsSection';

const useStyles = makeStyles(theme => ({
    skills: {
        paddingTop: theme.spacing(2)
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
            <LayoutBody>
                {skills && (
                    <React.Fragment>
                        <Section className={classes.skillsSection} title="Skills" subtitle="A brief overview of my skills" />
                        <SkillsSection className={classes.skills} skills={skills} />
                    </React.Fragment>
                )}
            </LayoutBody>
        </React.Fragment>
    );
}

AboutMe.propTypes = {
    content: PropTypes.object.isRequired,
    layouts: PropTypes.array.isRequired
};

export default AboutMe;
