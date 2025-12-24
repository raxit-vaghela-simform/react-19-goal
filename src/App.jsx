import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import FeaturePage from "./pages/FeaturePage";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/feature/:id' element={<FeaturePage />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
