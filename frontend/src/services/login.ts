import instance from "../axios/config";

interface LoginPayload {
  username: string;
  password: string;
}

const authService = {
  login: (payload: LoginPayload) => instance.post<{ token: string }>("/signin", { ...payload }),
  validate_token: () => instance.get("/validate_token"),
};

export default authService;
export type { LoginPayload };
