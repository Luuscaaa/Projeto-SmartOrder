import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { router } from "expo-router"


export const PedidoConfirmado = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Pedido Confirmado </Text>
            <Image 
                source={require('../../images/pedido_confirmado.png')}
                style={styles.image}
                />
            <Text style={styles.title}> Preparando... </Text>
            <Text style={styles.text}> Nº do pedido: {'\n'} 016 </Text>
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