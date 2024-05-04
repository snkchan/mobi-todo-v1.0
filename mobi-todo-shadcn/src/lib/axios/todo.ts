import { API_TODO } from "@/constants"
import { axiosInstance } from "./base"

type getTodoListFT = (data: { page: number }) => Promise<object>
type deletePostByIdxFT = (data: { idx: number }) => Promise<object>
type postNewPostFT = (data: {
  TITLE: string
  CONTENT: string
}) => Promise<object>
export const getTodoList: getTodoListFT = async (data) => {
  const response = await axiosInstance.get(API_TODO, {
    params: { page: data.page },
  })
  return response.data
}

export const deletePostByIdx: deletePostByIdxFT = async (data) => {
  const response = await axiosInstance.delete(`${API_TODO}/${data.idx}`)
  return response
}

export const postNewPost: postNewPostFT = async (data) => {
  const response = await axiosInstance.post(API_TODO, {
    title: data.TITLE,
    content: data.CONTENT,
  })
  return response
}

export const patchPost = async (data, todoId) => {
  const response = await axiosInstance.patch(
    API_TODO,
    { ...data },
    { params: { todoId: todoId } },
  )
  return response
}
