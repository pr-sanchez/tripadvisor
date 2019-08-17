import React from "react";
import t from "tcomb-form-native";
import Input from "./templates/input";
const Form = t.form.Form;
export const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

export const LoginOptions = {
  fields: {
    user: {
      template: Input,
      config: {
        placeholder: "Ingresa tu usuario",
        secureTextEntry: false,
        password: false,
        iconType: "font-awesome",
        iconName: "user"
      }
    },
    password: {
      template: Input,
      config: {
        placeholder: "Ingresa tu contraseña",
        secureTextEntry: true,
        password: true,
        iconType: "font-awesome",
        iconName: "lock"
      }
    }
  }
};
