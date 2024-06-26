import { Button } from "@/components/ui/button"
import type { SignUpDataType } from "../sign.type"
import { ErrorField, LabelInput } from "@/components"
import { useHandleForm, useSignUser } from "../sign.hook"
import { schemaSignUp } from "@/lib/schemes"

export const SignUp = () => {
  const { register, handleSubmit, errors, isValid } =
    useSignUser<SignUpDataType>({ schema: schemaSignUp })
  const { onSubmitSingUp } = useHandleForm()
  return (
    <form
      className="flex w-full flex-col gap-5 px-3"
      onSubmit={handleSubmit(onSubmitSingUp)}
    >
      <LabelInput<SignUpDataType> label="email" register={register} />
      <LabelInput<SignUpDataType>
        label="password"
        register={register}
        inputProps={{ type: "password" }}
      />
      <LabelInput<SignUpDataType>
        label="passwordConfirm"
        register={register}
        inputProps={{ type: "password" }}
      />
      <ErrorField<SignUpDataType> errors={errors} />
      <Button type="submit" disabled={!isValid}>
        Login
      </Button>
    </form>
  )
}
