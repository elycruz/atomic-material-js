import type {Preview} from "@storybook/web-components-vite";
import '../scss/roboto.scss';
import '../scss/index.scss';
import '../scss/material/symbol-icons-base.scss';
import '../scss/material/themes/light.scss';
import '../scss/material/themes/dark.scss'; // conditionally applied
import './index.storybook.scss';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Intro', 'CSS Components', '*'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
