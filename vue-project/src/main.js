import "primeicons/primeicons.css";
import "./assets/main.css";

import router from "./router/index.js";

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/moduels/store";
const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
