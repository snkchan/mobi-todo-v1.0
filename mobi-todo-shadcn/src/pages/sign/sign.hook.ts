import { yupResolver } from "@hookform/resolvers/yup"
import { Resolver, useForm } from "react-hook-form"
import { LoginDataType, SignUpDataType } from "./sign.type"
import { schemaLogin, schemaSignUp } from "@/lib/schemes"
import { postUserSignUp, postUserSignin } from "./sign.func"
import { useToast } from "@/components/ui/use-toast"

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

  return {
    register,
    handleSubmit,
    errors,
    isValid,
  }
}

export const useHandleForm = () => {
  const { toast } = useToast()

  const onSubmitSingin = async ({ email, password }: LoginDataType) => {
    const result = await postUserSignin({ email: email, password: password })
    if (result)
      return toast({
        description: "Welcome",
      })
    toast({
      description: "로그인 정보를 확인해주세요~",
    })
  }

  const onSubmitSingUp = async ({ email, password }: SignUpDataType) => {
    const result = await postUserSignUp({
      email: email,
      password: password,
    })
    if (result) return alert("회원가입성공") // 임시로 navi(PAGE_TODO) 로수정하면됨
    toast({
      title: "회원가입 실패",
      description: "회원가입 정보를 확인해주세요~",
    })
  }

  return { onSubmitSingUp, onSubmitSingin }
}
