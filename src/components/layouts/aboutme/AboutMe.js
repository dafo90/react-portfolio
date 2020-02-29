import { Button, Grid, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import skills from '../../../configurations/skills';
import { setSelectedLayout } from '../../../redux/actions/navigationAction';
import { githubRepos } from '../../../redux/selectors/selectors';
import TilesSection from '../../common/tile/TilesSection';
import LayoutBody from '../LayoutBody';
import LayoutHeader from '../LayoutHeader';
import AboutMeHeader from './AboutMeHeader';

const useStyles = makeStyles(theme => ({
    buttonGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}));

const findLayoutByCode = (layouts, codeToFind) => layouts.find(({ code, enabled }) => enabled && code === codeToFind);

const AboutMe = ({ layouts }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const repos = useSelector(githubRepos);

    const skillsLayout = findLayoutByCode(layouts, 'skills');
    const projectsLayout = findLayoutByCode(layouts, 'projects');
    return (
        <React.Fragment>
            <LayoutHeader>
                <AboutMeHeader layouts={layouts} />
            </LayoutHeader>
            <LayoutBody>
                {repos.length ? (
                    <React.Fragment>
                        <TilesSection
                            sectionTitle="GitHub Repositories"
                            sectionSubtitle="Some of my open source Projects"
                            tiles={repos}
                            onlyMainTiles
                        >
                            {projectsLayout && (
                                <Grid className={classes.buttonGrid} container justify="center">
                                    <Button variant="outlined" size="medium" onClick={() => dispatch(setSelectedLayout(projectsLayout))}>
                                        View all Projects
                                    </Button>
                                </Grid>
                            )}
                        </TilesSection>
                        <TilesSection
                            sectionTitle="Skills"
                            sectionSubtitle="A brief overview of some of my Technical Skills"
                            tiles={skills.filter(({ enabled, main }) => enabled && main)}
                            onlyMainTiles
                        >
                            <React.Fragment>
                                {skillsLayout && (
                                    <Grid className={classes.buttonGrid} container justify="center">
                                        <Button variant="outlined" size="medium" onClick={() => dispatch(setSelectedLayout(skillsLayout))}>
                                            View all Skills
                                        </Button>
                                    </Grid>
                                )}
                            </React.Fragment>
                        </TilesSection>
                    </React.Fragment>
                ) : (
                    <LinearProgress />
                )}
            </LayoutBody>
        </React.Fragment>
    );
};

AboutMe.propTypes = {
    layouts: PropTypes.array.isRequired
};

export default AboutMe;
