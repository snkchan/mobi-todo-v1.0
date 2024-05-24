import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { LoginDataType } from "../pages/sign/sign.type"
import type { Path, UseFormRegister } from "react-hook-form"
import { capitalize } from "@/func/string"
import { ComponentProps } from "react"

type LabelInputType<T extends object> = {
  register: UseFormRegister<T>
  label: Path<T>
  inputProps?: ComponentProps<"input">
}
export const LabelInput = <T extends LoginDataType>({
  register,
  label,
  inputProps,
}: LabelInputType<T>) => {
  const Captalalized = capitalize({ word: label })
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label>{Captalalized}</Label>
      <Input
        {...register(label)}
        {...inputProps}
        placeholder={Captalalized}
        autoComplete="off"
      />
    </div>
  )
}
