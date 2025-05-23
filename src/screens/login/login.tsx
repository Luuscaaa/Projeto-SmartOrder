import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { router } from "expo-router";
import { useState } from "react";
import { useUser } from "@/src/components/UserContext";

export const Login = () => {

  const { setUser } = useUser();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleContinuar = () => {
    if (nome.trim() === "" || telefone.trim() === "") {
    Alert.alert("Atenção", "Por favor, preencha todos os campos.");
    return;
    }
    setUser({ nome, telefone });
    router.push("/home");
  };

  const formatTelefone = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Entrada</Text>
      <Text style={style.subTitle}>Digite os dados abaixo para continuar:</Text>
      <View style={style.boxMid}>
        <View style={style.boxInput}>
          <TextInput 
              style={style.input}
              placeholder="Nome completo"
              value={nome}
              onChangeText={setNome}
          />
        </View>
        <View style={style.boxInput}>
          <TextInput
              style={style.input}
              placeholder="Telefone"
              keyboardType="phone-pad"
              value={telefone}
              onChangeText={(text) => setTelefone(formatTelefone(text))}
          />
        </View>
      </View>
      <View style={style.boxButton}>
        <TouchableOpacity
          style={style.button}
          onPress={handleContinuar}
        >
          <Text style={style.textButton}> Continuar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};