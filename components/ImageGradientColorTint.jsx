import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const ImageGradientColorTint = ({ imageUri, width, height, resizeMode, gradientColors }) => {
    return (
        <View style={{ width: width, height: height }}>
          <MaskedView
            style={{ flex: 1 }}
            maskElement={
              <View >
                <Image
                  source={imageUri}
                  style={styles.maskImage}
                  resizeMode={resizeMode}
                />
              </View>
            }
          >
            <LinearGradient
              colors={gradientColors}
              style={styles.gradient}
            />
          </MaskedView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      maskImage: {
        width: '100%',
        height: '100%',
      },
      gradient: {
        flex: 1, 
      },
    });

export default ImageGradientColorTint;
