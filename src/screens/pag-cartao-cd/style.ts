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
        marginTop: 10
    },
    infos:{
        marginTop: 100,
        fontWeight: '600', 
        fontSize: 22, 
        textAlign: 'center',
        width: '100%',
        maxWidth: 400,
        height: 70
    },
    animatable:{
        width: 300,
        height: 300,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginTop: 50
    }
})