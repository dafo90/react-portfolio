import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Grid, Button, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import LayoutHeader from '../LayoutHeader';
import BasicInformationPanel from './BasicInformationPanel';
import LayoutBody from '../LayoutBody';
import TilesSection from '../../common/TilesSection';
import { setLayout } from '../../../actions/actions';

const useStyles = makeStyles(theme => ({
    buttonGrid: {
        padding: theme.spacing(2)
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));

const findLayoutByCode = (layouts, codeToFind) => layouts.find(({ code, enabled }) => enabled && code === codeToFind) || {};

function AboutMe({ content, layouts }) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const githubRepos = useSelector(state => state.githubRepos);
    const { skills } = content;
    const { urls: resumeUrls } = findLayoutByCode(layouts, 'resume');
    const { urls: projectsUrls } = findLayoutByCode(layouts, 'projects');
    return (
        <React.Fragment>
            <LayoutHeader>
                <BasicInformationPanel layouts={layouts} />
            </LayoutHeader>
            <LayoutBody>
                <TilesSection
                    sectionTitle="Skills"
                    tooltip="Knowledge level"
                    sectionSubtitle="A brief overview of my skills"
                    tiles={skills}
                    onlyMainTiles
                >
                    {resumeUrls && (
                        <React.Fragment>
                            <Grid className={classes.buttonGrid} container justify="center">
                                <Button variant="outlined" size="medium" onClick={() => dispatch(setLayout(resumeUrls[0]))}>
                                    View all Skills
                                </Button>
                            </Grid>
                            <Divider className={classes.divider} />
                        </React.Fragment>
                    )}
                </TilesSection>

                <TilesSection
                    sectionTitle="GitHub Repositories"
                    sectionSubtitle="My Open Source Projects"
                    tiles={githubRepos}
                    onlyMainTiles
                    hyperlinkTitle
                >
                    {projectsUrls && (
                        <Grid className={classes.buttonGrid} container justify="center">
                            <Button variant="outlined" size="medium" onClick={() => dispatch(setLayout(projectsUrls[0]))}>
                                View all Projects
                            </Button>
                        </Grid>
                    )}
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
