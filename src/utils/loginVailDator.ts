import { ref } from "vue";

interface User {
  email: string,
  password: string
}

interface loginRules {
  email: {
    type: string;
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: ({
    required: boolean;
    message: string;
    trigger: string;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
  })[];
}

export const loginUser = ref<User>({
  email: "",
  password: "",
});


export const loginRules = ref<loginRules>({
  email: [
    {
      type: "email",
      message: "Email is Error",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "Password is not Empty", trigger: "blur" },
    {
      min: 6,
      max: 30,
      message: "Password's length has not in 6-30",
      trigger: "blur",
    },
  ],
});