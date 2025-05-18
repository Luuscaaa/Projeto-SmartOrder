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
        padding: 15,
    },
    boxCards:{
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 15,
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

export const modalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 12,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 80,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 16,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botaoCancelar: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  textoCancelar: {
    color: "#FF6C00",
    fontWeight: "bold",
  },
  botaoConfirmar: {
    padding: 10,
    backgroundColor: "#FF6C00",
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  textoConfirmar: {
    color: "#fff",
    fontWeight: "bold",
  },
});