export const ERRORS = {
  message: {
    id: "이메일 형식이 아닙니다.",
    idRequired: "이메일을 입력해주세요",
    password: "비밀번호 형식이 틀렸습니다.",
    passwordRequired: "비밀번호를 입력해주세요",
    titleRequired: "제목을 입력해주세요",
    contentRequired: "할 일을 입력해주세요",
  },
  pattern: {
    password: /^(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{8,}$/,
  },
} as const
