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
import Toast, { DURATION } from "react-native-easy-toast";
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
      formErrorMessage: "",
      loading: false
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
      console.log(validate);
      this.setState({
        formErrorMessage: ""
      });
      if (validate) {
        this.setState({
          formErrorMessage: "",
          loading: true
        });
        firebase
          .auth()
          .createUserWithEmailAndPassword(validate.email, validate.password)
          .then(result => {
            this.setState({
              formErrorMessage: "",
              loading: false
            });
            this.refs.toast.show("Se ha registrado exitosamente", 200, () => {
              this.props.navigation.goBack();
            });
            console.log(result);
          })
          .catch(err => {
            this.setState({
              loading: false
            });
            this.refs.toast.show(err.message, 2500);
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
      formErrorMessage,
      loading
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
        <View style={styles.buttonsContainer}>
          {loading ? (
            <Loader />
          ) : (
            <Button
              buttonStyle={styles.buttonRegisterContainer}
              title="Enviar"
              onPress={this.handleSubmit}
            />
          )}
        </View>
        <Text style={styles.formErrorMessage}>{formErrorMessage}</Text>
        <Toast
          ref="toast"
          position="top"
          positionValue={250}
          fadeInDuration={1000}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: "#fff" }}
        />
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
    backgroundColor: "#00a680"
  },
  buttonsContainer: {
    marginTop: 20
  },
  formErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 30,
    fontSize: 15
  }
});
