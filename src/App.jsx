import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductUpload from "./pages/ProductUpload"
import Messages from "./pages/Messages"
import Settings from "./pages/Settings"
import DashboardPage from "./pages/Dashboard"
import ProductList from "./pages/ProductList"
import History from "./pages/History"
import ProductView from "./pages/ProductView"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage/>} />
        <Route path="/products/list" element={<ProductList/>} />
        <Route path="/products/upload" element={<ProductUpload/>} />
        <Route path="/products/view" element={<ProductView />} />
        <Route path="/history" element={<History/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
