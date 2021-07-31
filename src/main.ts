import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Bootstrap 5
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

// import admin template
import "startbootstrap-sb-admin/dist/css/styles.css"; // มี  css ของ bootstrap 5 รวมมาแล้ว

createApp(App).use(store).use(router).mount("#app");
