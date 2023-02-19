import { createStore } from "vuex";

export default createStore({
    state: {
        loading: false,
        isLogged: (_ => {
            return !!localStorage.getItem('jwt')
        })(),
        loginChecked: false,
        openPanel: false,
        markerId: null,
        locationId: null,
    },
    mutations: {
        setOpenPanel(state, value = false) {
            state.openPanel = value;
        },
        setLoading(state, value = false) {
            state.loading = !!value;
        },
        setLogged(state, value) {
            state.isLogged = !!value;
        },
        setLoginChecked(state, value) {
            state.loginChecked = value;
        },
        login(state, data) {
            const user = data.user || null;
            const jwt = data.token || null;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('jwt', jwt);
            if (user && jwt) {
                state.isLogged = true;
            }
        },
        showLoader(state) {
            state.loading = true;
        },
        hideLoader(state) {
            state.loading = false;
        },
    },
    getters: {
        isLogged(state) {
            return state.isLogged;
        },
        isLoading(state) {
            return state.loading;
        },
        isLoginChecked(state) {
            return state.loginChecked;
        },
        isOpenPanel(state) {
            return state.openPanel;
        },
    },
    actions: {
        async loginUser({commit, state}, data) {
            const {user, token} = data;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('jwt', token);
            commit('setLogged', true);
            commit('setLoginChecked', true);
        },
    },
    modules: {}
});
