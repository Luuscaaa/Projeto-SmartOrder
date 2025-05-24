import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    boxBackButton: {
        marginTop: 100,
        width: '100%',
        maxWidth: 700,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 70
    },
    infos:{
        marginTop: 100,
        fontWeight: '600', 
        fontSize: 22, 
        textAlign: 'center',
        width: '100%',
        maxWidth: 400,
        height: 100
    },
    animatable:{
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0,
        marginTop: 0,
        marginBottom: 40
    }
})