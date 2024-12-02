import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginForm } from '@/components/auth/LoginForm';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { useAuthStore } from '@/store/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;