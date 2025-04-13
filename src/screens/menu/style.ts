import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        alignSelf: 'center',
        marginLeft: 20
    },
    boxCards:{
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 25,
    },
    cards:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 190,
        width: 140,
        borderWidth: 1,
        borderRadius: 15,
    },
    textCard:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20
    },
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#E65100',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
      },
      
      menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      
      menuText: {
        fontSize: 12,
        marginTop: 4,
        color: '#fff'
      },    

})