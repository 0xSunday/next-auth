import { useState, useRef, useEffect } from "react";
import classes from "./auth-form.module.css";
import { signIn } from "next-auth/client";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";
// import { signIn } from "next-auth/react";
const createUser = async (email, password) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "somethng went wrong");
  }

  return data;
};

function AuthForm() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const enterdEmail = emailRef.current.value;
    const enterdPassword = passwordRef.current.value;
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: enterdEmail,
        password: enterdPassword,
      });
      console.log(result);
      if (!result.error) {
        router.replace('/')
        // window.location.href = "/";
      }
    } else {
      try {
        const result = await createUser(enterdEmail, enterdPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
