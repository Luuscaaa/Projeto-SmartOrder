import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, TextInput, TouchableOpacity, View, ActivityIndicator, Image } from "react-native";
import { styles } from "./style";
import React, { useState, useRef } from "react";
import * as Animatable from "react-native-animatable";

export const PagamentoAproximacao = () => {
  const [status, setStatus] = useState<'aguardando' | 'processando' | 'concluido'>('aguardando');
  const cardRef = useRef<any>(null);


  const handleAproximar = () => {
    if (status !== 'aguardando') return;

    setStatus('processando');
    cardRef.current?.bounceIn?.();

    setTimeout(() => {
      setStatus('concluido');
      router.replace('/pagamento-concluido');
    }, 3000);
  };

  return (
    <View style={styles.container}>
        <View style={styles.boxBackButton}>
            <Pressable>
            <Ionicons
                name="arrow-back"
                size={24}
                color={'#FA931D'}
                onPress={() => router.navigate('/home')}
            />
            </Pressable>
        </View>
        <Text style={styles.title}>Pagamento via Cartão</Text>
        <Text style={styles.infos}>
            {status === 'aguardando' && 'Aproxime seu cartão ou dispositivo \n (toque aqui para simular)'}
            {status === 'processando' && 'Processando pagamento...'}
        </Text>
        <TouchableOpacity
            style={{ alignItems: 'center', marginVertical: 20 }}
            activeOpacity={1}
            onPress={handleAproximar}
            >
            <Animatable.View
                ref={cardRef}
                animation={status === 'aguardando' ? 'pulse' : undefined}
                iterationCount="infinite"
                duration={1500}
                style={styles.animatable}
            >
                <Image source={require('../../images/nfc-reader.png')}/>
            </Animatable.View>
            {status === 'processando' && <ActivityIndicator size="large" color="#000" style={{ marginTop: 50 }} />}
        </TouchableOpacity>
    </View>
  );
};