import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import QRCode from "react-native-qrcode-svg";
import { useState, useEffect } from "react";
import { QrCodePix } from "qrcode-pix";

export const PagPix = () => {
  const [valor, setValor] = useState("30.00"); // valor inicial
  const [codigoPix, setCodigoPix] = useState("");

  useEffect(() => {
    const gerarPix = async () => {
      const qrCodePix = QrCodePix({
        version: '01',
        key: '+5511998297808', // sua chave pix
        name: 'Lucas Santana', // nome do recebedor
        city: 'TABOAO DA SERRA',   // cidade
        value: parseFloat(valor.replace(',', '.'))
      });

      const payload = await qrCodePix.payload();
      setCodigoPix(payload);
    };

    gerarPix();
  }, [valor]);

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

      <Text style={styles.title}>Pagamento via Pix</Text>
      <Text style={styles.infos}>
        1. Acesse o seu aplicativo do banco {"\n"}
        2. Na área pix, utilize a opção "Pagar com QRcode" {"\n"}
        3. Escaneie o QRcode abaixo {"\n"}
        4. Após concluir o processo no app do banco, clique em "Já paguei" {"\n"}
      </Text>
      <View style={styles.boxPix}>
        {codigoPix !== "" && (
          <QRCode value={codigoPix} size={250} />
        )}
      </View>
      <View style={styles.boxButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate('/')}>
          <Text style={styles.textButton}>Já paguei</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};