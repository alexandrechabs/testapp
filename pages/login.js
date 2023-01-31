import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userService } from "@/services";
import Link from "next/link";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email manquant"),
    password: Yup.string().required("Mot de passe manquant"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, setError, clearErrors, formState } =
    useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ email, password }) {
    toast.success("Connexion réussie");
    clearErrors("apiError");
    return userService
      .login(email, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      })
      .catch((error) => {
        setError("apiError", { message: error.message || error });
      });
  }
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Connexion
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...register("email")}
                  autoComplete="email"
                  required
                  className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-welmo-blue focus:outline-none focus:ring-welmo-blue sm:text-sm form-control ${
                    errors.email ? "border-red-600" : ""
                  }`}
                  placeholder="Adresse email"
                />
                <div className="ml-4 text-red-600">{errors.email?.message}</div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  {...register("password")}
                  autoComplete="current-password"
                  required
                  className={`relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-welmo-blue focus:outline-none sm:text-sm form-control ${
                    errors.password ? "border-red-600" : ""
                  }`}
                  placeholder="Mot de passe"
                />
                <div className="ml-4 text-red-600">
                  {errors.password?.message}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-welmo-blue hover:text-welmo-blue-hover"
                >
                  Mot de passe oublié?
                </a>
              </div>
            </div>

            <div>
              <button
                disabled={formState.isSubmitting}
                className="group relative flex w-full justify-center rounded-md items-center border border-transparent bg-welmo-blue py-2 px-4 text-xl font-medium text-white hover:bg-welmo-blue-hover focus:outline-none disabled:opacity-50"
              >
                {formState.isSubmitting && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Connexion
              </button>
              {errors.apiError && (
                <div className="ml-4 text-red-600">
                  {errors.apiError?.message}
                </div>
              )}
            </div>
            <div className="flex items-center justify-center">
              <div className="text-sm">
                <Link
                  href="/register"
                  className="btn btn-link font-medium text-welmo-blue hover:text-welmo-blue-hover"
                >
                  Créer son compte
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
