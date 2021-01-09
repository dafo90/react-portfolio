import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { skillsConfigSelector } from '../../../store/selectors';

import HeaderTitle from '../../common/HeaderTitle';
import TilesSection from '../../common/tile/TilesSection';
import LayoutBody from '../LayoutBody';
import LayoutHeader from '../LayoutHeader';

const Skills = ({ pageConf }) => {
    const { title, subtitle, icon } = pageConf;
    const skills = useSelector(skillsConfigSelector);
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title={title} subtitle={subtitle} icon={icon ? { ...icon, fontsizenumber: icon.fontsizenumber || 150 } : undefined} />
            </LayoutHeader>
            <LayoutBody>
                <TilesSection tiles={skills.filter(({ enabled }) => enabled)} />
            </LayoutBody>
        </React.Fragment>
    );
};

Skills.propTypes = {
    pageConf: PropTypes.object.isRequired,
};

export default Skills;
