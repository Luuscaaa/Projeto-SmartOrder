import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 30
    },
    title:{
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 50
    },
    subTitle:{
        fontSize: 20,
        marginTop: 25
    },
    boxMid:{
        width: '100%',
        maxWidth: 400,
        marginTop: 200,
        gap: 20
    },
    boxInput:{
        width: '100%',
        height: 60,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: '#FFFFFF'
    },
    input: {
        height: '90%',
        width: '90%',
        borderRadius: 8,
        paddingLeft: 5,
        outlineColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        fontSize: 18
    },
    boxButton:{
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
    },
    button:{
        width: '100%',
        height: 50,
        backgroundColor: '#FA931D',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 200
    },
    textButton:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
       
})