import 'react-vertical-timeline-component/style.min.css';

import { Avatar, Box, Typography } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import Section from './Section';

const useStyles = makeStyles((theme) => ({
    title: {
        paddingBottom: theme.spacing(1),
    },
    subtitle: {
        paddingBottom: theme.spacing(2),
    },
    logo: {
        width: '100%',
        height: '100%',
    },
}));

const TimelineTiles = React.forwardRef(({ className, sectionTitle, sectionSubtitle, tiles, animate }, ref) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesUpXl = useMediaQuery(theme.breakpoints.up('xl'));

    const elemTitleClassName = classNames('vertical-timeline-element-title', classes.title);
    const elemSubtitleClassName = classNames('vertical-timeline-element-subtitle', classes.subtitle);

    return (
        <Box className={className}>
            {sectionTitle && <Section title={sectionTitle} subtitle={sectionSubtitle} />}
            <VerticalTimeline animate={animate} layout={matchesUpXl ? '2-columns' : '1-column'}>
                {tiles.map(({ id, title, subtitle, date, imageUrl, imageAlt, description }) => (
                    <VerticalTimelineElement
                        key={id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: blueGrey[500], color: theme.palette.primary, textAlign: 'justify' }}
                        contentArrowStyle={{ borderRight: `7px solid  ${blueGrey[500]}` }}
                        date={date}
                        iconStyle={{ background: blueGrey[500], color: theme.palette.primary }}
                        icon={<Avatar src={imageUrl} alt={imageAlt} className={classes.logo} />}
                    >
                        <Box>
                            <Typography className={elemTitleClassName} variant="h5" component="h5">
                                {title}
                            </Typography>
                            <Typography className={elemSubtitleClassName} variant="subtitle2" color="textSecondary">
                                {subtitle}
                            </Typography>
                            <Typography variant="inherit" align="justify">
                                {description}
                            </Typography>
                        </Box>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            <Box ref={ref} />
        </Box>
    );
});

TimelineTiles.propTypes = {
    className: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionSubtitle: PropTypes.string,
    tiles: PropTypes.array.isRequired,
    animate: PropTypes.bool,
};

TimelineTiles.defaultProps = {
    className: undefined,
    sectionTitle: undefined,
    sectionSubtitle: undefined,
    animate: true,
};

export default TimelineTiles;
