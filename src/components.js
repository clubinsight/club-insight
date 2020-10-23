// src/index.js

// Bootstrap Vue.
import { ButtonPlugin } from 'bootstrap-vue/esm/components/button';
import { NavbarPlugin } from 'bootstrap-vue/esm/components/navbar';
import { PaginationPlugin } from 'bootstrap-vue/esm/components/pagination';
import { TablePlugin } from 'bootstrap-vue/esm/components/table';
// import { ToastPlugin } from 'bootstrap-vue/esm/components/toast';

// App Layout.
import DefaultPage from './layout/DefaultPage.vue';
import PageHeader from './layout/PageHeader.vue';
import TopMenu from './layout/TopMenu.vue';
import PageFooter from './layout/PageFooter.vue';

export const components = {
  DefaultPage,
  PageHeader,
  TopMenu,
  PageFooter,
};

export const useComponents = {
  ButtonPlugin,
  NavbarPlugin,
  PaginationPlugin,
  TablePlugin,
  // ToastPlugin,
};
