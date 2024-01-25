import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { CategoryList } from "./components/category/CategoryList";
import { CategoryForm } from "./components/category/CategoryForm";
import { Notfound } from "./pages/Notfound";
import { Login } from "./pages/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/categories/add" element={<CategoryForm />} />
        <Route path="/categories/edit/:id" element={<CategoryForm />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
