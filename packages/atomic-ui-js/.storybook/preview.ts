import type {Preview} from "@storybook/web-components-vite";
import '../css/roboto.css';
import '../css/index.css';
import '../css/material/symbol-icons-base.css';
import '../css/material/themes/light.css';
import '../css/material/themes/dark.css'; // conditionally applied
import './index.storybook.css';

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
