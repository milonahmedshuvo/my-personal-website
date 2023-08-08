import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSingUp = (data) => {
    console.log(data.email, data.password);
  };

  return (
    <div>
           <p className="text-center text-2xl mb-2">Singup page</p>

      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(handleSingUp)}>
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
            value="Singup"
            className="bg-purple-500 px-4 py-1 mt-7 rounded  text-white w-1/2 mx-auto "
          />
        </form>
      </div>

      <p className="text-center mt-4">
        {" "}
        <Link to="/login">Login</Link>{" "}
      </p>
    </div>
  );
};

export default SingUp;