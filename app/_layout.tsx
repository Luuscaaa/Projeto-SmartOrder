import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { CartProvider } from '@/src/components/CartContext'
import { OrderProvider }  from '@/src/components/OrderContext';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <CartProvider>
        <OrderProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
            <Stack.Screen name="(panel)/login" options={{ headerShown: false }}/>
            <Stack.Screen name="(panel)/home" options={{ headerShown: false }}/>
            <Stack.Screen name="(panel)/cardapio" options={{ headerShown: false }}/>
            <Stack.Screen name="(panel)/carrinho-pedidos" options={{ headerShown: false }}/>
            <Stack.Screen name="(panel)/pedido-confirmado" options={{ headerShown: false }}/>
            <Stack.Screen name="(panel)/conta" options={{ headerShown: false }}/>
            <Stack.Screen name="(panel)/pag-pix" options={{ headerShown: false }}/>
            <Stack.Screen name="(panel)/pag-cartao-cd" options={{ headerShown: false }}/>
            <Stack.Screen name="(panel)/pagamento-concluido" options={{ headerShown: false }}/>
          </Stack>
        </OrderProvider>
      </CartProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}