import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContextUser } from "./ContextComponents";
import { toast } from "react-hot-toast";

const Login = () => {
      const {userLogin} = useContext(createContextUser)
      const navigete = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data.email, data.password);
    userLogin(data.email, data.password)
    .then((data)=> {
        console.log(data)
        toast.success("login succes")
        navigete("/")
    })
    .catch((err)=> {
        console.log(err)
        toast.error("login filed")
    })
  };

  return (
    <div>
      <p className="text-center text-2xl mb-2">Login Page</p>


      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(handleLogin)}>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-primary w-full my-2"
            {...register("email")}
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full my-2"
            {...register("password")}
          />

          <input
            type="submit"
            value="login"
            className="bg-purple-500 px-4 py-1 mt-7 rounded  text-white w-1/2 mx-auto "
          />
        </form>
      </div>

      <p className="text-center"><Link to="/singup">Singup</Link></p>
    </div>
  );
};

export default Login;
