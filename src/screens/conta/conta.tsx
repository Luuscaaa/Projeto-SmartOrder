import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { FlatList, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import React, { useState } from "react"
import { Checkbox } from 'react-native-paper';


export const Conta = () => {
    const [itens, setItens] = useState([
        {
        categoria: 'Executivo',
        preco: '10.99',
        },
        {
        categoria: 'Executivo',
        preco: '10.99',
        },
        {
        categoria: 'Executivo',
        preco: '10.99',
        },
        {
        categoria: 'Executivo',
        preco: '10.99',
        },
        {
        categoria: 'Executivo',
        preco: '10.99',
        },
        {
        categoria: 'Executivo',
        preco: '10.99',
        },
        {
        categoria: 'Executivo',
        preco: '10.99',
        },
    ]);

    const renderItem = ({ item }: { item: { categoria: string; preco: string } }) => (
        <View style={styles.card}>
                <View style={styles.info}>
                    <View style={{ width: '50%'}}>
                        <Text style={styles.categoria}>{item.categoria}</Text>
                    </View>
                    <View style={{ width: '50%'}}>
                        <Text style={styles.preco}>R${item.preco}</Text>
                    </View>
                </View>
        </View>
    );

    const [checked, setChecked] = useState(false);

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
            <Text style={styles.title}>Conta</Text>
            <View style={styles.resumo}>
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
                <View style={styles.boxInfos}>
                    <View style={styles.boxTotal}>
                        <Text style={styles.textTotal}>Total</Text>
                    </View>
                    <View style={styles.boxValor}>
                        <Text style={styles.textValor}>R$ 100,00</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.titleOptions}>Opções de pagamento</Text>
            <View style={styles.boxOptions}>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        } }
                        color="#000"
                        uncheckedColor="#000" />
                    <Text style={styles.label}>Cartão de Crédito ou Débito</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        } }
                        color="#000"
                        uncheckedColor="#000" />
                    <Text style={styles.label}>Cartão Alimentação ou Refeição</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        } }
                        color="#000"
                        uncheckedColor="#000" />
                    <Text style={styles.label}>Pix</Text>
                </View>
            </View>
            <View style={styles.boxButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => router.navigate('/pag-cartao-cd')}>
                    <Text style={styles.textButton}> Próximo </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}