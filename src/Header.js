import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View  style = {{margin:15}}>
      <Text style = {{ fontWeight:'bold', fontSize:30, color:'white'}}>
        Header
      </Text>
    </View>
  )
}

export default Header