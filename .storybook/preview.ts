import type { Preview } from "@storybook/react";


/* TODO: update import for your custom Material UI themes */

const preview: Preview = {
    parameters: {
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

};

export default preview;
