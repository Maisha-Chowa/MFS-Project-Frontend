"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { createUser, loginWithGoogle } from "../redux/features/User/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { usePostNewUserMutation } from "../redux/features/User/userApi";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  email: string;
  password: string;
}

export default function SignupForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.user);

  console.log(isLoading);
  //console.log(isError);
  //console.log(isSuccess);
  const [postNewUser, ...options] = usePostNewUserMutation();
  const navigate = useNavigate();
  const onSubmit = (data: SignupFormInputs) => {
    console.log({ email: data.email, password: data.password });
    postNewUser({ email: data.email, password: data.password });
    console.log(options);
    dispatch(createUser({ email: data.email, password: data.password }));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  React.useEffect(() => {
    if (user.email && !isLoading) {
      navigate("/");
    }
  }, [user.email, isLoading]);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              className="py-6"
              src="https://png.pngtree.com/png-clipart/20210914/ourmid/pngtree-sign-up-now-for-social-media-geometry-png-image_3899523.jpg"
            />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  autoCapitalize="none"
                  autoCorrect="off"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && <p>{errors.password.message}</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral" type="submit">
                  Register
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control mt-6 flex flex-row ">
                <button
                  className="btn btn-neutral w-full"
                  type="submit"
                  onClick={() => handleGoogleLogin()}
                >
                  <FcGoogle />
                  Sign In With Google
                </button>
              </div>
              <p className="text-blue-300">
                Already a User.......! Go to{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Login Page
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useRef } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { useDispatch } from "react-redux";
// import { useAppSelector } from "../redux/hook";
// import { useNavigate } from "react-router-dom";
// import { createUser, loginWithGoogle } from "../redux/features/User/userSlice";

// interface SignupFormInputs {
//   email: string;
//   password: string;
// }
// const Signup = () => {
//   const emailRef = useRef<HTMLInputElement | null>(null);
//   const passwordRef = useRef<HTMLInputElement | null>(null);

//   const dispatch = useDispatch();
//   const { user, isLoading } = useAppSelector((state) => state.user);
//   const navigate = useNavigate();
//   const handleRegister = async (
//     event: React.FormEvent<HTMLFormElement>
//   ): SignupFormInputs => {
//     event.preventDefault();
//     const email = emailRef.current?.value;
//     const password = passwordRef.current?.value;
//     console.log(email, password);

//     dispatch(
//       createUser({
//         email: email,
//         password: password,
//       })
//     );
//   };

//   const handleGoogleLogin = () => {
//     dispatch(loginWithGoogle());
//   };

//   React.useEffect(() => {
//     if (user.email && !isLoading) {
//       navigate("/");
//     }
//   }, [user.email, isLoading]);
//   //React.FormEvent<HTMLFormElement>
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   //   function handleGoogleLogin(event: React.FormEvent<HTMLButtonElement>): void {
//   //     throw new Error("Function not implemented.");
//   //   }

//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <img
//             className="py-6"
//             src="https://png.pngtree.com/png-clipart/20210914/ourmid/pngtree-sign-up-now-for-social-media-geometry-png-image_3899523.jpg"
//           />
//         </div>
//         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <form className="card-body" onSubmit={handleRegister}>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 ref={emailRef}
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="password"
//                 ref={passwordRef}
//                 className="input input-bordered"
//                 required
//               />
//             </div>
//             <div className="form-control mt-6">
//               <button className="btn btn-neutral" type="submit">
//                 Register
//               </button>
//             </div>
//             <div className="divider">OR</div>
//             <div className="form-control mt-6 flex flex-row ">
//               <button
//                 className="btn btn-neutral w-full"
//                 type="submit"
//                 onClick={() => handleGoogleLogin()}
//               >
//                 <FcGoogle />
//                 Sign In With Google
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
// function dispatch(arg0: unknown) {
//   throw new Error("Function not implemented.");
// }
