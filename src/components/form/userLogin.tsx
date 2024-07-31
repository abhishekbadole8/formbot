"use client";

import styles from "./login.module.css";
import { Inter, Poppins } from "next/font/google";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { userLoginSchema } from "@/lib/schemas";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useBoolean } from "@/hooks/useBoolean";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
});

interface FormValues {
  email: string;
  password: string;
}

export default function UserLogin() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useBoolean(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    setIsLoading.on();
    try {
      const signInData = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (signInData?.error) {
        toast.error("Oops, Something went wrong!");
      } else {
        router.push("/workspace");
      }
    } catch (error) {
      console.log(error);
      toast.error("Oops, Something went wrong!");
    } finally {
      setIsLoading.off();
    }
  };

  const handleGoogle = async () => {
    setIsLoading.on();
    try {
      await signIn("google", {
        callbackUrl: "http://localhost:3000/workspace",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading.off();
    }
  };

  return (
    <div className={styles.authWrapper}>
      <section className={styles.card}>
        <button
          className={styles.googleBtn}
          disabled={isLoading}
          onClick={handleGoogle}
        >
          {isLoading ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.loadingSvg}
            >
              <path
                d="M12 2V6M12 18V22M4.92993 4.92993L7.75736 7.75736M16.2426 16.2426L19.07 19.07M2 12H6M18 12H22M4.92993 19.07L7.75736 16.2426M16.2426 7.75736L19.07 4.92993"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <>
              Login with Google <FcGoogle size={20} />
            </>
          )}
        </button>

        <div className={styles.horizontalLine} />

        <form className={styles.loginCard} onSubmit={handleSubmit(onSubmit)}>
          <div className={`${poppins.variable} ${styles.inputBox}`}>
            <label htmlFor="">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && (
              <p className={styles.errorTag}>{errors.email.message}</p>
            )}
          </div>

          <div className={`${poppins.variable} ${styles.inputBox}`}>
            <label htmlFor="">Password</label>
            <input
              id="password"
              type="password"
              placeholder="*********"
              {...register("password")}
            />
            {errors.password && (
              <p className={styles.errorTag}>{errors.password.message}</p>
            )}
          </div>

          <button
            className={styles.submitBtn}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.loadingSvg}
              >
                <path
                  d="M12 2V6M12 18V22M4.92993 4.92993L7.75736 7.75736M16.2426 16.2426L19.07 19.07M2 12H6M18 12H22M4.92993 19.07L7.75736 16.2426M16.2426 7.75736L19.07 4.92993"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              "Log In"
            )}
          </button>

          <p className={`${inter.variable} ${styles.extraLine}`}>
            Don’t have an account?{" "}
            <Link href="/signup">
              <span>Register now</span>
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}
