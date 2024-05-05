import { ERRORS } from "@/constants"
import * as yup from "yup"

export const schemeIdAndPw = yup.object().shape({
  email: yup
    .string()
    .email(ERRORS.message.id)
    .required(ERRORS.message.idRequired),
  password: yup
    .string()
    .matches(ERRORS.pattern.password, ERRORS.message.password)
    .required(ERRORS.message.passwordRequired),
})

export type schemeIdAndPwType = keyof typeof schemeIdAndPw
