import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    boxInput:{
        width: '100%',
        gap: 20, 
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    text:{
        fontFamily: 'inter',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 40 
    },
    button:{
        width: '60%',
        height: 50,
        backgroundColor: '#E65100',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 40
    },
    textButton:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    divider:{
        width: '80%',
        height: 1,
        backgroundColor: '#000000',
        marginTop: 40,
        alignSelf: 'center',
    }
})