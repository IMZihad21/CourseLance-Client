import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
const Login = ({ setLogIn }) => {
  const { handleSignInUsingGoogle, logInUser } = useAuth();
  const location = useLocation();
  const uri = location.state?.from || "/";
  const history = useNavigate();
  const handleRedirect = () => {
    handleSignInUsingGoogle().then(() => {
      history(uri);
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    logInUser(data.email, data.password, location, history);
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="w-auto	   shadow-md	shadow-blue-200 border-gray-500 py-8 px-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center text-3xl font-medium			">Login</h1>
          <p className="my-4 text-sm text-gray-500	">
            Don't have an account yet?
            <span
              onClick={() => setLogIn(false)}
              className="underline underline-offset-1 cursor-pointer ml-2 text-black	"
            >
              Sign Up for Free
            </span>
          </p>
          <p className="text-gray-700 text-sm">USERNAME OR EMAIL ADDRESS *</p>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="bg-gray-100 py-2 px-4 w-full my-2 focus:outline-none "
          />
          <p className="text-gray-700 text-sm">PASSWORD *</p>
          <input
            {...register("password", { required: true })}
            placeholder="Password"
            type="password"
            className="block bg-gray-100 py-2 px-4 w-full my-2 focus:outline-none "
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            type="submit"
            value="Login"
            className="w-full  bg-blue-700 hover:bg-purple-700 text-white py-2
            px-4 cursor-pointer my-3"
          />
        </form>
        <span className="mb-10">
          Or Login With
          <i
            className="ml-2 fab fa-google bg-gray-300 rounded py-3 px-5 text-2xl cursor-pointer"
            onClick={handleRedirect}
          ></i>
        </span>
      </div>
    </div>
  );
};

export default Login;
