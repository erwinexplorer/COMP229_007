import { useMutation } from "@tanstack/react-query";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import authService, { LoginPayload } from "../../services/login";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const Login = () => {
  const navigate = useNavigate();

  const { login } = authService;

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    },
    onError: (err) => {
      console.log({ err });
    },
  });

  const { handleSubmit, getFieldProps } = useFormik<LoginPayload>({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (data) => mutate(data),
  });

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Row>
          <Col>
            <Form className="p-4 border rounded" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" required placeholder="Enter username" {...getFieldProps("username")} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required placeholder="Enter password" {...getFieldProps("password")} />
              </Form.Group>

              <div className="mb-3 text-end">
                <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
                  Forgot password
                </a>
              </div>

              <Button variant="primary" type="submit" className="w-100">
                Sign in
              </Button>

              <div className="mt-3 text-center">
                <span>Don’t have an account? </span>
                <a href="/signup" style={{ textDecoration: "none", color: "#007bff" }}>
                  Sign up
                </a>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
