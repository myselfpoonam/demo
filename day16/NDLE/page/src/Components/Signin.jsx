import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is Required"),
});
const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    data.preventDefault;
    console.log(data);
  };

  return (
    <div className="flex justify-center ">
      <div className="bg-gradient-to-t mr-46 ml-46 rounded-3xl from-purple-400  via-purple-500 to-purple-700 pt-8 mt-10 w-[700px] shadow-2xl shadow-purple-900/50 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <h1 className="text-3xl font-bold text-black text-center pt-10">
              NDLE Log In Form
            </h1>
            <p className="text-2xl font-bold text-center pt-8">
              Login to your account
            </p>
          </div>

          <div className="flex pt-10 justify-center">
            <div className="flex-col shadow-2xl shadow-purple-400/50 gap-8 flex ">
              <div className="flex justify-center">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-[500px] p-2 pl-6 text-2xl rounded-xl text-black shadow-2xl"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="text-red-700 font-bold text-xm">
                {/* {errors?.email.message} */}
                {errors.email?.type === "required" && "Email is Required"}
              </div>
              <div className="flex justify-center">
                <input
                  type="password"
                  placeholder="***************"
                  name="password"
                  className="w-[500px] p-2 pl-6 text-2xl rounded-xl text-black"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="text-red-700 font-bold text-xm">
                {/* {errors?.password.message} */}
                {errors.password?.type === "required" && "Password is Required"}
              </div>
              <div className=" flex  text-xl gap-2">
                <input type="checkbox" className="gap-10 w-[20px]" />
                <div className="">Remember Me</div>
                <div className="pl-[180px]">Forget Password?</div>
              </div>
              <div className="flex text-black justify-center">
                <button className="bg-white text-2xl rounded-xl shadow-xl hover:bg-blue-200 shadow-indigo-400/50 hover:shadow-blue-500/40 font-bold w-[200px] h-[50px]">
                  Log In
                </button>
              </div>
              <div className="flex pb-20 text-xl justify-center">
                <p>
                  Don't have an account? <button>Sign up</button>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
