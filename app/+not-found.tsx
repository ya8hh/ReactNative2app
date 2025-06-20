import { Link, Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
const FallBack = () => {
  return (
    <>
    <Stack.Screen options={{ title: 'Oops! Not Found' }}/>
    <View style={styles.container}>
      <Text style={styles.text}>FallBack</Text>
      <Link style={styles.Link} href='/'><Text>Home</Text></Link>
    </View>
   
    </>
  )
}

export default FallBack

const styles = StyleSheet.create({

    container:{
        flex :1,
        backgroundColor:"25292e",
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#fff'
    },
    Link:{
        textDecorationLine:'underline'
    }
})