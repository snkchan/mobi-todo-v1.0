export type LoginDataType = Record<"email" | "password", string>
export type SignUpDataType = LoginDataType & { passwordConfirm: string }
