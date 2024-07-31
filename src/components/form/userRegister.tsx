"use client";

import styles from "./signup.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Inter, Poppins } from "next/font/google";
import { SubmitHandler, useForm } from "react-hook-form";
import { userRegisterSchema } from "@/lib/schemas";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

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
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const UserRegister = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(userRegisterSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    try {
      const response = await axios.post("/api/user", data);
      if (response.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      toast.error("Oops, Something went wrong!");
    }
  };

  return (
    <div className={styles.authWrapper}>
      <form className={styles.loginCard} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${poppins.variable} ${styles.inputBox}`}>
          <label htmlFor="">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            {...register("username")}
          />
          {errors.username && (
            <p className={styles.errorTag}>{errors.username.message}</p>
          )}
        </div>

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

        <div className={`${poppins.variable} ${styles.inputBox}`}>
          <label htmlFor="">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="*********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className={styles.errorTag}>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button className={styles.submitBtn}>Sign Up</button>

        <p className={`${inter.variable} ${styles.extraLine}`}>
          Already have an account?
          <Link href="/login">
            <span>Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};
