import { Route, Routes } from "react-router-dom";
import AdminProtectedRoute from "../components/ProtectedRouteDashboard";
import { Suspense, lazy } from "react";
import { Loading } from "../components/Loading";
const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

export function MakeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route
        path="/dashboard"
        element={
          <AdminProtectedRoute
            isPrivate
            redirectTo="/"
          >
            <Suspense fallback={<Loading/>}>
              <Dashboard />
            </Suspense>
          </AdminProtectedRoute>
        }
      />
    </Routes>
  );
}