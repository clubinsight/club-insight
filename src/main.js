import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// Import common functionality from the ClubInsight module.
import * as ClubInsight from './club-insight';

// Import stand-alone functionality and styles.
import { components, useComponents } from './components';
import { routes } from './routes';
import './custom.scss';

import App from './App.vue';

// Get the location for the router from the current location.
const { href } = window.location;
const pos = href.search(/[#?]/);
const base = pos === -1 ? href : href.substring(0, pos);

const router = new VueRouter({
  base,
  routes: [...routes, ...ClubInsight.routes],
});

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(ClubInsight);

// Register all the components.
[ClubInsight, { components, useComponents }].forEach(
  ({ components, useComponents }) => {
    Object.entries(components).forEach(([name, component]) => {
      Vue.component(name, component);
    });
    // These components register themselves as Vue extensions.
    Object.values(useComponents).forEach(component => {
      Vue.use(component);
    });
  }
);

const store = new Vuex.Store({
  modules: {
    ...ClubInsight.modules,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
