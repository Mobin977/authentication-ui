import {
  Activity,
  CheckCircle,
  LogOut,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import ThemeToggle from "../components/ThemeToggle";

interface AuthUser {
  name: string;
  email: string;
}

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] =
    useState<AuthUser | null>(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("authUser") ||
      sessionStorage.getItem("authUser");

    if (!storedUser) {
      navigate("/login");
      return;
    }

    try {
      const parsedUser =
        JSON.parse(storedUser);

      setUser(parsedUser);
    } catch {
      localStorage.removeItem("authUser");
      sessionStorage.removeItem("authUser");

      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    sessionStorage.removeItem("authUser");

    navigate("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <main className="dashboard-page">

      {/* Dashboard Navbar */}
      <nav className="dashboard-navbar">

        <div className="dashboard-logo">
          <ShieldCheck size={23} />

          <span>
            AuthFlow
          </span>
        </div>

        <div className="dashboard-actions">

          <ThemeToggle />

          <button
            type="button"
            className="logout-button"
            onClick={handleLogout}
          >
            <LogOut size={17} />

            Logout
          </button>

        </div>

      </nav>

      {/* Dashboard Content */}
      <section className="dashboard-container">

        <div className="dashboard-header">

          <div>

            <span className="dashboard-label">
              DASHBOARD
            </span>

            <h1>
              Welcome, {user.name} 👋
            </h1>

            <p>
              Here's an overview of your
              account.
            </p>

          </div>

          <div className="account-status">

            <CheckCircle size={18} />

            Account Active

          </div>

        </div>

        {/* Account Cards */}
        <div className="dashboard-grid">

          <article className="dashboard-card">

            <div className="dashboard-card-icon">
              <User size={22} />
            </div>

            <div>
              <span>
                Full Name
              </span>

              <strong>
                {user.name}
              </strong>
            </div>

          </article>

          <article className="dashboard-card">

            <div className="dashboard-card-icon">
              <Mail size={22} />
            </div>

            <div>
              <span>
                Email Address
              </span>

              <strong>
                {user.email}
              </strong>
            </div>

          </article>

          <article className="dashboard-card">

            <div className="dashboard-card-icon">
              <ShieldCheck size={22} />
            </div>

            <div>
              <span>
                Authentication
              </span>

              <strong>
                Verified
              </strong>
            </div>

          </article>

          <article className="dashboard-card">

            <div className="dashboard-card-icon">
              <Activity size={22} />
            </div>

            <div>
              <span>
                Account Status
              </span>

              <strong>
                Active
              </strong>
            </div>

          </article>

        </div>

        {/* Welcome Section */}
        <section className="dashboard-welcome">

          <div className="dashboard-welcome-icon">
            <ShieldCheck size={28} />
          </div>

          <div>

            <h2>
              Your account is ready
            </h2>

            <p>
              You have successfully signed in.
              This dashboard represents the
              authenticated area of the application.
            </p>

          </div>

        </section>

      </section>

    </main>
  );
}

export default Dashboard;
