import * as yup from 'yup'
import { ERRORS } from '../consts/system'

export const schemeTitleAndContent = yup.object().shape({
  TITLE: yup.string().required(ERRORS.message.titleRequired),
  CONTENT: yup.string().required(ERRORS.message.contentRequired),
})
