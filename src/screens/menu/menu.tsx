
import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { MaterialIcons } from "@expo/vector-icons"


export const Menu = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Inicio </Text>
            <View style={styles.boxCards}>
                <TouchableOpacity style={styles.cards}>
                    <MaterialIcons
                        name= 'table-restaurant'
                        size={80}
                    />
                    <Text style={styles.textCard}>Mesas disponíveis</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cards}>
                    <MaterialIcons
                        name= 'calendar-month'
                        size={80}
                    />
                    <Text style={styles.textCard}>Fazer reserva</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cards}>
                    <MaterialIcons
                        name= 'menu-book'
                        size={80}
                    />
                    <Text style={styles.textCard}>Ver cardápio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cards}>
                    <MaterialIcons
                        name= 'format-list-bulleted'
                        size={80}
                    />
                    <Text style={styles.textCard}>Pedidos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomMenu}>
                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons 
                        name="home" 
                        size={28} 
                        color='#fff'    
                    />
                    <Text style={styles.menuText}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons 
                        name="history" 
                        size={28} 
                        color='#fff'
                    />
                    <Text style={styles.menuText}>Histórico</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <MaterialIcons
                        name="person" 
                        size={28} 
                        color='#fff' 
                    />
                    <Text style={styles.menuText}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}