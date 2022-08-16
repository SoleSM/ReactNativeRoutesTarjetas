import react from "react";
import { View, Image, Text} from "react-native-web";
import styles from "../styles/TarjetaStyle";

const TarjetaJungkook = (props) => {
    return(

        <View>
            <div style={styles.cajaContenedora}>
            <Image style={styles.imagen} source={require('../assets/jungkook1.jpg')}></Image>
                <div style={styles.contenedorTexto}>
                    <Text style={styles.nombre}>{props.nombre}</Text> 
                    <br></br>
                    <Text style={styles.cargo}>{props.cargo}</Text>
                    <br></br>
                    <Text style={styles.texto}>{props.texto}</Text>
                </div>
               
            </div>


        </View>


    )
}


export default TarjetaJungkook;