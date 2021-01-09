import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const GoogleReCaptcha = React.forwardRef(({ name, sitekey, dataCallback, dataExpiredCallback, dataErrorCallback }, ref) => {
    useEffect(() => {
        if (!window.dataCallback && dataCallback) window.dataCallback = dataCallback;
        if (!window.dataExpiredCallback && dataExpiredCallback) window.dataExpiredCallback = dataExpiredCallback;
        if (!window.dataErrorCallback && dataErrorCallback) window.dataErrorCallback = dataErrorCallback;

        return () => {
            if (window.dataCallback) delete window.dataCallback;
            if (window.dataExpiredCallback) delete window.dataExpiredCallback;
            if (window.dataErrorCallback) delete window.dataErrorCallback;
        };
    }, [dataCallback, dataErrorCallback, dataExpiredCallback]);

    return (
        <div
            name={name}
            className="g-recaptcha"
            data-callback="dataCallback"
            data-expired-callback="dataExpiredCallback"
            data-error-callback="dataErrorCallback"
            data-sitekey={sitekey}
            ref={ref}
        />
    );
});

GoogleReCaptcha.propTypes = {
    name: PropTypes.string,
    sitekey: PropTypes.string.isRequired,
    dataCallback: PropTypes.func,
    dataExpiredCallback: PropTypes.func,
    dataErrorCallback: PropTypes.func,
};

GoogleReCaptcha.defaultProps = {
    name: undefined,
    dataCallback: () => {},
    dataExpiredCallback: () => {},
    dataErrorCallback: () => {},
};

export default GoogleReCaptcha;
