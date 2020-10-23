// src/club-insight/components.js

// Bootstrap Vue.
import { ButtonPlugin } from 'bootstrap-vue/src/components/button';
import { NavbarPlugin } from 'bootstrap-vue/src/components/navbar';
import { PaginationPlugin } from 'bootstrap-vue/src/components/pagination';
import { TablePlugin } from 'bootstrap-vue/src/components/table';

// import { IconsPlugin } from 'bootstrap-vue/esm/icons';
import { BIcon } from 'bootstrap-vue/src/icons/icon';
import { BIconstack } from 'bootstrap-vue/src/icons/iconstack';

import {
  BIconGear,
  BIconHouse,
  BIconQuestionSquare,
} from 'bootstrap-vue/src/icons/icons';

// import { ToastPlugin } from 'bootstrap-vue/esm/components/toast';

export const components = {
  BIcon,
  BIconstack,

  BIconGear,
  BIconHouse,
  BIconQuestionSquare,
};

export const useComponents = {
  ButtonPlugin,
  NavbarPlugin,
  PaginationPlugin,
  TablePlugin,
  // ToastPlugin,
};
