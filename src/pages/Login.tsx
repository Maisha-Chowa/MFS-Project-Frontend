import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { loginUser } from "../redux/features/User/userSlice";
import { cn } from "../lib/utils";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface loginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormInputs>();

  const dispatch = useAppDispatch();
  const { user, isLoading } = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  const onSubmit = (data: loginFormInputs) => {
    console.log(data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };
  const location = useLocation();
  const from = location?.state?.path || "/";
  console.log(from);

  React.useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
    }
  }, [user.email, isLoading]);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
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
                  {...register("email", {
                    required: "email is required",
                  })}
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
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-blue-300">
                New Here.......! Go to{" "}
                <Link to="/signup" className="underline underline-offset-4">
                  Register Page
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
