//importamos lo necesario de la libreria para validar
//los datos ingresados por el usuario
import { object, ref, string } from "yup";

export const registerSchema = object({
  confirmPassword: string()
    .required("Es requerido")
    .oneOf([ref("password"), null], "los pass no coinciden"),
  password: string()
    .required("Password requerido")
    .min(8, "Minimo 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
      "debe contener al menos una mayuscula, una minuscula y un numero"
    ),
  email: string().required("El email es requerido").email("Email no valido"),
});
