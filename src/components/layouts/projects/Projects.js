import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DeveloperMode } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import { githubRepos } from '../../../redux/selectors/selectors';
import HeaderTitle from '../../common/HeaderTitle';
import TilesSection from '../../common/tile/TilesSection';
import LayoutBody from '../LayoutBody';
import LayoutHeader from '../LayoutHeader';

const useStyles = makeStyles(() => ({
    icon: {
        fontSize: '150px'
    }
}));

const Projects = ({ pageConf }) => {
    const classes = useStyles();
    const repos = useSelector(githubRepos);
    const { title, subtitle } = pageConf;
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title={title} subtitle={subtitle} icon={<DeveloperMode className={classes.icon} />} />
            </LayoutHeader>
            <LayoutBody>{repos.length ? <TilesSection tiles={repos} /> : <LinearProgress />}</LayoutBody>
        </React.Fragment>
    );
};

Projects.propTypes = {
    pageConf: PropTypes.object.isRequired
};

export default Projects;
