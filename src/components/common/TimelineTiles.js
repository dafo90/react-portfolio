import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Section from './Section';

const contentStyleColor = 'rgb(20, 30, 50)';

const useStyles = makeStyles(theme => ({
    title: {
        paddingBottom: theme.spacing(1)
    },
    subtitle: {
        paddingBottom: theme.spacing(2)
    },
    logo: {
        width: '100%',
        height: '100%'
    }
}));

const TimelineTiles = ({ className, sectionTitle, sectionSubtitle, tiles }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesUpXl = useMediaQuery(theme.breakpoints.up('xl'));
    const elemTitleClassName = classNames('vertical-timeline-element-title', classes.title);
    const elemSubtitleClassName = classNames('vertical-timeline-element-subtitle', classes.subtitle);
    return (
        <div className={className}>
            {sectionTitle && <Section title={sectionTitle} subtitle={sectionSubtitle} />}
            <VerticalTimeline layout={matchesUpXl ? '2-columns' : '1-column'}>
                {tiles.map(({ id, title, subtitle, date, imageUrl, imageAlt, description }) => (
                    <VerticalTimelineElement
                        key={id}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: contentStyleColor, color: theme.palette.primary }}
                        contentArrowStyle={{ borderRight: `7px solid  ${contentStyleColor}` }}
                        date={date}
                        iconStyle={{ background: contentStyleColor, color: theme.palette.primary }}
                        icon={<Avatar src={imageUrl} alt={imageAlt} className={classes.logo} />}
                    >
                        <div>
                            <Typography className={elemTitleClassName} variant="h5" component="h5">
                                {title}
                            </Typography>
                            <Typography className={elemSubtitleClassName} variant="subtitle2" color="textSecondary">
                                {subtitle}
                            </Typography>
                            <Typography variant="inherit">{description}</Typography>
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

TimelineTiles.propTypes = {
    className: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionSubtitle: PropTypes.string,
    tiles: PropTypes.array.isRequired
};

TimelineTiles.defaultProps = {
    className: undefined,
    sectionTitle: undefined,
    sectionSubtitle: undefined
};

export default TimelineTiles;
