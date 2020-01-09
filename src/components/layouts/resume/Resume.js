import React from 'react';
import { Paper, Grid, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FolderShared } from '@material-ui/icons';
import PropTypes from 'prop-types';
import LayoutHeader from '../LayoutHeader';
import LayoutBody from '../LayoutBody';
import HeaderTitle from '../../common/HeaderTitle';
import ResumeHeader from './ResumeHeader';
import TimelineTiles from '../../common/TimelineTiles';
import ListArray from '../../common/ListArray';

const leftColumnMinWidth = '350px';
const rightColumnWidth = '300px';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2)
    },
    icon: {
        fontSize: '150px'
    },
    grid: {
        paddingTop: theme.spacing(2)
    },
    leftColumn: {
        minWidth: leftColumnMinWidth
    },
    rightColumn: {
        [theme.breakpoints.up('sm')]: {
            width: rightColumnWidth
        }
    },
    divider: {
        marginBottom: theme.spacing(2)
    },
    timeline: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    }
}));

const Resume = ({ content }) => {
    const classes = useStyles();
    const { worksAndSchools, skills, languages, courses, awards, knowMeMore } = content;
    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title="Resume" icon={<FolderShared className={classes.icon} />} />
            </LayoutHeader>
            <LayoutBody>
                <Paper className={classes.paper}>
                    <ResumeHeader leftColumnMinWidth={leftColumnMinWidth} rightColumnWidth={rightColumnWidth} />
                    <Divider variant="fullWidth" />
                    <Grid className={classes.grid} container spacing={4} variant="body2" justify="flex-start" alignItems="flex-start">
                        <Grid className={classes.leftColumn} item xs>
                            <TimelineTiles className={classes.timeline} tiles={worksAndSchools.filter(({ enabled = false }) => enabled)} />
                            <Typography variant="h5">Know me more&hellip;</Typography>
                            <ListArray elements={knowMeMore} />
                        </Grid>
                        <Grid className={classes.rightColumn} item xs={12} sm="auto">
                            <Typography variant="h5">Skills</Typography>
                            <ListArray elements={skills} />
                            <Divider className={classes.divider} />
                            <Typography variant="h5">Courses</Typography>
                            <ListArray elements={courses} />
                            <Divider className={classes.divider} />
                            <Typography variant="h5">Awards</Typography>
                            <ListArray elements={awards} />
                            <Divider className={classes.divider} />
                            <Typography variant="h5">Languages</Typography>
                            <ListArray elements={languages} />
                        </Grid>
                    </Grid>
                </Paper>
            </LayoutBody>
        </React.Fragment>
    );
};

Resume.propTypes = {
    content: PropTypes.object.isRequired
};

export default Resume;
