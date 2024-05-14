import { LoginDataType } from "@/pages/sign/sign.type"
import { FieldErrors } from "react-hook-form"

export const ErrorField = <T extends LoginDataType>({
  errors,
}: {
  errors: FieldErrors<T>
}) => {
  return (
    <div className="h-6 w-full">
      {errors.email || errors.password ? (
        <p className="text-[10px] text-red-600">
          *{(errors.email?.message || errors.password?.message) as string}
        </p>
      ) : null}
    </div>
  )
}
