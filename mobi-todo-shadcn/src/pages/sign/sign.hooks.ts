import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { PAGE_SIGNUP, PAGE_TODO } from "@/constants"
import { postNewPost, postUserSignUp, postUserSignin } from "@/lib/axios"

export const useFormSubmit = (schema) => {
  const navi = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema:) })

  const onSubmitSingin = async ({ ID, PW }) => {
    const result = await postUserSignin(ID, PW)
    if (result.status === 200) navi(PAGE_TODO)
  }

  const onSubmitSingup = async ({ ID, PW, pwConfirm }) => {
    if (PW !== pwConfirm) return alert("비번이서로다릅니다.")
    const result = await postUserSignUp(ID, PW)
    if (result.status === 200) return navi(PAGE_SIGNUP)
    if (result.status === 400) return alert("이미존재하는회원")
  }

  const onSubmitPostData = async ({ TITLE, CONTENT }) => {
    const result = await postNewPost(TITLE, CONTENT)
    console.log(result)
  }

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    onSubmitSingin,
    onSubmitSingup,
    navi,
    onSubmitPostData,
  }
}
