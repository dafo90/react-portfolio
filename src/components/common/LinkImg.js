import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
    imgBox: {
        overflow: 'hidden',
    },
    img: ({ scale, transparentImage }) => ({
        objectPosition: 'center',
        objectFit: 'cover',
        opacity: transparentImage ? 0.2 : 1,
        verticalAlign: 'middle',
        transition: 'transform .5s ease',
        '&:hover': {
            transform: `scale(${scale})`,
        },
    }),
}));

const LinkImg = ({ src, alt, href, imgClassName: rootImgClassName, imgBoxClassName: rootImgBoxClassName, scale, transparentImage }) => {
    const classes = useStyles({ scale, transparentImage });
    const imgClassName = classNames(classes.img, rootImgClassName);
    const imgBoxClassName = classNames(classes.imgBox, rootImgBoxClassName);
    return (
        <Link component="a" target="_blank" rel="noreferrer" href={href}>
            <div className={imgBoxClassName}>
                <img className={imgClassName} src={src} alt={alt} />
            </div>
        </Link>
    );
};

LinkImg.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    imgClassName: PropTypes.string,
    imgBoxClassName: PropTypes.string,
    scale: PropTypes.number,
    transparentImage: PropTypes.bool,
};

LinkImg.defaultProps = {
    imgClassName: undefined,
    imgBoxClassName: undefined,
    scale: 1.3,
    transparentImage: false,
};

export default LinkImg;
