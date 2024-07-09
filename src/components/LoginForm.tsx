import React from "react";
import { useFormik } from "formik";
import { Button, Stack, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import InputField from "./InputField";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username can be minimum 4 symbols!")
    .max(15, "Username can be maximum 15 symbols!")
    .required("Username Field Is Required!"),
  password: yup.string().min(6).max(16).required("Password Field is required!"),
  avatarImg: yup.string().optional(),
});

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      avatarImg: "",
      authUser: false,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(login(values));
      console.log(values);
      toast({
        title: "Successfully Logged in!",
        status: "success",
      });
      navigate("/");
    },
  });

  return (
    <Stack
      w="600px"
      display="flex"
      flexDirection="column"
      padding="30px 50px"
      boxShadow="-2px 4px 29px -6px rgba(0,0,0,0.8)"
      borderRadius="10px"
      alignItems="center"
      justifyContent="center"
      rowGap="20px"
    >
      <Heading>Login</Heading>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          rowGap: "20px",
          flexDirection: "column",
        }}
      >
        <InputField
          label="Username"
          disabled={false}
          placeholder="Username..."
          required
          meta={formik.getFieldMeta("username")}
          {...formik.getFieldProps("username")}
        />
        <InputField
          label="Password"
          disabled={false}
          placeholder="Password..."
          required
          meta={formik.getFieldMeta("password")}
          {...formik.getFieldProps("password")}
        />
        <InputField
          label="Avatar Image"
          disabled={false}
          placeholder="Put Your Avatar Image URL..."
          required={false}
          meta={formik.getFieldMeta("avatarImg")}
          {...formik.getFieldProps("avatarImg")}
        />
        <Button colorScheme="blue" type="submit" width="100%" marginTop="20px">
          Login
        </Button>
      </form>
    </Stack>
  );
};

export default LoginForm;
