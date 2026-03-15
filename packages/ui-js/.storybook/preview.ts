import type {Preview} from "@storybook/web-components-vite";
import '../css/roboto.scss';
import '../css/index.scss';
import '../css/material/symbol-icons-base.scss';
import '../css/material/themes/light.scss';
import '../css/material/themes/dark.scss'; // conditionally applied
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
