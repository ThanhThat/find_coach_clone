import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import BaseCard from "./components/base/BaseCard.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseBadge from "./components/base/BaseBadge.vue";
import BaseSpinner from "./components/base/BaseSpinner.vue";
import BaseDialog from "./components/base/BaseDialog.vue";

const pinia = createPinia();
const app = createApp(App);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);

app.use(pinia);
app.use(router);

app.mount("#app");
