import React, { useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import 'react-native-gesture-handler';


const HomeScreen =  ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    let valid = true;

    // Kiểm tra email
    if (!email.match(/\S+@\S+\.\S+/)) {
      setErrorEmail('Email không hợp lệ!');
      valid = false;
    } else {
      setErrorEmail('');
    }

    // Kiểm tra password
    if (!password) {
      setErrorPassword('Vui lòng nhập mật khẩu!');
      valid = false;
    } else {
      setErrorPassword('');
    }

    if (valid) {
      Alert.alert('Đăng nhập thành công!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/logo.png')} style={{ width: 200, height: 200 }} />
      </View>
      <View style={styles.title}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black' }}>WELCOME</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.group}>
          <Icon name="mail" style={styles.icon} />
          <TextInput
            placeholder="Enter email"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          {errorEmail !== '' && <Text style={styles.error}>{errorEmail}</Text>}
        </View>
        <View style={styles.group}>
          <Icon name="key" style={styles.icon} />
          <TextInput
            placeholder="Enter password"
            style={styles.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          {errorPassword !== '' && <Text style={styles.error}>{errorPassword}</Text>}
          <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "visibility" : "visibility-off"} style={styles.iconEye} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={validate}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.new} onPress={() => navigation.navigate('NewAccount')}>
          <Text style={{ fontSize: 14, color: 'blue' }}>Create a new account?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.new} onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={{ fontSize: 14, color: 'blue' }}>Forgot password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  logo: {
    marginTop: 20,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    alignItems: 'center',
  },
  form: {},
  group: {},
  input: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 40,
  },
  icon: {
    fontSize: 25,
    position: 'absolute',
    top: 38,
    paddingLeft: 5,
    zIndex: 1000,
  },
  error: {
    color: 'red',
    marginLeft: 10,
    marginTop: 5,
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  new: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 38,
  },
  iconEye: {
    fontSize: 25,
    color: 'grey',
  },
});

export default HomeScreen;
