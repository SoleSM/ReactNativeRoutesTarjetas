import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    cajaContenedora: {
        
        backgroundColor: 'white',
        width: '1170px',
        height: '368px',
        margin:'10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 3px 13px 1px rgb(0 0 0 / 9%)',

    },
    imagen:{
        width:'350px',
        height:'350px'
        
    },
    contenedorTexto:{
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '400',
    lineHeight: '1.5rem',
    width: '100%',
    },
    nombre:{
        fontSize: '1.3rem',
        

    },
    cargo:{
        fontSize: '1.3rem',
        marginTop: '15px',
        paddingBottom: '30px',
        position:'bottom',
       
    
    
        },
    
    texto:{
        fontSize: '1.1rem',
        textAlign: 'justify',
       
       
        


    },
   
})


export default styles