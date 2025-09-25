import { View } from "react-native";
import { useThemeStore } from "../components/themeStore";

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => {
       const { darkMode } = useThemeStore();
      console.log("dark mode?",darkMode)
      return (
      <View
        style={{
          flex: 1,
          backgroundColor:
              !darkMode ? "#ffffffff" : "#6d6d6dff",
          padding: 8,
        }}
      >
        <Story />
      </View>
    )},
  ],
};

export default preview;
