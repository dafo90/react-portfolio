import React from 'react';
import { Paper, Grid, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FolderShared } from '@material-ui/icons';
import PropTypes from 'prop-types';
import BubbleChart from '@weknow/react-bubble-chart-d3';
import useDimensions from 'react-use-dimensions';
import LayoutHeader from '../LayoutHeader';
import LayoutBody from '../LayoutBody';
import HeaderTitle from '../../common/HeaderTitle';
import ResumeHeader from './ResumeHeader';
import TimelineTiles from '../../common/TimelineTiles';
import Section from '../../common/Section';
import ElementsArray from '../../common/element/ElementsArray';

const leftColumnMinWidth = '150px';
const rightColumnWidth = { xs: '150px', md: '300px', lg: '450px' };

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
        [theme.breakpoints.up('xs')]: {
            minWidth: rightColumnWidth.xs
        },
        [theme.breakpoints.up('md')]: {
            width: rightColumnWidth.md
        },
        [theme.breakpoints.up('lg')]: {
            width: rightColumnWidth.lg
        }
    },
    divider: {
        marginBottom: theme.spacing(2)
    },
    timeline: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    section: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1)
    }
}));

const Resume = ({ pageConf }) => {
    const classes = useStyles();
    const { content } = pageConf;
    const { worksAndSchools, skills, languages, courses, awards, knowMeMore, interests } = content;
    const [refTimeline, { width: bubbleChartWidth }] = useDimensions();
    const bubbleChartHeight = bubbleChartWidth;
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
                            <TimelineTiles
                                ref={refTimeline}
                                className={classes.timeline}
                                tiles={worksAndSchools.filter(({ enabled = false }) => enabled)}
                            />
                            <Section className={classes.section} title="Know me more&hellip;" />
                            <ElementsArray elements={knowMeMore} />
                            <Section className={classes.section} title="Interests" />
                            <BubbleChart
                                graph={{
                                    zoom: 0.95,
                                    offsetX: 0.0,
                                    offsetY: 0.0
                                }}
                                width={bubbleChartWidth ? bubbleChartWidth - 10 : 0}
                                height={bubbleChartHeight ? bubbleChartHeight - 10 : 0}
                                showLegend={false}
                                valueFont={{
                                    family: 'Arial',
                                    size: 0,
                                    color: '#fff',
                                    weight: 'bold'
                                }}
                                labelFont={{
                                    size: bubbleChartWidth ? bubbleChartWidth * 0.03 : 0,
                                    color: '#fff',
                                    weight: 'bold'
                                }}
                                data={interests}
                            />
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
                        </Grid>
                    </Grid>
                </Paper>
            </LayoutBody>
        </React.Fragment>
    );
};

Resume.propTypes = {
    pageConf: PropTypes.object.isRequired
};

export default Resume;
