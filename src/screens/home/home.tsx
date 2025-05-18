import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Modal, TextInput,} from "react-native";
import { modalStyles, styles } from "./style";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router"
import { router } from "expo-router";

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const { nome, telefone } = useLocalSearchParams();

  const handleSolicitar = () => {
    console.log("Mensagem enviada:", mensagem);
    setModalVisible(false);
    setMensagem("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.boxScroll}>
        <ScrollView>
          <View style={styles.boxCards}>
            <TouchableOpacity
              style={styles.cards}
              onPress={() => router.navigate("/cardapio")}
            >
              <FontAwesome name="cutlery" size={70} color={"#fff"} />
              <Text style={styles.textCard}>Cardápio</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cards}>
              <MaterialIcons
                name="format-list-bulleted"
                size={70}
                color={"#fff"}
              />
              <Text style={styles.textCard}>Pedidos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cards}
              onPress={() => setModalVisible(true)}
            >
              <MaterialIcons
                name="mark-unread-chat-alt"
                size={70}
                color={"#fff"}
              />
              <Text style={styles.textCard}>Chamar Garçom</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cards}>
              <MaterialIcons
                name="attach-money"
                size={70}
                color={"#fff"}
                onPress={() => router.navigate("/conta")}
              />
              <Text style={styles.textCard}>Fechar Conta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="home" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="format-list-bulleted" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="person" size={35} color="black" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={modalStyles.overlay}>
          <View style={modalStyles.modalContainer}>
            <Text style={modalStyles.titulo}>Solicitar ajuda do garçom</Text>
            <Text style={modalStyles.subtitulo}>
              {nome} - {telefone}
            </Text>

            <TextInput
              style={modalStyles.textInput}
              placeholder="Digite brevemente o que você precisa"
              multiline
              value={mensagem}
              onChangeText={setMensagem}
            />

            <View style={modalStyles.botoes}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={modalStyles.botaoCancelar}
              >
                <Text style={modalStyles.textoCancelar}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleSolicitar}
                style={modalStyles.botaoConfirmar}
              >
                <Text style={modalStyles.textoConfirmar}>Solicitar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};