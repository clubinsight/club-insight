// src/club-insight/index.js

import { routes } from './routes';
import { components, useComponents } from './components';

const modules = [];

const icons = {
  home: 'house',
  help: 'question-square',
  settings: 'gear',
};

function install(Vue) {
  Vue.prototype.$icons = icons;
}

export { install, routes, modules, components, useComponents };
