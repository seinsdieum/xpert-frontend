import type { Preview } from '@storybook/react';

import '../src/app/variables.css';
import '../src/app/styles.css';
import '../src/app/main.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export default preview;
