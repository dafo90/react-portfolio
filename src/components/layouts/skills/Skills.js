import { makeStyles } from '@material-ui/core/styles';
import { Extension } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

import skills from '../../../configurations/skills';
import HeaderTitle from '../../common/HeaderTitle';
import TilesSection from '../../common/tile/TilesSection';
import LayoutBody from '../LayoutBody';
import LayoutHeader from '../LayoutHeader';

const useStyles = makeStyles(() => ({
    icon: {
        fontSize: '150px',
    },
}));

const Skills = ({ pageConf }) => {
    const classes = useStyles();
    const { title, subtitle } = pageConf;
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title={title} subtitle={subtitle} icon={<Extension className={classes.icon} />} />
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
