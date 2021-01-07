import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeveloperMode } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

import useGithubRepos from '../../../hooks/useGithubRepos';
import HeaderTitle from '../../common/HeaderTitle';
import TilesSection from '../../common/tile/TilesSection';
import LayoutBody from '../LayoutBody';
import LayoutHeader from '../LayoutHeader';

const useStyles = makeStyles(() => ({
    icon: {
        fontSize: '150px',
    },
}));

const Projects = ({ pageConf }) => {
    const classes = useStyles();
    const { repos, isLoading } = useGithubRepos();
    const { title, subtitle } = pageConf;
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title={title} subtitle={subtitle} icon={<DeveloperMode className={classes.icon} />} />
            </LayoutHeader>
            <LayoutBody>{isLoading ? <LinearProgress /> : <TilesSection tiles={repos} />}</LayoutBody>
        </React.Fragment>
    );
};

Projects.propTypes = {
    pageConf: PropTypes.object.isRequired,
};

export default Projects;
