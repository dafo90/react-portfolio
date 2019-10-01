import moment from 'moment';

export default {
    calculateAge: (strBirthDate, format) => {
        const birthday = moment(strBirthDate, format);
        return birthday.diff(moment(), 'years');
    }
};
