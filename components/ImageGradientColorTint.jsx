import { StyleSheet, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const ImageGradientColorTint = () => {
    return (
        <View style={styles.container}>
          <MaskedView
            style={{ flex: 1 }}
            maskElement={
              <View >
                <Image
                  source={require('../assets/images/house.png')}
                  style={styles.maskImage}
                  resizeMode="contain"
                />
              </View>
            }
          >
            <LinearGradient
              colors={['#FFF675', '#F49D6E', '#F146AD']}
              style={styles.gradient}
            />
          </MaskedView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        width: 200,
        height: 200,
      },
      maskImage: {
        width: '100%',
        height: '100%',
      },
      gradient: {
        flex: 1, 
      },
    });

export default ImageGradientColorTint;
