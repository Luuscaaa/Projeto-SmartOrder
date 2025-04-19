import { Text, TextInput, View } from "react-native"
import { styles } from "./style";

interface IProps {
    titleInput: string;
    setValue: (value: string) => void;
    value: string | undefined
    isSenha: boolean | undefined
}


export const CustomInput = ({titleInput, setValue, value, isSenha}: IProps) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleInput}> { titleInput }</Text>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                secureTextEntry={isSenha}
            />
        </View>
    )
}