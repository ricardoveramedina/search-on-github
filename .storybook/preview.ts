import type { Preview } from "@storybook/react-vite";
import React from "react";
import "@root/styles/theme.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        // The label to show for this toolbar item
        title: "Theme",
        icon: "circlehollow",
        // Array of plain string values or MenuItem shape (see below)
        items: ["light", "dark"],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme || "light";
      React.useEffect(() => {
        document.documentElement.setAttribute("data-theme", selectedTheme);
        document.body.setAttribute("data-theme", selectedTheme);
      }, [selectedTheme]);
      return story();
    },
  ],
};

export default preview;
