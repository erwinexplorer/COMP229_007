import { useForm } from "react-hook-form";
import Button from "../../components/button";
import Form, { Control, Error, Group, Label, Link } from "../../components/form";
import authService, { RegisterPayload } from "../../services/auth";
import { formRequired } from "../../utils";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const { register: reg } = authService;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      username: "",
      password: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: reg,
    onSuccess: (data) => {
      console.log({ data });
      toast("Account created!", { autoClose: 1000, hideProgressBar: true, closeButton: false });
      navigate("/signin");
    },
    onError: (err: Error | AxiosError) => {
      if (axios.isAxiosError(err)) {
        console.log("Axios error : " + err);
        if (err.status === 409) {
          toast("Username already exist", { autoClose: 1000, hideProgressBar: true, closeButton: false });
        }
      } else {
        console.log("Other error : " + err);
      }
    },
  });

  const onBackClick = () => navigate("/signin");
  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit((data) => mutate(data))}>
        <Group>
          <Label>Firstname</Label>
          <Control placeholder="Firstname" {...register("first_name", { required: true })} />
          <Error isError={errors.first_name}>{formRequired("Firstname")}</Error>
        </Group>
        <Group>
          <Label>Lastname</Label>
          <Control placeholder="Lastname" {...register("last_name", { required: true })} />
          <Error isError={errors.last_name}>{formRequired("Lastname")}</Error>
        </Group>
        <Group>
          <Label>Email</Label>
          <Control placeholder="Email" {...register("email", { required: true })} />
          <Error isError={errors.email}>{formRequired("Email")}</Error>
        </Group>
        <Group>
          <Label>Address</Label>
          <Control placeholder="Address" {...register("address")} />
          <Error isError={errors.address}>{formRequired("Address")}</Error>
        </Group>
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
        <Group>
          <Button type="submit">Sign Up</Button>
          <Button onClick={onBackClick}>Back</Button>
        </Group>
      </Form>
    </div>
  );
};

export default SignUp;
