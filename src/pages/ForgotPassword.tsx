import {
  ArrowLeft,
  KeyRound,
  Mail,
  ShieldCheck,
} from "lucide-react";

import {
  useState,
} from "react";

import type {
  FormEvent,
} from "react";

import {
  Link,
} from "react-router-dom";

interface StoredUser {
  name: string;
  email: string;
  password: string;
}

function ForgotPassword() {
  const [email, setEmail] =
    useState("");

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const trimmedEmail =
      email.trim().toLowerCase();

    if (!trimmedEmail) {
      setError(
        "Please enter your email address."
      );
      return;
    }

    if (
      !trimmedEmail.includes("@") ||
      !trimmedEmail.includes(".")
    ) {
      setError(
        "Please enter a valid email address."
      );
      return;
    }

    const storedUsers =
      localStorage.getItem(
        "authUsers"
      );

    const users: StoredUser[] =
      storedUsers
        ? JSON.parse(storedUsers)
        : [];

    const user = users.find(
      (item) =>
        item.email === trimmedEmail
    );

    if (!user) {
      setError(
        "No account found with this email."
      );
      return;
    }

    setSuccess(
      "Password reset instructions have been sent to your email."
    );
  };

  return (
    <main className="auth-page">

      <section className="auth-container">

        <div className="auth-brand">

          <div className="auth-logo">
            <ShieldCheck size={28} />
          </div>

          <h1>
            Forgot Password?
          </h1>

          <p>
            Enter your registered email and
            we'll help you recover your account.
          </p>

        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {error && (
            <div
              className="auth-error"
              role="alert"
            >
              {error}
            </div>
          )}

          {success && (
            <div
              className="auth-success"
              role="status"
            >
              {success}
            </div>
          )}

          <div className="form-group">

            <label htmlFor="forgot-email">
              Email Address
            </label>

            <div className="input-wrapper">

              <Mail
                size={19}
                className="input-icon"
              />

              <input
                id="forgot-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value
                  )
                }
                autoComplete="email"
              />

            </div>

          </div>

          <button
            type="submit"
            className="auth-button"
          >
            <KeyRound size={18} />

            Reset Password
          </button>

        </form>

        <Link
          to="/login"
          className="back-to-login"
        >
          <ArrowLeft size={17} />

          Back to Login
        </Link>

      </section>

    </main>
  );
}

export default ForgotPassword;