import React from 'react';
import { useSelector } from 'react-redux';
import LayoutHeader from '../LayoutHeader';
import LayoutBody from '../LayoutBody';
import TilesSection from '../../common/TilesSection';
import HeaderTitle from '../../common/HeaderTitle';
import github from '../../../configurations/github';

function Projects() {
    const githubRepos = useSelector(state => state.githubRepos);
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle
                    title="GitHub Repositories"
                    subtitle="All my personal Project Sources are published on GitHub"
                    imgSrc="/logos/github.svg"
                    imgAlt="GitHub"
                    imgHref={github.url}
                />
            </LayoutHeader>
            <LayoutBody>
                <TilesSection tiles={githubRepos} hyperlinkTitle />
            </LayoutBody>
        </React.Fragment>
    );
}

export default Projects;
