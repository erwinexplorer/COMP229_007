import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Form, { Control, Error, Group, Label, Link } from "../../components/form";
import authService, { LoginPayload } from "../../services/auth";
import "./styles.scss";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const { login } = authService;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    defaultValues: { username: "", password: "" },
  });

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    },
    onError: (err: Error | AxiosError) => {
      if (axios.isAxiosError(err)) {
        console.log("Axios error : " + err);
        if (err.status === 401) {
          toast("Password is incorrect", { autoClose: 1000, closeButton: false, hideProgressBar: true });
        } else if (err.status === 404) {
          toast("Username not found", { autoClose: 1000, closeButton: false, hideProgressBar: true });
        }
      } else {
        console.log("Other error : " + err);
      }
    },
  });

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit((data) => mutate(data))}>
        <Group>
          <Label>Username</Label>
          <Control placeholder="Username" {...register("username", { required: true })} />
          <Error isError={errors.username}>Username is required</Error>
        </Group>
        <Group>
          <Label>Password</Label>
          <Control placeholder="Password" type="password" {...register("password", { required: true })} />
          <Error isError={errors.password}>Password is required</Error>
        </Group>
        <Group style={{ textAlign: "right" }}>
          <Link href="#">Forgot password</Link>
        </Group>
        <Group>
          <Button type="submit">Sign In</Button>
        </Group>
        <Group style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <Label style={{ marginRight: "5px" }}>Don't have an account?</Label>
          <Link href="/signup">Sign Up</Link>
        </Group>
      </Form>
    </div>
  );
};

export default Login;
