import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type Props ={
    imgSource:ImageSourcePropType;
    selectedImage?:string
}

const ImageViewer = ({imgSource ,selectedImage}:Props) => {
  const imgeSource = selectedImage? {uri:selectedImage}:imgSource;
  return (
    <Image source={imgeSource} style={styles.image}/>
    
  )
}

export default ImageViewer

const styles = StyleSheet.create({
    image:{
        width:320,
        height:440,
        borderRadius:18
    }
})