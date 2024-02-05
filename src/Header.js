import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View  style = {{margin:16}}>
      <Text style = {{ fontWeight:'bold', fontSize:31, color:'white'}}>
        Header
      </Text>
    </View>
  )
}

export default Header
