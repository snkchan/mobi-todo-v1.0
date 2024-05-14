import { SignUpDataType } from "@/pages/sign/sign.type"
import { FieldErrors } from "react-hook-form"

export const ErrorField = <T extends SignUpDataType>({
  errors,
}: {
  errors: FieldErrors<T>
}) => {
  return (
    <div className="h-6 w-full">
      {errors.email || errors.password || errors.passwordConfirm ? (
        <p className="text-[10px] text-red-600">
          *
          {
            (errors.email?.message ||
              errors.password?.message ||
              errors.passwordConfirm?.message) as string
          }
        </p>
      ) : null}
    </div>
  )
}
