import { View } from "react-native";
import { useThemeStore } from "../components/themeStore";
import { getPeachColor } from "../utils/colors/getPeachColor";

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

      return (
        <View
          style={{
            flex: 1,
            backgroundColor: getPeachColor('Primary Background'),
            padding: 8,
          }}
        >
          <Story />
        </View>
      )
    },
  ],
};

export default preview;
