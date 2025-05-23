import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { getMenuByCategory } from "../../utils/getMenuByCategory";
import { useCart } from "@/src/components/CartContext"

export const Cardapio = () => {

    const { addToCart } = useCart();

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("principais");

    const itens = getMenuByCategory(categoriaSelecionada);

    const renderItem = ({ item }: { item: { imagem: string; categoria: string; descricao: string; preco: string } }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
                <Text style={styles.categoria}>{item.categoria}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
                <TouchableOpacity 
                    onPress={() => addToCart(item)}
                    style={{ flexDirection: 'row', alignSelf: "flex-end"}}
                >
                    <Text style={styles.preco}>R${item.preco}</Text>
                    <MaterialCommunityIcons
                        name='cart-plus'
                        size={20}
                        color={'green'}
                        style={{ marginTop: 10, marginLeft: 7, marginRight: 5 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.boxBackButton}>
                <Pressable onPress={() => router.navigate('/home')}>
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color={'#FA931D'}
                    />
                </Pressable>
            </View>

            <Text style={styles.title}>Cardápio</Text>

            <View style={styles.boxOptions}>
                {['principais', 'sobremesas', 'bebidas'].map((categoria) => (
                    <TouchableOpacity
                        key={categoria}
                        style={styles.options}
                        onPress={() => setCategoriaSelecionada(categoria)}
                    >
                        <Text style={{
                            fontWeight: categoriaSelecionada === categoria ? 'bold' : 'normal'
                        }}>
                            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.boxItens}>
                <FlatList
                    data={itens}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}
                    contentContainerStyle={styles.lista}
                />
            </View>

            <View style={styles.boxButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.navigate('/carrinho-pedidos')}
                >
                    <Text style={styles.textButton}>Ir para o carrinho</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomMenu}>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="home" size={35} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="format-list-bulleted" size={35} color='black' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons name="person" size={35} color='black' />
                </TouchableOpacity>
            </View>
        </View>
    );
}