import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http_client from "./services/http_client.js";

const app = createApp(App);

app.use(store).use(router);
app.config.globalProperties.$http = http_client;

app.mount("#app");
