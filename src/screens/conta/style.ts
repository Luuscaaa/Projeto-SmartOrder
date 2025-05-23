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
    resumo:{
        width: '100%',
        padding: 10
    },
    card: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    categoria: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        fontSize: 16
    },
    preco: {
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        fontSize: 16
    },
    boxItens:{
        height: 300,
        paddingVertical: 10,
        width: '100%',
        maxWidth: 400
    },
    lista: {
        
    },
    boxInfos:{
        width: '100%',
        maxWidth: 400,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30
    },
    boxTotal:{
        width: '40%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxValor:{
        width: '60%',
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
    },
    checkboxContainer: {
        width: '100%',
        maxWidth: 400,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 5,
        marginTop: 10
    },
    label: {
        marginLeft: 5,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 3
    },
    boxOptions:{
        width: '100%',
        maxWidth: 400,
        alignItems: 'flex-start'
    },
    titleOptions:{
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 30
    },
    boxButton:{
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        marginTop: 30
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