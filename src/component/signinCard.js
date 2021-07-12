import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Input, Button} from 'native-base';

function SigninCard(props) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  return (
    <>
      <View style={styles.card}>
        <View>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.fieldView}>
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
              Login
            </Button>
            <View style={styles.messageText}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('signup-screen')}>
                <Text style={styles.signupText}> Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default SigninCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 500,
    width: 300,
    marginTop: -120,
    alignSelf: 'center',
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
    alignSelf: 'center',
    marginBottom: 50,
  },
  emailInput: {marginBottom: 20},
  passwordInput: {marginTop: 20},
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
  signupText: {
    fontWeight: 'bold',
  },
  fieldView: {width: 250, marginLeft: 'auto', marginRight: 'auto'},
});
