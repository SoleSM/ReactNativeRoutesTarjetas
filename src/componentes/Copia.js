import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button } from 'react-native';
import styles from './src/styles/HomeStyle';
import Tarjeta from './src/componentes/Tarjeta';
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';



export default function App() {

  const [tarjeta, setTarjeta] = useState("");

  return (
    <View style={styles.container}>
      <div>

      <Button style={styles.boton} 
        onPress={() => setTarjeta("jungkook")}
        title="Press Me to know Jungkook"/>
          <br></br>
        <Button style={styles.boton} 
        onPress={() => setTarjeta("jimin")}
        title="Press Me to know Jimin"/>


      </div>
      
        { tarjeta === 'jungkook' && <Tarjeta
        
        nombre='Jeon Jungkook'
        imagen='jungkook1'
        cargo='Bailarín, cantante, compositor'
        texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla '/> 
         }

         { tarjeta === 'jimin' && <Tarjeta
          nombre='Hoseok'
          imagen='hobi'
          cargo='Bailarín, cantante, compositor'
          texto='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
         />
         }
        

     
      
      

      <StatusBar style="auto" />
    </View>
    
  );
}

