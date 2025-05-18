import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"
import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useState } from "react"


export const Cardapio = () => {

    const [itens, setItens] = useState([
        {
        imagem: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taWRhc3xlbnwwfHwwfHx8MA%3D%3D',
        categoria: 'Executivo',
        descricao: 'Suculento pedaço de carne acompanhado com fritas',
        preco: '10.99',
        },
        {
        imagem: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taWRhc3xlbnwwfHwwfHx8MA%3D%3D',
        categoria: 'Executivo',
        descricao: 'Suculento pedaço de carne acompanhado com fritas',
        preco: '10.99',
        },
        {
        imagem: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taWRhc3xlbnwwfHwwfHx8MA%3D%3D',
        categoria: 'Executivo',
        descricao: 'Suculento pedaço de carne acompanhado com fritas',
        preco: '10.99',
        },
        {
        imagem: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taWRhc3xlbnwwfHwwfHx8MA%3D%3D',
        categoria: 'Executivo',
        descricao: 'Suculento pedaço de carne acompanhado com fritas',
        preco: '10.99',
        },
        {
        imagem: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taWRhc3xlbnwwfHwwfHx8MA%3D%3D',
        categoria: 'Executivo',
        descricao: 'Suculento pedaço de carne acompanhado com fritas',
        preco: '10.99',
        },
        {
        imagem: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taWRhc3xlbnwwfHwwfHx8MA%3D%3D',
        categoria: 'Executivo',
        descricao: 'Suculento pedaço de carne acompanhado com fritas',
        preco: '10.99',
        },
        {
        imagem: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taWRhc3xlbnwwfHwwfHx8MA%3D%3D',
        categoria: 'Executivo',
        descricao: 'Suculento pedaço de carne acompanhado com fritas',
        preco: '10.99',
        },
        {
        imagem: 'https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taWRhc3xlbnwwfHwwfHx8MA%3D%3D',
        categoria: 'Executivo',
        descricao: 'Suculento pedaço de carne acompanhado com fritas',
        preco: '10.99',
        },
    ]);

    const renderItem = ({ item }: { item: { imagem: string; categoria: string; descricao: string; preco: string } }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
                <View style={styles.info}>
                    <Text style={styles.categoria}>{item.categoria}</Text>
                    <Text>{item.descricao}</Text>
                    <Text style={styles.preco}>R${item.preco}</Text>
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
                        onPress={() => router.navigate('/home')} />
                </Pressable>
            </View>
            <Text style={styles.title}>Cardápio</Text>
            <View style={styles.boxOptions}>
                <TouchableOpacity style={styles.options}>
                    <Text>Principais</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.options}>
                    <Text>Sobremesas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.options}>
                    <Text>Bebidas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxItens}>
                <ScrollView>
                    <FlatList
                        data={itens}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.lista}
                    />
                </ScrollView>
            </View>
            <View style={styles.boxButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.navigate('/carrinho-pedidos')}  
                >
                    <Text style={styles.textButton}> Ir para o carrinho </Text>
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