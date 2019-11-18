import React from 'react';
import { Link } from '@material-ui/core';
import { useSelector } from 'react-redux';
import LayoutHeader from '../LayoutHeader';
import LayoutBody from '../LayoutBody';
import TilesSection from '../../common/TilesSection';
import HeaderTitle from '../../common/HeaderTitle';
import github from '../../../configurations/github';

const Projects = () => {
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
                    imgSrc="/logos/github-color.svg"
                    imgAlt="GitHub"
                    imgHref={github.url}
                />
            </LayoutHeader>
            <LayoutBody>
                <TilesSection tiles={githubRepos} hyperlinkTitle />
            </LayoutBody>
        </React.Fragment>
    );
};

export default Projects;
