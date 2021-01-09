import { LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import useGithubRepos from '../../../hooks/useGithubRepos';

import HeaderTitle from '../../common/HeaderTitle';
import TilesSection from '../../common/tile/TilesSection';
import LayoutBody from '../LayoutBody';
import LayoutHeader from '../LayoutHeader';

const Projects = ({ pageConf }) => {
    const { repos, isLoading } = useGithubRepos();
    const { title, subtitle, icon } = pageConf;
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title={title} subtitle={subtitle} icon={icon ? { ...icon, fontsizenumber: icon.fontsizenumber || 150 } : undefined} />
            </LayoutHeader>
            <LayoutBody>{isLoading ? <LinearProgress /> : <TilesSection tiles={repos} />}</LayoutBody>
        </React.Fragment>
    );
};

Projects.propTypes = {
    pageConf: PropTypes.object.isRequired,
};

export default Projects;
