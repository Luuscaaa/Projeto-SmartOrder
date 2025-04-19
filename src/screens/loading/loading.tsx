import { ActivityIndicator, Image, Text, View } from "react-native";
import { style } from "./style";
import { useRouter } from "expo-router";
import { useEffect, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native'

const SplashScreen = () => {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const timer = setTimeout(() => {
        router.push('/login');
      }, 3000);

      return () => clearTimeout(timer);
    }, [])
  );


  return (
    <View style={style.container}>
      <View style={style.boxLogo}>
        <Image 
          source={require('../../images/logo_panela.png')}
          style={style.logoPanela}
        />
        <Text style={style.titleSmart}> SMART </Text>
        <Text style={style.titleOrder}> ORDER </Text>
      </View>
      <ActivityIndicator color="#fff" style={{ marginTop: 30 }} />
    </View>
  );
}

export const Loading = () => {
  return (
    <SplashScreen />
  );
}