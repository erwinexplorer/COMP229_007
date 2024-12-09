import instance from "../axios/config";

interface LoginPayload {
  username: string;
  password: string;
}

interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  username: string;
  password: string;
}

const authService = {
  login: (payload: LoginPayload) => instance.post<{ token: string }>("/signin", { ...payload }),
  register: (payload: RegisterPayload) => instance.post("/signup", { ...payload }),
};

export default authService;
export type { LoginPayload, RegisterPayload };
