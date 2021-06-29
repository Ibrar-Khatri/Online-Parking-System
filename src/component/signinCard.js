import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

function SignInCard() {
  return (
    <>
      <View style={styles.card}>
        <View>
          <Text style={styles.loginText}>Login</Text>

          <View>
            <TextInput
              placeholder="Username"
              style={styles.inputStyle}
              placeholderTextColor="black"
            />
            <TextInput
              placeholder="Password"
              style={styles.inputStyle}
              placeholderTextColor="black"
            />
          </View>
          <View
            style={{
              width: 100,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 100,
              borderRadius: '100%',
            }}>
            <Button title="Login" color="blue" />
          </View>
        </View>
      </View>
    </>
  );
}

export default SignInCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 25,
    height: 500,
    width: 300,
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  loginText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 50,
  },
  inputStyle: {
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },
});
