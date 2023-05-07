import MainPage from "../MainPage.vue";
import Navigation from "./Navigation.vue";

const components = [
   { name: "MainPage", component: MainPage },
   { name: "Navigation", component: Navigation },
];

export default {
   install(app) {
      components.forEach(({ name, component }) => {
         app.component(name, component);
      });
   },
};
