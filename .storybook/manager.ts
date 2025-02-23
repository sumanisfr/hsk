import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Logo
    brandTitle: 'Horizon',
    brandUrl: 'https://github.com/exprays/horizon',
    brandTarget: '_blank',
  }),
});
