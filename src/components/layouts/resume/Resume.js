import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import ElementsArray from '../../common/element/ElementsArray';
import HeaderTitle from '../../common/HeaderTitle';
import Interpreter from '../../common/Interpreter';
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

const Resume = ({ pageConf, layouts }) => {
    const classes = useStyles();
    const { title, subtitle, icon, content = [], timeline } = pageConf;

    const contactUrl = layouts.find(({ enabled, contact = false }) => contact && enabled)?.urls?.[0];

    return (
        <React.Fragment>
            <LayoutHeader>
                <HeaderTitle title={title} subtitle={subtitle} icon={icon ? { ...icon, fontsizenumber: icon.fontsizenumber || 150 } : undefined} />
            </LayoutHeader>
            <LayoutBody>
                <Paper className={classes.paper}>
                    <ResumeHeader leftColumnMinWidth={leftColumnMinWidth} rightColumnWidth={rightColumnWidth} contactUrl={contactUrl} />
                    <Divider variant="fullWidth" />
                    <Grid className={classes.grid} container spacing={4} variant="body2" justify="flex-start" alignItems="flex-start">
                        <Grid className={classes.leftColumn} item xs>
                            <TimelineTiles className={classes.timeline} tiles={timeline.filter(({ enabled = false }) => enabled)} />
                        </Grid>
                        <Grid className={classes.rightColumn} item xs={12} md="auto">
                            {content.map(({ code, title: elementTitle, list }, index) => (
                                <React.Fragment key={code}>
                                    {index > 0 && <Divider className={classes.divider} />}
                                    <Typography variant="h5">
                                        <Interpreter conf={elementTitle} />
                                    </Typography>
                                    <ElementsArray elements={list} />
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Grid>
                </Paper>
            </LayoutBody>
        </React.Fragment>
    );
};

Resume.propTypes = {
    pageConf: PropTypes.object.isRequired,
    layouts: PropTypes.array.isRequired,
};

export default Resume;
