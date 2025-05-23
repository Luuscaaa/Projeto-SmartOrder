import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { useCart } from "@/src/components/CartContext"
import { useOrder } from '@/src/components/OrderContext';

export const CarrinhoPedidos = () => {

    const { cartItems, clearCart, removeFromCart } = useCart();
    const { setOrder } = useOrder();

    const handleFinalize = () => {
        setOrder(cartItems); 
        clearCart();         
        router.navigate('/pedido-confirmado');
    };

    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.preco), 0).toFixed(2);

    const renderItem = ({ item }: { item: { imagem: string; categoria: string; descricao: string; preco: string } }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
                <Text style={styles.categoria}>{item.categoria}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
                <TouchableOpacity 
                    onPress={() => removeFromCart(item)}
                    style={{ flexDirection: 'row', alignSelf: "flex-end"}}
                >
                    <Text style={styles.preco}>R${item.preco}</Text>
                    <MaterialIcons
                        name='cancel'
                        size={20}
                        color={'red'}
                        style={{ marginTop: 10, marginLeft: 7, marginRight: 5 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
    return(
        <View style={styles.container}>
            <View style={styles.boxBackButton}>
                <Pressable>
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color={'#FA931D'}
                        onPress={() => router.navigate('/cardapio')} />
                </Pressable>
            </View>
            <Text style={styles.title}>Carrinho</Text>
            <View style={styles.boxItens}>
                <ScrollView>
                    <FlatList
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView>
            </View>
            <View style={styles.boxInfos}>
                <View style={styles.boxTotal}>
                    <Text style={styles.textTotal}>Total</Text>
                </View>
                <View style={styles.boxValor}>
                    <Text style={styles.textValor}>R$ {total}</Text>
                </View>
            </View>
            <View style={styles.boxButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleFinalize}
                >
                    <Text style={styles.textButton}> Finalizar pedido </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomMenu}>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons 
                        name="home" 
                        size={35} 
                        color='black'    
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons 
                        name="format-list-bulleted" 
                        size={35} 
                        color='black' 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons
                        name="person" 
                        size={35} 
                        color='black'  
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}