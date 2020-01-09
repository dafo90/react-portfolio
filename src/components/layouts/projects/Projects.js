import React from 'react';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { DeveloperMode } from '@material-ui/icons';
import LayoutHeader from '../LayoutHeader';
import LayoutBody from '../LayoutBody';
import TilesSection from '../../common/TilesSection';
import HeaderTitle from '../../common/HeaderTitle';
import github from '../../../configurations/github';

const useStyles = makeStyles(() => ({
    icon: {
        fontSize: '150px'
    }
}));

const Projects = () => {
    const classes = useStyles();
    const githubRepos = useSelector(state => state.githubRepos);
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle
                    title="GitHub Repositories"
                    subtitle={
                        <div>
                            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                            All my personal Project Sources are published on{' '}
                            <Link color="inherit" href={github.url} target="_blank" rel="noreferrer">
                                GitHub
                            </Link>
                        </div>
                    }
                    icon={<DeveloperMode className={classes.icon} />}
                />
            </LayoutHeader>
            <LayoutBody>
                <TilesSection tiles={githubRepos} hyperlinkTitle />
            </LayoutBody>
        </React.Fragment>
    );
};

export default Projects;
