import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductUpload from "./pages/ProductUpload"
import Messages from "./pages/Messages"
import Settings from "./pages/Settings"
import DashboardPage from "./pages/Dashboard"
import ProductList from "./pages/ProductList"
import History from "./pages/History"
import ProductView from "./pages/ProductView"
import UsersList from "./pages/UsersList"
import LogActivityUsers from "./pages/LogActivityUsers"
import AddNewUser from "./pages/AddNewUser"
import FormAddUser from "./components/Fragments/FormAddUser"
import Login from "./pages/Login"
import ProtectedRoute from "./components/Protected/ProtectedRoute"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products/list" element={<ProductList />} />
          <Route path="/products/upload" element={<ProductUpload />} />
          <Route path="/products/view" element={<ProductView />} />
          <Route path="/history" element={<History />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users/list" element={<UsersList />} />
          <Route path="/users/activity" element={<LogActivityUsers />} />
          <Route path="/users/add" element={
            <ProtectedRoute allowedRoles={["Admin"]}>
            <AddNewUser/>
            </ProtectedRoute>
            } />
          <Route path="/users/addd" element={<FormAddUser/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
