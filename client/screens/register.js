import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  sendSignInLinkToEmail
} from "firebase/auth";



import { auth } from "../firebase";

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://boilerair-92cf5.web.app',
  // This must be true.
  handleCodeInApp: true,
  // iOS: {
  //   bundleId: 'com.example.ios'
  // },
  // android: {
  //   packageName: 'com.example.android',
  //   installApp: true,
  //   minimumVersion: '12'
  // }
  //dynamicLinkDomain: 'http://localhost:19006/'
};

const Register = () => {
  const [email, setEmail] = useState("kang377@purdue.edu");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("123456789");
  const [user, setUser] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log("user", user);
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleLogin = () => {
    navigation.replace("Login");
  }

  const handleRegister = async () => {
    console.log("Trying to register with email: ", email);
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    // const user = userCredentials.user;
    console.log("1: Registered in with", email);
    
    window.localStorage.setItem('emailForSignIn', email);
    console.log(window.location.href);

    await sendSignInLinkToEmail(auth, email, actionCodeSettings)

    console.log("2: Registered in with", user.email);

        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
    setUser(true);
  };


  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* <h1 style={styles.headline}>BoilerAir</h1> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={{ backgroundColor: 'white', height: 60 }}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={{ backgroundColor: 'white', height: 60 }}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Button onPress={handleRegister} title="Register">
          Register
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  headline: {
    color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    marginTop: 40,
  },
  button: {
    marginVertical: 20,
    width: "100%",
    padding: 4,
    alignItems: "center",
  },
  buttonAlt: {
    marginTop: 10,
    width: "100%",
    padding: 4,
    alignItems: "center"
  },
  divider: {
    backgroundColor: '#d3d3d3',
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  dividerContainer: {
    marginVertical: 20,
    flexDirection: 'row'
  },
  dividerText: {
    alignSelf: 'center',
    paddingHorizontal: 15
  }
});
