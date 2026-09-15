import {
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";
import type { FormEvent } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

interface StoredUser {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const passwordStrength = useMemo(() => {
    let score = 0;

    if (password.length >= 8) {
      score++;
    }

    if (/[A-Z]/.test(password)) {
      score++;
    }

    if (/[0-9]/.test(password)) {
      score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      score++;
    }

    return score;
  }, [password]);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const trimmedName =
      name.trim();

    const trimmedEmail =
      email.trim().toLowerCase();

    if (
      !trimmedName ||
      !trimmedEmail ||
      !password ||
      !confirmPassword
    ) {
      setError(
        "Please fill in all fields."
      );
      return;
    }

    if (trimmedName.length < 2) {
      setError(
        "Name must contain at least 2 characters."
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

    if (password.length < 8) {
      setError(
        "Password must contain at least 8 characters."
      );
      return;
    }

    if (passwordStrength < 3) {
      setError(
        "Password must contain uppercase letters, numbers, or special characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
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

    const existingUser =
      users.find(
        (user) =>
          user.email ===
          trimmedEmail
      );

    if (existingUser) {
      setError(
        "An account with this email already exists."
      );
      return;
    }

    const newUser: StoredUser = {
      name: trimmedName,
      email: trimmedEmail,
      password,
    };

    localStorage.setItem(
      "authUsers",
      JSON.stringify([
        ...users,
        newUser,
      ])
    );

    setSuccess(
      "Account created successfully!"
    );

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const getStrengthText = () => {
    if (!password) {
      return "";
    }

    if (passwordStrength <= 1) {
      return "Weak password";
    }

    if (passwordStrength === 2) {
      return "Medium password";
    }

    if (passwordStrength === 3) {
      return "Strong password";
    }

    return "Very strong password";
  };

  return (
    <main className="auth-page">

      <section className="auth-container">

        <div className="auth-brand">

          <div className="auth-logo">
            <ShieldCheck size={28} />
          </div>

          <h1>
            Create Account
          </h1>

          <p>
            Create your account to get started.
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
              <Check size={17} />
              {success}
            </div>
          )}

          <div className="form-group">

            <label htmlFor="name">
              Full Name
            </label>

            <div className="input-wrapper">

              <User
                size={19}
                className="input-icon"
              />

              <input
                id="name"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(event) =>
                  setName(
                    event.target.value
                  )
                }
                autoComplete="name"
              />

            </div>

          </div>

          <div className="form-group">

            <label htmlFor="register-email">
              Email Address
            </label>

            <div className="input-wrapper">

              <Mail
                size={19}
                className="input-icon"
              />

              <input
                id="register-email"
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

            <label htmlFor="register-password">
              Password
            </label>

            <div className="input-wrapper">

              <Lock
                size={19}
                className="input-icon"
              />

              <input
                id="register-password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create a password"
                value={password}
                onChange={(event) =>
                  setPassword(
                    event.target.value
                  )
                }
                autoComplete="new-password"
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

            {password && (
              <div className="password-strength">

                <div className="strength-bars">

                  {[1, 2, 3, 4].map(
                    (level) => (
                      <span
                        key={level}
                        className={
                          level <=
                          passwordStrength
                            ? "strength-bar active"
                            : "strength-bar"
                        }
                      />
                    )
                  )}

                </div>

                <span>
                  {getStrengthText()}
                </span>

              </div>
            )}

          </div>

          <div className="form-group">

            <label htmlFor="confirm-password">
              Confirm Password
            </label>

            <div className="input-wrapper">

              <Lock
                size={19}
                className="input-icon"
              />

              <input
                id="confirm-password"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(
                    event.target.value
                  )
                }
                autoComplete="new-password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    (current) => !current
                  )
                }
                aria-label={
                  showConfirmPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>

            </div>

          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Create Account
          </button>

        </form>

        <p className="auth-switch register-switch">
          Already have an account?

          <Link to="/login">
            Sign in
          </Link>
        </p>

      </section>

    </main>
  );
}

export default Register;