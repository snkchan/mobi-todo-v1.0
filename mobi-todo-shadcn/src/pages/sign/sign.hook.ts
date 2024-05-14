import { yupResolver } from "@hookform/resolvers/yup"
import { Resolver, useForm } from "react-hook-form"
import { LoginDataType } from "./sign.type"
import { schemaLogin, schemaSignUp } from "@/lib/schemes"

type Schema<S> = {
  schema: S extends LoginDataType ? typeof schemaLogin : typeof schemaSignUp
}
export const useSignUser = <T extends LoginDataType>({ schema }: Schema<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<T>({
    mode: "onChange",
    resolver: yupResolver(schema) as Resolver<T>,
  })
  return { register, handleSubmit, errors, isValid }
}
