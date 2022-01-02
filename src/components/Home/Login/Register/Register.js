import React from 'react';
import { useForm } from "react-hook-form";
import { Link,useLocation,useNavigate } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase';

const Register = () => {
    const { handleSignInUsingGoogle,createUser } = useFirebase();
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
        createUser(data.name, data.email, data.password, location, history);
      };
      return (
        <div className="flex justify-center mt-10">
          <div className="w-auto	   shadow-md	shadow-blue-200 border-gray-500 py-8 px-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center text-3xl font-medium">Register</h1>
              <p  className="my-4 text-sm text-gray-500	">
              Already have an account?
                <Link to='/login' className="underline underline-offset-1 cursor-pointer ml-2 text-black	">
                   Login
                </Link>
              </p>
              <p className="text-gray-700 text-sm">NAME *</p>
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="bg-gray-100 py-2 px-4 w-full my-2 focus:outline-none "
              />
              <p className="text-gray-700 text-sm">EMAIL ADDRESS *</p>
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
                value="Register"
                className="w-full  bg-blue-700 hover:bg-purple-700 text-white py-2
                px-4 cursor-pointer my-3"
              />
            </form>
            <span className="mb-10">
              Or Register With
              <i className="ml-2 fab fa-google bg-gray-300 rounded py-3 px-5 text-2xl cursor-pointer"  onClick={handleRedirect}></i>
            </span>
          </div>
        </div>
      );
};

export default Register;