import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import LayoutHeader from '../LayoutHeader';
import BasicInformationPanel from './BasicInformationPanel';
import LayoutBody from '../LayoutBody';
import TilesSection from '../../common/TilesSection';
import { setLayout } from '../../../actions/actions';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    buttonIcon: {
        paddingRight: theme.spacing(1)
    }
}));

const findLayoutByCode = (layouts, codeToFind) => layouts.find(({ code }) => code === codeToFind);

function AboutMe({ content, layouts }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { skills } = content;
    const { urls: resumeUrls, icon: ResumeIcon } = findLayoutByCode(layouts, 'resume');
    // const projectsLayout = findLayoutByCode(layouts, 'projects');
    return (
        <React.Fragment>
            <LayoutHeader>
                <BasicInformationPanel layouts={layouts} />
            </LayoutHeader>
            <LayoutBody>
                <TilesSection sectionTitle="Skills" sectionSubtitle="A brief overview of my skills" tiles={skills} onlyMainTiles>
                    <Button
                        className={classes.button}
                        variant="contained"
                        size="medium"
                        color="secondary"
                        onClick={() => dispatch(setLayout(resumeUrls[0]))}
                    >
                        <ResumeIcon className={classes.buttonIcon} />
                        View all skills...
                    </Button>
                </TilesSection>
            </LayoutBody>
        </React.Fragment>
    );
}

AboutMe.propTypes = {
    content: PropTypes.object.isRequired,
    layouts: PropTypes.array.isRequired
};

export default AboutMe;
