import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
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
    boxScroll:{
        height: '70%',
        marginTop: 50,
        padding: 30,
    },
    boxCards:{
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 20,
        marginVertical: '25%'
    },
    cards:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: 150,
        borderRadius: 15,
        backgroundColor: '#FA931D'
    },
    textCard:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        color: '#fff'
    },
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        maxWidth: 400,
        width: '100%'
      },
      
      menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      menuText: {
        fontSize: 12,
        marginTop: 4,
        color: 'black'
      },

})