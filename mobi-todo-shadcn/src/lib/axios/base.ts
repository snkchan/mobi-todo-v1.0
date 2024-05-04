import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios"
import { getUserRefresh } from "./user"
import { AUTH_STORAGE, PAGE_LOGIN } from "@/constants"

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_TODP_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
}

export const axiosInstance = axios.create(axiosConfig)

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(AUTH_STORAGE) // 세션에서 토큰을 가져옴.
    if (token) {
      // 토큰이 존재하면, 요청 헤더에 Authorization 추가합니다.
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config // 수정된 설정으로 요청을 계속 진행
  },
  (error) => {
    alert("토큰없음")
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (err) => {
    const OriginalRequest = err.config
    if (err.response.status === 401 && OriginalRequest._retry) {
      OriginalRequest._retry = true
      try {
        const response = await getUserRefresh()
        OriginalRequest.headers["Authorization"] = `Bearer ${response}`
        return axiosInstance(OriginalRequest)
      } catch (refreshError) {
        alert("권한없음")
        window.location.href = PAGE_LOGIN
      }
    }
  },
)
