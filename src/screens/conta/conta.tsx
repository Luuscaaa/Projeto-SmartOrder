import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { FlatList, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import React, { useState } from "react"
import { Checkbox } from 'react-native-paper';
import { useOrder } from '@/src/components/OrderContext';


export const Conta = () => {

    const { orderItems, total } = useOrder();

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

    const [selectedPayment, setSelectedPayment] = useState<'cartao' | 'vale' | 'pix' | null>(null);

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
                            data={orderItems}
                            renderItem={renderItem}
                            keyExtractor={(_, i) => i.toString()}
                        />
                    </ScrollView>
                </View>
                <View style={styles.boxInfos}>
                    <View style={styles.boxTotal}>
                        <Text style={styles.textTotal}>Total</Text>
                    </View>
                    <View style={styles.boxValor}>
                        <Text style={styles.textValor}>R$ {total.toFixed(2)}</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.titleOptions}>Opções de pagamento</Text>
            <View style={styles.boxOptions}>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={selectedPayment === 'cartao' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedPayment('cartao')}
                        color="#000"
                        uncheckedColor="#000"
                    />
                    <Text style={styles.label}>Cartão de Crédito ou Débito</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={selectedPayment === 'vale' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedPayment('vale')}
                        color="#000"
                        uncheckedColor="#000"
                    />
                    <Text style={styles.label}>Cartão Alimentação ou Refeição</Text>
                </View>

                <View style={styles.checkboxContainer}>
                    <Checkbox
                        status={selectedPayment === 'pix' ? 'checked' : 'unchecked'}
                        onPress={() => setSelectedPayment('pix')}
                        color="#000"
                        uncheckedColor="#000"
                    />
                    <Text style={styles.label}>Pix</Text>
                </View>
                <View style={styles.boxButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (selectedPayment === 'cartao') {
                                router.push({ pathname: "/pag-cartao-cd", params: { total: total.toFixed(2) } });
                            } else if (selectedPayment === 'vale') {
                                router.push({ pathname: "/pag-cartao-cd", params: { total: total.toFixed(2) } });
                            } else if (selectedPayment === 'pix') {
                                router.push({ pathname: "/pag-pix", params: { total: total.toFixed(2) } });
                            } else {
                                alert("Selecione uma forma de pagamento.");
                            }
                        }}>
                        <Text style={styles.textButton}> Próximo </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}