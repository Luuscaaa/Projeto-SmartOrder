import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
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
        fontSize: 35,
        fontWeight: 'bold',
    },
    boxOptions:{
        width: '100%',
        maxWidth: 400,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30,
        alignItems: 'center'
    },
    options:{
        borderWidth: 1,
        width: 98,
        height: 30,
        borderRadius: 8,
        borderColor: '#FA931D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    lista: {
        padding: 16,
  },
    card: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imagem: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    categoria: {
        fontWeight: 'bold',
        color: '#888',
        marginBottom: 4,
    },
    preco: {
        marginTop: 4,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
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
    boxItens:{
        height: 550,
        paddingVertical: 10
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
        marginTop: 10
    },
    textButton:{
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
})

