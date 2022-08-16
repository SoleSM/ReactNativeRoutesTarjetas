import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './src/styles/HomeStyle';
import TarjetaJungkook from './src/componentes/TarjetaJungkook';



export default function App() {
  return (
    <View style={styles.container}>
      
      <Button style={styles.boton} 
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"/>

      <TarjetaJungkook
      nombre='Jeon Jungkook'
      cargo='Bailarín, cantante, compositor'
      texto='Nacido en Busan, Corea en 1997. askjasdjadjasd asdjajsdajda ajdsajsdajsd ajsdjasd jsdjsda ajsdjasd '/>

      <StatusBar style="auto" />
    </View>
    
  );
}

