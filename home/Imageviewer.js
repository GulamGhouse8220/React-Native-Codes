import { StyleSheet, Image } from 'react-native';

 function ImageViewer() {
  return (
    // <Image source={placeholderImageSource} style={styles.image} />
    <Image source={require('../assets/images.jpg')}/>
  );
}
export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
