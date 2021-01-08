import { Link, Typography, Icon } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const isDef = (val) => val !== undefined && val !== null;

let code = 0;
const getNextKey = () => {
    const key = code;
    code += 1;
    return key;
};

const Interpreter = ({ conf }) => {
    if (!isDef(conf)) return null;
    if (['string', 'number'].includes(typeof conf)) return conf;
    if (Array.isArray(conf)) {
        return (
            <React.Fragment>
                {conf.map((c) => (
                    <Interpreter key={getNextKey()} conf={c} />
                ))}
            </React.Fragment>
        );
    }
    if (['object'].includes(typeof conf)) {
        const { type } = conf;
        switch (type) {
            case 'link':
                return (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Link {...conf}>
                        <Interpreter conf={conf.text} />
                    </Link>
                );
            case 'typography':
                return (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Typography {...conf}>
                        <Interpreter conf={conf.text} />
                    </Typography>
                );
            case 'icon':
                return (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Icon {...conf} style={{ fontSize: conf.fontsizenumber, verticalAlign: conf.verticalalign }}>
                        {conf.name}
                    </Icon>
                );
            case 'p':
                return (
                    <p>
                        <Interpreter conf={conf.text} />
                    </p>
                );
            case 'i':
                return (
                    <i>
                        <Interpreter conf={conf.text} />
                    </i>
                );
            default:
                return null;
        }
    }
    return null;
};

Interpreter.propTypes = {
    conf: PropTypes.any,
};

Interpreter.defaultProps = {
    conf: undefined,
};

export default Interpreter;
