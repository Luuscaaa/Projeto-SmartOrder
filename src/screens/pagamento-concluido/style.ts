import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
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
    title:{
        fontSize: 26,
        marginBottom: 50,
        fontWeight: 'bold'
    },
    text:{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
    image:{
        marginBottom: 50,
        width: 200,
        height: 200,
        }
})