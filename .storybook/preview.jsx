import { Global, css } from "@emotion/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <style>
        {`html {
        font-family: system-ui, sans-serif;
      }`}
      </style>
      <Story />
    </>
  ),
];
