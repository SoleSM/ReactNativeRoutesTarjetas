// In App.js in a new project

import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tarjeta from './src/componentes/Tarjeta';
import { Button } from 'react-native-web';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ViewTarjeta({ navigation }){
  return(

    <View>

        <Tarjeta
        nombre='Jeon Jungkook'
        imagen='jungkook1'
        cargo='Bailarín, cantante, compositor'
        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla '/>
    
        <Button 
        onPress={()=> navigation.navigate('Home')}
        title='CLICK'
        />

        <Button
          title="Go to Tarjeta... again"
          onPress={() => navigation.push('Tarjeta')}
        />
        
        <Button title="Go back" onPress={() => navigation.goBack()} />

        <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />

       
        </View>
    


  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tarjeta" component={ViewTarjeta}/>
        <Stack.Screen name="Home" component={HomeScreen} />
       
        
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default App;