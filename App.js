import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "./app/components/forms/testForm";
import firebaseConfig from "./app/helpers/firebase";
import * as firebase from "firebase";
import Loader from "./app/components/loader";
import UserNavigation from "./app/navigations/user";
firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  state = {
    loginValue: {
      user: "",
      password: ""
    },
    textFormError: "",
    loading: false
  };

  handleChange = loginValue => {
    this.setState({ loginValue });
  };
  handleSubmit = () => {
    const validate = this.refs.formTest.getValue();
    if (validate) {
      this.setState({ textFormError: "", loading: true }, () => {
        setTimeout(() => {
          this.setState({
            loading: false,
            textFormError: "contraseña incorrecta"
          });
        }, 2000);
      });
    } else {
      this.setState({ textFormError: "Rellena todos los campos" });
    }
  };
  render() {
    const { loginValue, textFormError, loading } = this.state;

    return <UserNavigation />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // paddingHorizontal: 40,
    // justifyContent: "center"
  },
  textFormError: {
    color: "#f00",
    textAlign: "center",
    paddingVertical: 50,
    fontSize: 20
  }
});

//   if (loading) {
//     return (
//         <Loader />
//     );
//   } else {
//   }
//   return (
//     <View style={styles.container}>
//       <Form
//         ref="formTest"
//         type={LoginStruct}
//         options={LoginOptions}
//         value={loginValue}
//         onChange={loginValue => this.handleChange(loginValue)}
//       />
//       <Button title="Login" onPress={this.handleSubmit} />

//       <Text style={styles.textFormError}>{textFormError}</Text>
//     </View>
//   );
