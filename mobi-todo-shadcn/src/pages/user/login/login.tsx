import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PAGE_TODO } from "@/constants"
import { postUserSignin } from "@/lib/axios"
import { schemeIdAndPw } from "@/lib/schemes/scheme-id-and-pw"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
export const Login = () => {
  const navi = useNavigate()

  type LoginDataType = Record<"email" | "password", string>

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginDataType>({
    mode: "onChange",
    resolver: yupResolver(schemeIdAndPw),
  })

  const onSubmitSingin = async (data: LoginDataType) => {
    const result = await postUserSignin({ id: data.email, pw: data.password })
    if (result) return alert("로그인성공") // 임시로 navi(PAGE_TODO) 로수정하면됨
    alert("로그인정보를 확인해주세요 모달")
  }
  return (
    <form
      className="flex w-full flex-col gap-5 px-3"
      onSubmit={handleSubmit(onSubmitSingin)}
    >
      <div className="grid w-full items-center gap-1.5">
        <Label>Email</Label>
        <Input
          {...register("email")}
          type="email"
          placeholder="Email"
          autoComplete="off"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label>Passoword</Label>
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        <div className="h-6 w-full">
          {errors.email || errors.password ? (
            <p className="text-[10px] text-red-600">
              *{errors.email?.message || errors.password?.message}
            </p>
          ) : null}
        </div>
      </div>
      <Button type="submit" disabled={!isValid}>
        Login
      </Button>
    </form>
  )
}
