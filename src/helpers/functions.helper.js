export const is_string = (val) => {
    if (typeof val === 'string' || val instanceof String) {
        return true;
    }
    return false;
};
