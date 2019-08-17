import React from "react";
import inputTemplate from "./templates/input";
import t from "tcomb-form-native";
import formValidation from "../../helpers/validation";
export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
});
export const RegisterOptions = {
  fields: {
    name: {
      template: inputTemplate,
      config: {
        placeholder: "Ingresa tu nombre y apellidos",
        iconName: "account-outline",
        iconType: "material-community",
        iconSize: 25,
        iconColor: "#b3b3b3"
      }
    },
    email: {
      template: inputTemplate,
      config: {
        placeholder: "Ingresa tu Email",
        iconName: "at",
        iconType: "material-community",
        iconSize: 25,
        iconColor: "#b3b3b3"
      }
    },
    password: {
      template: inputTemplate,
      config: {
        placeholder: "Ingresa tu contraseña",
        password: true,
        secureTextEntry: true,
        iconName: "eye-outline",
        iconType: "material-community",
        iconSize: 25,
        iconColor: "#b3b3b3"
      }
    },
    passwordConfirmation: {
      template: inputTemplate,
      config: {
        placeholder: "Repite tu contraseña",
        password: true,
        secureTextEntry: true,
        iconName: "eye-outline",
        iconType: "material-community",
        iconSize: 25,
        iconColor: "#b3b3b3"
      }
    }
  }
};
