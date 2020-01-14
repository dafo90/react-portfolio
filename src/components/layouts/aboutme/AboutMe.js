import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import LayoutHeader from '../LayoutHeader';
import LayoutBody from '../LayoutBody';
import AboutMeHeader from './AboutMeHeader';
import TilesSection from '../../common/tile/TilesSection';
import { setLayout } from '../../../actions/actions';
import skills from '../../../configurations/skills';

const useStyles = makeStyles(theme => ({
    buttonGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    }
}));

const findLayoutByCode = (layouts, codeToFind) => layouts.find(({ code, enabled }) => enabled && code === codeToFind) || {};

const AboutMe = ({ layouts }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const githubRepos = useSelector(state => state.githubRepos);

    const { urls: skillsUrls } = findLayoutByCode(layouts, 'skills');
    const { urls: projectsUrls } = findLayoutByCode(layouts, 'projects');
    return (
        <React.Fragment>
            <LayoutHeader>
                <AboutMeHeader layouts={layouts} />
            </LayoutHeader>
            <LayoutBody>
                <TilesSection sectionTitle="GitHub Repositories" sectionSubtitle="Some of my open source Projects" tiles={githubRepos} onlyMainTiles>
                    {projectsUrls && (
                        <Grid className={classes.buttonGrid} container justify="center">
                            <Button variant="outlined" size="medium" onClick={() => dispatch(setLayout(projectsUrls[0]))}>
                                View all Projects
                            </Button>
                        </Grid>
                    )}
                </TilesSection>
                <TilesSection
                    sectionTitle="Skills"
                    tooltip="Knowledge level"
                    sectionSubtitle="A brief overview of some of my Technical Skills"
                    tiles={skills.filter(({ enabled, main }) => enabled && main)}
                    onlyMainTiles
                >
                    <React.Fragment>
                        {skillsUrls && (
                            <Grid className={classes.buttonGrid} container justify="center">
                                <Button variant="outlined" size="medium" onClick={() => dispatch(setLayout(skillsUrls[0]))}>
                                    View all Skills
                                </Button>
                            </Grid>
                        )}
                    </React.Fragment>
                </TilesSection>
            </LayoutBody>
        </React.Fragment>
    );
};

AboutMe.propTypes = {
    layouts: PropTypes.array.isRequired
};

export default AboutMe;
