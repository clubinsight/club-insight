// src/index.js

import { routes } from './routes';
import { components, useComponents } from './components';

const modules = [];

const ClubInsight = {
  // Called by Vue.use().
  install(Vue) {
    // Register all the components.
    Object.entries(components).forEach(([name, component]) => {
      Vue.component(name, component);
    });
    Object.entries(useComponents).forEach(([name, component]) => {
      Vue.use(component);
    });
  },
};

export { ClubInsight, routes, modules };
