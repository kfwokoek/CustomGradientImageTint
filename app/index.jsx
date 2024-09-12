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
      <ImageGradientColorTint imageUri={require('../assets/images/house.png')} width={200} height={200} resizeMode={'contain'} gradientColors={['#FFF675', '#F49D6E', '#F146AD']} />
    </View>
  );
}
