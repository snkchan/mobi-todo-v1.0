import { ERRORS } from "@/constants"
import * as yup from "yup"

const emailYup = yup
  .string()
  .email(ERRORS.message.id)
  .required(ERRORS.message.idRequired)
const passwordYup = yup
  .string()
  .matches(ERRORS.pattern.password, ERRORS.message.password)
  .required(ERRORS.message.passwordRequired)

const passwordConfirmYup = yup
  .string()
  .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
  .required("비밀번호를 다시 입력해 주세요.")

export const schemaLogin = yup.object().shape({
  email: emailYup,
  password: passwordYup,
})

export const schemaSignUp = yup.object().shape({
  email: emailYup,
  password: passwordYup,
  passwordConfirm: passwordConfirmYup,
})
