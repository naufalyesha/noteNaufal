import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Pressable, TextInput, View, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>          
            <TextInput
                value={user}
                onChangeText={(text) => setUser(text)}
                placeholder={"Username"}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder={"Password"}
                secureTextEntry={true}
                style={styles.input}
            />
            <Pressable  title={"Login"}
                style={styles.Nops}
                onPress={() => login(user, password)}>
               <Text>{"Login"}</Text>
            </Pressable>  
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#87cefa",
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: "yellow",
        marginBottom: 10,
        borderRadius: 20,
    },
    Nops:{
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: 'yellow',
    },
});
