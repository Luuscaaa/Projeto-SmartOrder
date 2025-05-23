import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { router } from "expo-router"
import { useUser } from '@/src/components/UserContext'
import { useLocalSearchParams } from "expo-router"
import { useOrder } from '@/src/components/OrderContext';

export const PagamentoConcluido = () => {

    const { user } = useUser();
    const { total } = useOrder();

    return(
        <View style={styles.container}>
            <Text style={styles.title}> Pagamento Concluido </Text>
            <Image 
                source={require('../../images/pedido_confirmado.png')}
                style={styles.image}
                />
            <Text style={styles.title}> Comprovante </Text>
            <Text style={styles.text}> Cliente: {'\n'} {user.nome} </Text>
            <Text style={styles.text}> Valor pago: {'\n'} {total} </Text>
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