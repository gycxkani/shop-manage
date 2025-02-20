import { createApp } from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(VueAxios, axios);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
