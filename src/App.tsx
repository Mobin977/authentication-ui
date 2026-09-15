import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Default Route */}
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        {/* Public Routes */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

        </Route>

        {/* Unknown Routes */}
        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
