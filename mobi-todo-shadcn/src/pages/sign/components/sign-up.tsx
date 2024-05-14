// import { PAGE_TODO } from "@/constants"
import { schemeIdAndPwAndPWC } from "@/lib/schemes/scheme-id-and-pw"
import { yupResolver } from "@hookform/resolvers/yup"
import { type FieldErrors, useForm } from "react-hook-form"
// import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { postUserSignin } from "../sign.func"
import type { LoginDataType, SignUpDataType } from "../sign.type"
import { LabelInput } from "./label-input"

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpDataType>({
    mode: "onChange",
    resolver: yupResolver(schemeIdAndPwAndPWC),
  })

  const onSubmitSingin = async ({ email, password }: LoginDataType) => {
    const result = await postUserSignin({ email: email, password: password })
    if (result) return alert("로그인성공") // 임시로 navi(PAGE_TODO) 로수정하면됨
    alert("로그인정보를 확인해주세요 모달")
  }
  return (
    <form
      className="flex w-full flex-col gap-5 px-3"
      onSubmit={handleSubmit(onSubmitSingin)}
    >
      <LabelInput<SignUpDataType> label="email" register={register} />
      <LabelInput<SignUpDataType> label="password" register={register} />
      <LabelInput<SignUpDataType> label="passwordConfirm" register={register} />
      <ErrorField errors={errors} />
      <Button type="submit" disabled={!isValid}>
        Login
      </Button>
    </form>
  )
}
const ErrorField = ({ errors }: { errors: FieldErrors<SignUpDataType> }) => {
  return (
    <div className="h-6 w-full">
      {errors.email || errors.password ? (
        <p className="text-[10px] text-red-600">
          *{errors.email?.message || errors.password?.message}
        </p>
      ) : null}
    </div>
  )
}
