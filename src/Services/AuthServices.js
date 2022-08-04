import axios from "axios";
import toast from "react-hot-toast";
import { ToastStyle } from "../Components/ToastStyle/ToastStyle";
import { AUTH_TOKEN } from "../Constants/AuthConstants";

const signUpHandler = async (firstName,lastName,email,password,confirmPassword,authDispatch,navigate) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: AUTH_TOKEN,
        payload: response.data.encodedToken,
      });
      navigate("/");
      toast.success("Signed up successfully", ToastStyle);
    } catch (error) {
      toast.error("Failed to sign up", ToastStyle);
      console.error(error)
    }
  };
  const logInHandler = async (emailId, userPassword,authDispatch,navigate) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: emailId,
        password: userPassword,
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: AUTH_TOKEN,
        payload: response.data.encodedToken,
      });
      navigate("/");
      toast.success("Logged in successfully",ToastStyle)
    } catch (error) {
      toast.error("Invalid email or password",ToastStyle)
    }
  };
  const logOutHandler = (authDispatch,navigate) => {
    localStorage.removeItem("token");
    authDispatch({
      type: AUTH_TOKEN,
      payload: null,
    });
    navigate("/");
    toast.success("Logged out", ToastStyle)
  };
  export {signUpHandler, logInHandler, logOutHandler}