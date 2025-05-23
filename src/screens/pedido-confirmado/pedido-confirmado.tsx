import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { router } from "expo-router"
import { useUser } from '@/src/components/UserContext'


export const PedidoConfirmado = () => {

    const { user } = useUser();

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Pedido Confirmado </Text>
            <Image 
                source={require('../../images/pedido_confirmado.png')}
                style={styles.image}
                />
            <Text style={styles.title}> Preparando... </Text>
            <Text style={styles.text}> Pedido feito por: {'\n'} {user.nome} </Text>
            <Text style={styles.text}> Tempo de espera: {'\n'} 20-30 minutos </Text>
            <View style={styles.boxButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.navigate('/home')}>
                    <Text style={styles.textButton}> Voltar para Home </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}