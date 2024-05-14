import { Button } from "@/components/ui/button"
import { onSubmitSingin } from "../sign.func"
import type { LoginDataType } from "../sign.type"
import { ErrorField, LabelInput } from "@/components"
import { schemaLogin } from "@/lib/schemes"
import { useSignUser } from "../sign.hook"

export const Login = () => {
  const { register, handleSubmit, errors, isValid } = useSignUser({
    schema: schemaLogin,
  })

  return (
    <form
      className="flex w-full flex-col gap-5 px-3"
      onSubmit={handleSubmit(onSubmitSingin)}
    >
      <LabelInput<LoginDataType> label="email" register={register} />
      <LabelInput<LoginDataType> label="password" register={register} />
      <ErrorField errors={errors} />
      <Button type="submit" disabled={!isValid}>
        Login
      </Button>
    </form>
  )
}
