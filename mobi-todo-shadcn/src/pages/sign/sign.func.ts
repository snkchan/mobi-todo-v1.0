import { API_LOGIN, API_REFRESH, API_SIGN_UP, AUTH_STORAGE } from "@/constants"
import { axiosInstance } from "@/lib/axios"
import { LoginDataType, SignUpDataType } from "./sign.type"

export const postUserSignin = async ({ email, password }: LoginDataType) => {
  try {
    const response = await axiosInstance.post(API_LOGIN, {
      email: email,
      pw: password,
    })
    if (response) {
      localStorage.setItem(AUTH_STORAGE, response.data.token)
    }
    return response
  } catch (err) {
    console.log(err)
  }
}

export const postUserSignUp = async ({ email, password }: LoginDataType) => {
  try {
    const response = await axiosInstance.post(API_SIGN_UP, {
      email: email,
      pw: password,
    })
    return response
  } catch (err) {
    console.log(err)
  }
}

export const getUserRefresh = async () => {
  try {
    const response = await axiosInstance.get(API_REFRESH)
    if (response.status === 200) {
      localStorage.setItem(AUTH_STORAGE, response.data.token)
    }
    return response.data.token
  } catch (err) {
    console.log(err)
  }
}

export const onSubmitSingin = async ({ email, password }: LoginDataType) => {
  const result = await postUserSignin({ email: email, password: password })
  if (result) return alert("로그인성공") // 임시로 navi(PAGE_TODO) 로수정하면됨
  alert("로그인정보를 확인해주세요 모달")
}

export const onSubmitSingUp = async ({ email, password }: SignUpDataType) => {
  const result = await postUserSignUp({
    email: email,
    password: password,
  })
  if (result) return alert("회원가입성공") // 임시로 navi(PAGE_TODO) 로수정하면됨
  alert("로그인정보를 확인해주세요 모달")
}
