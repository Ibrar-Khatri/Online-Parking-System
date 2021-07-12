import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Input, Button } from 'native-base';

function SignupCard(props) {
  let [name, setName] = useState('');
  let [mail, setEmail] = useState('');
  let [password, setPassword] = useState('');

  return (
    <>
      <View style={styles.card}>
        <View>
          <Text style={styles.signUpText}>Login</Text>
          <View style={styles.fieldView}>
            <Input
              variant="underlined"
              placeholder="Name"
              style={styles.emailInput}
              onChangeText={setName}
              value={name}
            />
            <Input
              variant="underlined"
              placeholder="Email"
              style={styles.emailInput}
              onChangeText={setEmail}
              value={email}
            />
            <Input
              variant="underlined"
              type="password"
              placeholder="Password"
              style={styles.passwordInput}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View>
            <Button colorScheme="blue" style={styles.loginButton}>
              Sign up
            </Button>
            <View style={styles.messageText}>
              <Tex>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}>
                <Text style={styles.loginText}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default SignupCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 500,
    width: 300,
    marginTop: -120,
    alignSelf: 'center',
  },
  signUpText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
    alignSelf: 'center',
    marginBottom: 50,
  },
  emailInput: { marginBottom: 20 },
  passwordInput: { marginTop: 20 },
  loginButton: {
    borderRadius: 100,
    width: 100,
    marginTop: 60,
    marginBottom: 15,
    alignSelf: 'center',
  },
  messageText: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  loginText: {
    fontWeight: 'bold',
  },
  fieldView: { width: 250, marginLeft: 'auto', marginRight: 'auto' },
});
