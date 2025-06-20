import { Image } from 'expo-image';
import React, { useState } from 'react';
import { FlatList, ImageSourcePropType, Platform, Pressable, StyleSheet } from 'react-native';

type Props ={
    onSelect : (image:ImageSourcePropType)=>void;
    onCloseModal:()=>void;
}
 
const EmojiList = ({onSelect,onCloseModal} : Props) => {
 const [emoji] = useState<ImageSourcePropType[]>([
  { uri: "https://img.freepik.com/free-vector/all-right-emoji-illustration_23-2151345565.jpg?t=st=1750420404~exp=1750424004~hmac=57e876ec57fee10eec04b3144122358451a171d4abe4356702aa974ad5cfc8c5&w=1380" },
   { uri: "https://img.freepik.com/free-vector/all-right-emoji-illustration_23-2151345565.jpg?t=st=1750420404~exp=1750424004~hmac=57e876ec57fee10eec04b3144122358451a171d4abe4356702aa974ad5cfc8c5&w=1380" },
 { uri: "https://img.freepik.com/free-vector/all-right-emoji-illustration_23-2151345565.jpg?t=st=1750420404~exp=1750424004~hmac=57e876ec57fee10eec04b3144122358451a171d4abe4356702aa974ad5cfc8c5&w=1380" },
   { uri: "https://img.freepik.com/free-vector/all-right-emoji-illustration_23-2151345565.jpg?t=st=1750420404~exp=1750424004~hmac=57e876ec57fee10eec04b3144122358451a171d4abe4356702aa974ad5cfc8c5&w=1380" },
   { uri: "https://img.freepik.com/free-vector/all-right-emoji-illustration_23-2151345565.jpg?t=st=1750420404~exp=1750424004~hmac=57e876ec57fee10eec04b3144122358451a171d4abe4356702aa974ad5cfc8c5&w=1380" },
  { uri: "https://img.freepik.com/free-vector/all-right-emoji-illustration_23-2151345565.jpg?t=st=1750420404~exp=1750424004~hmac=57e876ec57fee10eec04b3144122358451a171d4abe4356702aa974ad5cfc8c5&w=1380" },
]);
  return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator ={Platform.OS ==='web'}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({item, index})=>(
                <Pressable 
                onPress={()=>{
                    onSelect(item);
                    onCloseModal();
                }}
                >
                <Image source={item} key={index} style={styles.image}/>

                </Pressable>
            )}
        />
  )
}

export default EmojiList

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});