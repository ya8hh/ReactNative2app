import { StyleSheet, View } from "react-native";
//custom Components
import ImageViewer from '@/components/ImageViewer';
const PlaceholderImage = "https://docs.expo.dev/static/images/tutorial/background-image.png";
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer  imgSource={PlaceholderImage}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#25292e",
      alignItems:"center",
    },
    text:{
      color:"#fff"
    },
    Link:{
        fontSize:20,
        textDecorationLine:'underline',
        color:'#fff'
    },
    imageContainer:{
      flex:1
    },
    image:{
      width:320,
      height:440,
      borderRadius:18,
    }
})