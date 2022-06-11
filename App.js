import React, {useState, useEffect } from 'react'
import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'

const App = () =>{
  const [toggle, setToggle] = useState(false)

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle)
  useEffect(() =>{
    //LIGA FLASH DO CELULAR
    Torch.switchState(toggle)
  }, [toggle])

  useEffect(() => {
    const subscription = RNShake.addListener(() =>(
      setToggle(oldToggle => !oldToggle)
    ))
    return () => subscription.remove()
  },[])

  return(
    <View style={toggle ? style.containerLight:style.container}>
      <TouchableOpacity
       onPress={handleChangeToggle}>
    <Image style={style.lightingOn}
      source={
        toggle
        ? require('./assets/icons/lampOn.png')
        : require('./assets/icons/lampOff.png')
      }
      />
      </TouchableOpacity>
  </View>
  )
}
export default App

const style = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1, 
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn:{
    resizeMode: 'contain',
    alignSelf:'center',
    width: 349,
    height: 349,
  },
})