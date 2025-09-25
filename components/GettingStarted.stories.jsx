import { Button, Linking, Text, View } from "react-native";
import { useThemeStore } from "./themeStore";

const StarterComponent = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
  <View style={{ padding: 16 }}>
    <Text>
      Thanks for trying out Storybook, follow the{" "}
      
      <Text
        style={{
          color: "blue",
          textDecorationLine: "underline",
          textDecorationColor: "blue",
        }}
        onPress={() =>
          Linking.openURL(
            "https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/"
          )
        }
      >
        tutorial
      </Text>{" "}
      to learn how to create your own stories zustand
    </Text>

        <Text >is dark mode? {String(darkMode)} </Text>
    <Button onPress={toggleDarkMode} title="TurnDarkAndLighMode"/>


  </View>
)};

const meta = {
  title: "Welcome",
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
