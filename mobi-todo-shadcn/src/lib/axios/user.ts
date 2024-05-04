import { API_LOGIN, API_REFRESH, API_SIGN_UP, AUTH_STORAGE } from "@/constants"
import { axiosInstance } from "./base"
// import type { AxiosResponse } from "axios"

// type PostUserSigninFT = (input: { id: string; pw: string }) => Promise<object>
export const postUserSignin = async (input: { id: string; pw: string }) => {
  try {
    const response = await axiosInstance.post(API_LOGIN, {
      email: input.id,
      pw: input.pw,
    })
    localStorage.setItem(AUTH_STORAGE, response.data.token)
    return response
  } catch (req) {
    // if (req.response.status === 401 || req.response.status === 402)
    //   alert("로그인실패 다시하세요")
  }
}

export const postUserSignUp = async (input: { id: string; pw: string }) => {
  try {
    const response = await axiosInstance.post(API_SIGN_UP, {
      email: input.id,
      pw: input.pw,
    })
    console.log(response)
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
