
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SupportOthersPage from "./Pages/SupportOthersPage";
import HomePage from "./Pages/HomePage";
import GetHelpPage from "./Pages/GetHelpPage";
import ConsultPage from "./Pages/ConsultPage ";
import BlogPage from "./Pages/BlogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/get-help" element={<GetHelpPage/>} />
        <Route path="/consult" element={<ConsultPage/>} />
        <Route path="/support-others" element={<SupportOthersPage />} />
        <Route path="/blog" element={<BlogPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
