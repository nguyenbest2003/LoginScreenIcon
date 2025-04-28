import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, View,TouchableOpacity } from "react-native";
import icon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialIcons";

const NewAccount =  ({navigation}) =>{
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');

    const validate = () => {
        let valid = true;
        
        // Kiểm tra email
        if (!email.match(/\S+@\S+\.\S+/)) {
            setErrorEmail('Email không hợp lệ!');
            valid = false;
        } else {
            setErrorEmail('');
        }
        if (valid) {
            Alert.alert('Vui lòng kiểm tra email của bạn để đổi mật khẩu!');
        }
    }
    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={{fontSize:30, fontWeight:'bold', color:'black'}}>
                    Create a new account!</Text>
            </View>
            <View style = {styles.form}>
                <View style = {styles.group}>
                    <Icon name="mail" style={styles.icon}/>
                    <TextInput 
                        placeholder="Enter email"
                        style={styles.input}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    {errorEmail !== '' && <Text style={styles.error}>{errorEmail}</Text>}
                
            </View>
                <TouchableOpacity style={styles.button} onPress={validate}>
                    <Text style={styles.buttonText}>Send Reset Email</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.new} onPress={()=> navigation.navigate('HomeScreen')}>
                    <Text style={{fontSize:14, color:'blue'}}>Back to Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffffff",
        padding:10,
        paddingTop:30,
    },

    title:{
        alignItems:'center',
    },

    form:{

    },
    group:{

    },
    input:{
        marginTop: 30,
        borderWidth:1,
        borderColor: 'grey',
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft:40,
    },
    icon:{
        fontSize:25,
        position:'absolute',
        top:38,
        paddingLeft:5,
        zIndex:1000,
    },
    error:{
        color:'red',
        marginLeft: 10,
        marginTop: 5,
        fontSize: 14,
    },
    button:{
        marginTop:20,
        backgroundColor:'yellow',
        padding:15,
        borderRadius:10,
        alignItems:'center',
    },
    buttonText:{
        color:'black',
        fontWeight:'bold',
        fontSize:16,
    },
    new:{
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
    },
    eyeIcon:{
        position: 'absolute',
        right: 10,
        top: 38,
    },

    iconEye:{
        fontSize:25,
        color: 'grey',
    },
})

export default NewAccount;