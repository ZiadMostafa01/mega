import Landing from "./pages/landing";
import { Routes, Route } from "react-router-dom";
import Dashboardlayout from "./layouts/DashboardLayout";
import MainContent from "./pages/dashboard/MainContent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboardlayout />}>
        <Route index element={<MainContent />} />
        <Route path="test" element={<h1>test test</h1>} />
      </Route>

      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
}
export default App;
