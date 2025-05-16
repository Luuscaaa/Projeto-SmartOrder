
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { FontAwesome, MaterialIcons } from "@expo/vector-icons"


export const Menu = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            <View style={styles.boxScroll}>
                <ScrollView>
                    <View style={styles.boxCards}>
                        <TouchableOpacity style={styles.cards}>
                            <FontAwesome
                                name= 'cutlery'
                                size={70}
                                color={'#fff'}
                            />
                            <Text style={styles.textCard}>Cardápio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <MaterialIcons
                                name= 'format-list-bulleted'
                                size={70}
                                color={'#fff'}
                            />
                            <Text style={styles.textCard}>Pedidos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <MaterialIcons
                                name= 'mark-unread-chat-alt'
                                size={70}
                                color={'#fff'}
                            />
                            <Text style={styles.textCard}>Chamar Garçom</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cards}>
                            <MaterialIcons
                                name= 'attach-money'
                                size={70}
                                color={'#fff'}
                            />
                            <Text style={styles.textCard}>Fechar Conta</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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