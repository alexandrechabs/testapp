import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import YupPassword from "yup-password";
import Link from "next/link";
import { userService } from "services";
import { useState } from "react";
YupPassword(Yup); // extend yup
export default Register;

function Register() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Prénom requis"),
    lastName: Yup.string().required("Nom requis"),
    username: Yup.string().required("Email requis"),
    password: Yup.string()
      .required("Mot de passe requis")
      .min(8, "Le mot de passe doit contenir 8 caractères")
      .minLowercase(1, "Le mot de passe doit contenir au moins 1 minuscule")
      .minUppercase(1, "Le mot de passe doit contenir au moins 1 majuscule")
      .minNumbers(1, "Le mot de passe doit contenir au moins 1 chiffre")
      .minSymbols(
        1,
        "Le mot de passe doit contenir au moins 1 caractère spécial"
      ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(user) {
    console.log(user);
    // return userService
    //   .register(user)
    //   .then(() => {
    //     console.log("Registration successful");
    //     router.push("login");
    //   })

    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Créer un compte
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md">
              <div className="my-5">
                <label htmlFor="firstName" className="sr-only">
                  Prénom
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  {...register("firstName")}
                  autoComplete="firstName"
                  required
                  className={`relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-welmo-blue focus:outline-none focus:ring-welmo-blue sm:text-sm form-control ${
                    errors.firstName ? "border-red-600" : ""
                  }`}
                  placeholder="Prénom"
                />
                <div className="ml-4 text-red-600">{errors.email?.message}</div>
              </div>
              <div className="my-5">
                <label htmlFor="lastName" className="sr-only">
                  Nom
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  {...register("lastName")}
                  autoComplete="lastName"
                  required
                  className={`relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-welmo-blue focus:outline-none focus:ring-welmo-blue sm:text-sm form-control ${
                    errors.lastName ? "border-red-600" : ""
                  }`}
                  placeholder="Nom"
                />
                <div className="ml-4 text-red-600">{errors.email?.message}</div>
              </div>
              <div className="my-5">
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
                  className={`relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-welmo-blue focus:outline-none focus:ring-welmo-blue sm:text-sm form-control ${
                    errors.email ? "border-red-600" : ""
                  }`}
                  placeholder="Adresse email"
                />
                <div className="ml-4 text-red-600">{errors.email?.message}</div>
              </div>
              <div className="my-5">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  {...register("password")}
                  autoComplete="current-password"
                  required
                  className={`relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-welmo-blue focus:outline-none sm:text-sm form-control ${
                    errors.password ? "border-red-600" : ""
                  }`}
                  placeholder="Mot de passe"
                  type={showPassword ? "text" : "password"}
                />
                <label
                  onClick={() => setShowPassword(!showPassword)}
                  className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer "
                  for="toggle"
                >
                  {showPassword ? "hide" : "show"}
                </label>
                <div className="ml-4 text-red-600">
                  {errors.password?.message}
                </div>
              </div>

              <div className="eye_div">
                <input
                  className="input block border border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
                  type="password"
                  onChange={handlePasswordChange("password")}
                  value={passValue.password}
                />
                <div
                  className="icon_button absolute right-4 top-14"
                  onClick={handleClickShowPassword}
                >
                  {passValue.showPassword ? "a" : "b"}
                </div>
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
          </form>
        </div>
      </div>
    </>
  );
}
