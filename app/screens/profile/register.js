import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import t from "tcomb-form-native";
import {
  RegisterStruct,
  RegisterOptions
} from "../../components/forms/register";
import Loader from "../../components/loader";
import * as firebase from "firebase";
const Form = t.form.Form;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions,
      formData: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      },
      formErrorMessage: ""
    };
  }
  handleChange = v => {
    this.setState({
      formData: v
    });
  };

  handleSubmit = () => {
    const { password, passwordConfirmation } = this.state.formData;
    if (password === passwordConfirmation) {
      const validate = this.refs.registerForm.getValue();
      this.setState({
        formErrorMessage: ""
      });
      if (validate) {
        this.setState({
          formErrorMessage: ""
        });
        firebase
          .auth()
          .createUserWithEmailAndPassword(validate.email, validate.password)
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.setState({
          formErrorMessage: "Formuralio invalido"
        });
      }
    } else {
      this.setState({
        formErrorMessage: "las contraseñas no soy iguales"
      });
    }
  };
  render() {
    const {
      registerStruct,
      registerOptions,
      formData,
      formErrorMessage
    } = this.state;
    return (
      <View style={styles.container}>
        <Form
          ref="registerForm"
          type={registerStruct}
          options={registerOptions}
          value={formData}
          onChange={v => this.handleChange(v)}
        />
        <Button
          buttonStyle={styles.buttonRegisterContainer}
          title="Enviar"
          onPress={this.handleSubmit}
        />
        <Text style={styles.formErrorMessage}>{formErrorMessage}</Text>
        <Loader />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 40
  },
  buttonRegisterContainer: {
    backgroundColor: "#00a680",
    marginTop: 20
  },
  formErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 30,
    fontSize: 15
  }
});
