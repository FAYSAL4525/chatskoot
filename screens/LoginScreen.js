import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Button,Input,Image } from "react-native-elements";
import { auth } from '../firebase';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("Home");
			}
		})
		return unsubscribe;
	}, []);

	const signIn = () => {
		auth.signInWithEmailAndPassword(email, password)
			.catch((error) => alert(error));
	};
  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="password"
          secureTextEntry
          type="password"
          value={password}
					onChangeText={(text) => setPassWord(text)}
					onSubmitEditing={signIn}
        />
      </View>
			<Button containerStyle={styles.button}
				onPress={signIn}
				title="Login" />
      <Button
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        containerStyle={styles.button}
        title="register"
        type="outline"
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	  backgroundColor:"white"
	},
	inputContainer: {
		width:300
	},
	button: {
		width: 200,
	marginTop:10,
	},
});
