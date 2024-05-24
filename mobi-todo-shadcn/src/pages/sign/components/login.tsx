import { Button } from "@/components/ui/button"
import type { LoginDataType } from "../sign.type"
import { ErrorField, LabelInput } from "@/components"
import { schemaLogin } from "@/lib/schemes"
import { useHandleForm, useSignUser } from "../sign.hook"

export const Login = () => {
  const { register, handleSubmit, errors, isValid } = useSignUser({
    schema: schemaLogin,
  })
  const { onSubmitSingin } = useHandleForm()
  return (
    <form
      className="flex w-full flex-col gap-5 px-3"
      onSubmit={handleSubmit(onSubmitSingin)}
    >
      <LabelInput<LoginDataType> label="email" register={register} />
      <LabelInput<LoginDataType>
        label="password"
        register={register}
        inputProps={{ type: "password" }}
      />
      <ErrorField errors={errors} />
      <Button type="submit" disabled={!isValid}>
        Login
      </Button>
    </form>
  )
}
