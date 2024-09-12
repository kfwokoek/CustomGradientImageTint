import { Text, View } from "react-native";
import ImageGradientColorTint from "../components/ImageGradientColorTint";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageGradientColorTint />
    </View>
  );
}
