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
        fontSize: 35,
        fontWeight: 'bold',
    },
    boxItens:{
        height: 550,
        paddingVertical: 10
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
    lista: {
        padding: 16,
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
    boxInfos:{
        width: '100%',
        maxWidth: 400,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    boxTotal:{
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxValor:{
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: '#FA931D'
    },
    textTotal:{
        fontSize: 26,
        fontWeight: 'bold'
    },
    textValor:{
        fontSize: 26
    }

})