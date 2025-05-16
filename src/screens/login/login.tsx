import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { router } from "expo-router";

export const Login = () => {

  return (
    <View style={style.container}>
      <Text style={style.title}>Entrada</Text>
      <Text style={style.subTitle}>Digite os dados abaixo para continuar:</Text>
      <View style={style.boxMid}>
        <View style={style.boxInput}>
          <TextInput 
              style={style.input}
              placeholder="Nome completo"
          />
        </View>
        <View style={style.boxInput}>
          <TextInput
              style={style.input}
              placeholder="Telefone"
              secureTextEntry
          />
        </View>
      </View>
      <View style={style.boxButton}>
        <TouchableOpacity
          style={style.button}
          onPress={() => router.navigate('/menu')}  
        >
          <Text style={style.textButton}> Continuar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};