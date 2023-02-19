export const getObjectFromStorage = (key) => {
    let stored;
    try {
        stored = JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
        console.log(e);
        stored = {};
    }
    return stored || {};
}

export const saveObjectToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getUserFromStorage = () => {
    return getObjectFromStorage('user');
}
