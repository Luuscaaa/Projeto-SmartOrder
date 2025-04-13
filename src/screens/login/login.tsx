import { CustomInput } from "@/src/components/custom-input/custom-input"
import { useState } from "react"
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { styles } from "./style"
import { router } from "expo-router"


export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Login </Text>
            <View style={styles.boxInput}>
                <CustomInput
                    titleInput="E-mail:"
                    setValue={setEmail}
                    value={email}
                />
                <CustomInput
                    titleInput="Senha:"
                    setValue={setEmail}
                    value={email}
                />
            </View>
            <TouchableOpacity style={styles.text}>
                <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => router.navigate('/menu')}
            >
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity style={[styles.text, { alignSelf: 'center'}]}>
                <Text style={{ fontSize: 18, marginTop: -8 }}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    )
}