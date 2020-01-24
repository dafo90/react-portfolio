import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { DeveloperMode } from '@material-ui/icons';
import PropTypes from 'prop-types';
import LayoutHeader from '../LayoutHeader';
import LayoutBody from '../LayoutBody';
import TilesSection from '../../common/tile/TilesSection';
import HeaderTitle from '../../common/HeaderTitle';

const useStyles = makeStyles(() => ({
    icon: {
        fontSize: '150px'
    }
}));

const Projects = ({ pageConf }) => {
    const classes = useStyles();
    const githubRepos = useSelector(state => state.githubRepos);
    const { title, subtitle } = pageConf;
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title={title} subtitle={subtitle} icon={<DeveloperMode className={classes.icon} />} />
            </LayoutHeader>
            <LayoutBody>{githubRepos.length ? <TilesSection tiles={githubRepos} /> : <LinearProgress />}</LayoutBody>
        </React.Fragment>
    );
};

Projects.propTypes = {
    pageConf: PropTypes.object.isRequired
};

export default Projects;
