import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Extension } from '@material-ui/icons';
import PropTypes from 'prop-types';
import LayoutHeader from '../LayoutHeader';
import LayoutBody from '../LayoutBody';
import TilesSection from '../../common/tile/TilesSection';
import HeaderTitle from '../../common/HeaderTitle';
import skills from '../../../configurations/skills';

const useStyles = makeStyles(() => ({
    icon: {
        fontSize: '150px'
    }
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
    pageConf: PropTypes.object.isRequired
};

export default Skills;
