
import 'react-native-gesture-handler';

import Home  from './src/Home';
import Detail  from './src/Detail';
import NotesAdd  from './src/NotesAdd';
import Header from './src/Header';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component ={Home}
        options={{headerTitle:() => <Header name= "Notes"/>,
        headerStyle:{
          backgroundColor:'#4c00b0',
          height : 120,
          }
      
        }}

        />
        <Stack.Screen
        name='NotesAdd'
        component ={NotesAdd}

        options={{headerTitle:() => <Header name= "Add Notes"/>,
        headerStyle:{
          backgroundColor:'#4c00b0',
          height : 120,
          }
      
        }}
        />
        <Stack.Screen
        name='Detail'
        component ={Detail}

        options={{headerTitle:() => <Header name= "Edit Notes"/>,
        headerStyle:{
          backgroundColor:'#4c00b0',
          height : 120,
          }
      
        }}
        />

       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

