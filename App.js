import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button } from 'react-native';
import styles from './src/styles/HomeStyle';
import Tarjeta from './src/componentes/Tarjeta';
import { useState } from 'react';



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
        texto='Nacido en Busan, Corea en 1997. askjasdjadjasd asdjajsdajda ajdsajsdajsd ajsdjasd jsdjsda ajsdjasd '/> 
         }

         { tarjeta === 'jimin' && <Tarjeta
          nombre='Jimin'
          imagen='hoseok'
          cargo='Bailarín, cantante, compositor'
          texto='Nacido en Busan, Corea en 1997. askjasdjadjasd asdjajsdajda ajdsajsdajsd ajsdjasd jsdjsda ajsdjasd '
         />
         }
        

     
      
      

      <StatusBar style="auto" />
    </View>
    
  );
}

