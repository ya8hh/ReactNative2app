import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { StyleSheet, View } from "react-native";
//custom Components
import Button from "@/components/Button";
import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';
import ImageViewer from '@/components/ImageViewer';
const PlaceholderImage = "https://docs.expo.dev/static/images/tutorial/background-image.png";
export default function Index() {
  const [selectedImage,setSelectedImage] =useState<string|undefined>(undefined);
  const [showAppOptions,setShowAppOptions] =useState<boolean>(false);
  const pickImageAsync =async() =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing:true,
      quality:1
    })
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true);
      console.log(result);
    }else{
      alert('You did not select any image')
    }
  }
  const onReset =()=>{
    setShowAppOptions(false);
  }
  const onSaveImageAsync = async () =>{

  }
  const onAddSticker =() =>{

  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer  imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
          <IconButton icon='refresh'  label='Reset' onPress={onReset}/>
          <CircleButton onPress={onAddSticker} />
          <IconButton icon='save-alt'  label='Save' onPress={onSaveImageAsync}/>
          </View>
        </View>
      ):(
      <View>
        <Button theme="primary" label="Choose A photo" onPress={pickImageAsync}/>
        <Button label="Use This photo" onPress={()=>setShowAppOptions(true)}/>
      </View>)}
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
    },
    footer:{
      flex:1/3,
      alignItems:'center'
    },
    optionsContainer:{
      position:'absolute',
      bottom:80
    },
    optionsRow:{
      alignItems:'center',
      flexDirection:"row"
    }
})