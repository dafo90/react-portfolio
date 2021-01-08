import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FolderShared } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

import ElementsArray from '../../common/element/ElementsArray';
import HeaderTitle from '../../common/HeaderTitle';
import TimelineTiles from '../../common/TimelineTiles';
import LayoutBody from '../LayoutBody';
import LayoutHeader from '../LayoutHeader';
import ResumeHeader from './ResumeHeader';

const leftColumnMinWidth = '150px';
const rightColumnWidth = { xs: '150px', md: '300px', lg: '450px' };

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
    },
    icon: {
        fontSize: '150px',
    },
    grid: {
        paddingTop: theme.spacing(2),
    },
    leftColumn: {
        minWidth: leftColumnMinWidth,
    },
    rightColumn: {
        [theme.breakpoints.up('xs')]: {
            minWidth: rightColumnWidth.xs,
        },
        [theme.breakpoints.up('md')]: {
            width: rightColumnWidth.md,
        },
        [theme.breakpoints.up('lg')]: {
            width: rightColumnWidth.lg,
        },
    },
    divider: {
        marginBottom: theme.spacing(2),
    },
    timeline: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    section: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1),
    },
}));

const Resume = ({ pageConf }) => {
    const classes = useStyles();
    const { content } = pageConf;
    const { worksAndSchools, skills, languages, courses, awards, knowMeMore } = content;

    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title="Resume" subtitle="Full-Stack Developer - Software Engineer" icon={<FolderShared className={classes.icon} />} />
            </LayoutHeader>
            <LayoutBody>
                <Paper className={classes.paper}>
                    <ResumeHeader leftColumnMinWidth={leftColumnMinWidth} rightColumnWidth={rightColumnWidth} />
                    <Divider variant="fullWidth" />
                    <Grid className={classes.grid} container spacing={4} variant="body2" justify="flex-start" alignItems="flex-start">
                        <Grid className={classes.leftColumn} item xs>
                            <TimelineTiles className={classes.timeline} tiles={worksAndSchools.filter(({ enabled = false }) => enabled)} />
                        </Grid>
                        <Grid className={classes.rightColumn} item xs={12} md="auto">
                            <Typography variant="h5">Skills</Typography>
                            <ElementsArray elements={skills} />

                            <Divider className={classes.divider} />
                            <Typography variant="h5">Courses</Typography>
                            <ElementsArray elements={courses} />

                            <Divider className={classes.divider} />
                            <Typography variant="h5">Awards</Typography>
                            <ElementsArray elements={awards} />

                            <Divider className={classes.divider} />
                            <Typography variant="h5">Languages</Typography>
                            <ElementsArray elements={languages} />

                            <Divider className={classes.divider} />
                            <Typography variant="h5">Know me more&hellip;</Typography>
                            <ElementsArray elements={knowMeMore} />
                        </Grid>
                    </Grid>
                </Paper>
            </LayoutBody>
        </React.Fragment>
    );
};

Resume.propTypes = {
    pageConf: PropTypes.object.isRequired,
};

export default Resume;
