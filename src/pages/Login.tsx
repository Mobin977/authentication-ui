import {
  Eye,
  EyeOff,
  Lock,
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
  useNavigate,
} from "react-router-dom";

interface StoredUser {
  name: string;
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [rememberMe, setRememberMe] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    const trimmedEmail =
      email.trim().toLowerCase();

    if (!trimmedEmail || !password) {
      setError(
        "Please enter your email and password."
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
        "No account found with this email. Please create an account first."
      );
      return;
    }

    if (user.password !== password) {
      setError(
        "Incorrect password. Please try again."
      );
      return;
    }

    const loggedInUser = {
      name: user.name,
      email: user.email,
    };

    if (rememberMe) {
      localStorage.setItem(
        "authUser",
        JSON.stringify(loggedInUser)
      );

      sessionStorage.removeItem(
        "authUser"
      );
    } else {
      sessionStorage.setItem(
        "authUser",
        JSON.stringify(loggedInUser)
      );

      localStorage.removeItem(
        "authUser"
      );
    }

    navigate("/dashboard");
  };

  return (
    <main className="auth-page">

      <section className="auth-container">

        <div className="auth-brand">

          <div className="auth-logo">
            <ShieldCheck size={28} />
          </div>

          <h1>
            Welcome Back
          </h1>

          <p>
            Sign in to continue to your account.
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

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <div className="input-wrapper">

              <Mail
                size={19}
                className="input-icon"
              />

              <input
                id="email"
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

          <div className="form-group">

            <div className="password-label-row">

              <label htmlFor="password">
                Password
              </label>

              <Link to="/forgot-password">
                Forgot password?
              </Link>

            </div>

            <div className="input-wrapper">

              <Lock
                size={19}
                className="input-icon"
              />

              <input
                id="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(
                    event.target.value
                  )
                }
                autoComplete="current-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(
                    (current) => !current
                  )
                }
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>

            </div>

          </div>

          <label className="remember-me">

            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) =>
                setRememberMe(
                  event.target.checked
                )
              }
            />

            <span>
              Remember me
            </span>

          </label>

          <button
            type="submit"
            className="auth-button"
          >
            Sign In
          </button>

        </form>

        <div className="auth-divider">
          <span>
            OR
          </span>
        </div>

        <p className="auth-switch">
          Don't have an account?

          <Link to="/register">
            Create an account
          </Link>
        </p>

      </section>

    </main>
  );
}

export default Login;