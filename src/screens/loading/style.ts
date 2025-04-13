import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E65100'
    },
    titleSmart:{
        fontFamily: 'Montserrat',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF8A9',
        marginBottom: -10
    },
    titleOrder:{
        fontFamily: 'Montserrat',
        fontSize: 35,
        color: '#FFF8A9'
    },
    boxLogo:{
        alignItems: 'center'
    },
    logoPanela:{
        width: 250,
        height: 250,
        resizeMode: 'cover',
        color: '#ffffff',
        alignItems: 'center',
        marginBottom: -50,
        marginTop: -100,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 3,
        // elevation: 5,
    }
})