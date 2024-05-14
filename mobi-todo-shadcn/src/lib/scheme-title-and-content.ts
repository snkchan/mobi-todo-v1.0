import { ERRORS } from "@/constants"
import * as yup from "yup"

export const schemeTitleAndContent = yup.object().shape({
  TITLE: yup.string().required(ERRORS.message.titleRequired),
  CONTENT: yup.string().required(ERRORS.message.contentRequired),
})
