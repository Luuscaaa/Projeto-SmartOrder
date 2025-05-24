import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    boxBackButton: {
        marginTop: 60,
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
        padding: 5,
  },
    card: {
        flexDirection: 'row',
        width: '100%',
        maxWidth: 400,
        height: 100,
        borderRadius: 8,
        padding: 5,
        marginBottom: 12,
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    imagem: {
        width: 90,
        height: 90,
        borderRadius: 8,
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    categoria: {
        fontWeight: 'bold',
        marginBottom: 4,
        alignSelf: 'flex-start',
        fontSize: 16,
    },
    descricao:{
        color: '#888',
        alignSelf: 'flex-start'
    },
    preco: {
        marginTop: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        fontSize: 16,
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
        height: '60%',
        paddingVertical: 10,
        width: '100%',
        maxHeight: 600
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

