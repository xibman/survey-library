import { createApp } from "vue";
import App from "./App.vue";
// import Survey from "./components/Survey.vue";
import Header from "./Header.vue";
import Page from "./Page.vue";
import Row from "./Row.vue";
import Element from "./Element.vue";
import Panel from "./Panel.vue";
import ElementHeader from "./ElementHeader.vue";
import String from "./String.vue";
import StringViewer from "./StringViewer.vue";
import Skeleton from "./components/Skeleton.vue";
import QuestionText from "./Text.vue";
import QuestionTextInput from "./TextInput.vue";
import Checkbox from "./Checkbox.vue";
import CheckboxItem from "./CheckboxItem.vue";
import Radiogroup from "./Radiogroup.vue";
import RadiogroupItem from "./RadiogroupItem.vue";
import Signaturepad from "./Signaturepad.vue";

import TitleElement from "./components/title/TitleElement.vue";
import TitleContent from "./components/title/TitleContent.vue";
import TitleActions from "./components/title/TitleActions.vue";
import BrandInfo from "./components/BrandInfo.vue";

import "./assets/main.css";
import "survey-core/defaultV2.css";

const app = createApp(App);

// app.component("survey", Survey);
app.component("survey-header", Header);
app.component("survey-page", Page);
app.component("survey-row", Row);
app.component("survey-element", Element);
app.component("survey-panel", Panel);
app.component("survey-element-header", ElementHeader);
app.component("survey-string", String);
app.component("sv-string-viewer", StringViewer);
app.component("sv-skeleton", Skeleton);
app.component("survey-text", QuestionText);
app.component("survey-text-input", QuestionTextInput);
app.component("survey-checkbox", Checkbox);
app.component("survey-checkbox-item", CheckboxItem);
app.component("survey-radiogroup", Radiogroup);
app.component("survey-radiogroup-item", RadiogroupItem);
app.component("survey-signaturepad", Signaturepad);

app.component("survey-element-title", TitleElement);
app.component("survey-element-title-content", TitleContent);
app.component("sv-title-actions", TitleActions);
app.component("sv-brand-info", BrandInfo);

const mountedApp = app.mount("#app");
