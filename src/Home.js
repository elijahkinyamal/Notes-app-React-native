import { View, Text,StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, {useState,useEffect}from 'react'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '../config';
import {FlashList} from '@shopify/flash-list'
import { Entypo } from '@expo/vector-icons';
const Home = () => {

    const navigation = useNavigation();
    const [notes, setNotes] = useState([]);


    useEffect( () => {

        firebase.firestore()
        .collection('notes')
        .onSnapshot((querySnapshot) => {
            
            const newNotes = [];
            querySnapshot.forEach((doc) => {
                const {note,title} = doc.data();
                newNotes.push({note,title,id:doc.id});
            });
            setNotes(newNotes);

        });
    },[]);

  return (
    <View style = {styles.container}>
     
      <FlashList
      
      data={notes}
      numColumns={3}
      estimatedItemSize={120}
      renderItem={({item}) => (
        <View style = {styles.noteView}>

        <Pressable

        onPress={() => navigation.navigate('Detail', {item})}
        
        
        >
        <Text style= {styles.noteTitle}> 
                {item.title}
            </Text>
            <Text style = {styles.noteDescription}> 
                {item.note}
            </Text>
        </Pressable>

        </View>
      )}/>
     
      <TouchableOpacity
       style = {styles.button}
       onPress={ () => navigation.navigate('NotesAdd')}
       >

        <Entypo name ='plus' size = {47} color='black'/>


      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create(
  {
    container :{

      flex:1,
      background: '#c9f5d9'

    },

    noteView: {
      flex:1,
      backgroundColor:'#fff',
      margin:10,
      padding:10,
      borderRadius:10,
      shadowColor:'red',
      shadowOffset:{width:3,height:2},
      shadowOpacity:0.8,
      shadowRadius:2,
      elevation:7,
      alignItems:'center'


    },
    noteTitle:{
      fontSize:20,
      fontWeight:'bold'
    },
    noteDescription:{

      fontSize:16,
      marginTop:5

    },
    button : {


      position : 'absolute',
      bottom : 60,
      right :30,
      backgroundColor : 'white',
      borderRadius : 50,
      padding:10,
      elevation : 7


    }
  }
)
