import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { router } from "expo-router"


export const PagamentoConcluido = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Pagamento Concluido </Text>
            <Image 
                source={require('../../images/pedido_confirmado.png')}
                style={styles.image}
                />
            <Text style={styles.title}> Comprovante </Text>
            <Text style={styles.text}> Cliente: {'\n'} Lucas </Text>
            <Text style={styles.text}> Valor pago: {'\n'} R$ 30,00 </Text>
            <View style={styles.boxButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.navigate('/')}>
                    <Text style={styles.textButton}> Sair </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}