import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    boxBackButton: {
        marginTop: 40,
        width: '100%',
        maxWidth: 700,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    infos:{
        marginTop: 40,
        width: '100%',
        maxWidth: 400,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600'
    },
     boxButton:{
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        marginTop: 30
    },
    button:{
        width: '100%',
        height: 50,
        backgroundColor: '#FA931D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 10
    },
    textButton:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    boxPix:{
        marginVertical: 20,
        marginTop: 100,
        marginBottom: 100
    }
})