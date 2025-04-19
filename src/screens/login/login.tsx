import { CustomInput } from "@/src/components/custom-input/custom-input";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View, Platform } from "react-native";
import { styles } from "./style";
import { router } from "expo-router";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Lista de usuários fictícios
  const usuariosFake = [
    { email: 'lucas@fecaf.com', senha: '123456' },
    { email: 'guilherme@fecaf.com', senha: '123456' }
  ];

  const showAlert = (title: string, message: string) => {
    if (Platform.OS === 'web') {
      window.alert(`${title}: ${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const handleLogin = () => {
    console.log('Tentando login com:', email, senha);
  
    const usuarioValido = usuariosFake.find(
      user => user.email === email && user.senha === senha
    );
  
    if (usuarioValido) {
      console.log('Login válido');
      router.replace('/menu');
    } else {
      console.log('Login inválido');
      showAlert('Erro', 'E-mail ou senha inválidos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.boxInput}>
        <CustomInput
          titleInput="E-mail:"
          setValue={setEmail}
          value={email}
          isSenha={false}
        />
        <CustomInput
          titleInput="Senha:"
          setValue={setSenha}
          value={senha}
          isSenha={true}
        />
      </View>
      <TouchableOpacity style={styles.text}>
        <Text>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
      <TouchableOpacity style={[styles.text, { alignSelf: 'center' }]}>
        <Text style={{ fontSize: 18, marginTop: -8 }}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};