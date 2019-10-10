import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import SkillBox from './SkillBox';

function SkillsSection({ className, skills, onlyMainSkills }) {
    const visibleSkills = skills.filter(({ mainSkill, enabled }) => enabled && (!onlyMainSkills || mainSkill));
    return visibleSkills.length ? (
        <Grid className={className} container variant="body2" justify="center" spacing={3}>
            {visibleSkills.map(({ id, iconUrl, name, description, url }) => (
                <Grid key={id} item>
                    <SkillBox iconUrl={iconUrl} name={name} description={description} url={url} />
                </Grid>
            ))}
        </Grid>
    ) : null;
}

SkillsSection.propTypes = {
    className: PropTypes.string,
    skills: PropTypes.array.isRequired,
    onlyMainSkills: PropTypes.bool
};

SkillsSection.defaultProps = {
    className: undefined,
    onlyMainSkills: false
};

export default SkillsSection;
