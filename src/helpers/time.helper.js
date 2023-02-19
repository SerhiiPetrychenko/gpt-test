import moment from 'moment-timezone';

export const utsTimeISO = (time) => {
    return moment(time).tz('UTC').toISOString();
};

export const tableGetDate = (val, offset) => {
    return moment(val).utcOffset(offset).format(dateTableFormat) + ' GMT ' + offset;
};

export const dateTableFormat = 'MM-DD-YYYY H:mm A';
