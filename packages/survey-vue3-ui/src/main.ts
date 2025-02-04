import { createApp } from "vue";
import App from "./App.vue";
import { surveyPlugin } from "./index";

import "survey-core/default.css";

const app = createApp(App);
app.use(surveyPlugin);

app.mount("#app");
