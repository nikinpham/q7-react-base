import SignUpSucceedPage from "@/pages/templates/SignUpSucceed";
import PageNotFound from "./pages/templates/PageNotFound";
import SignUpPage from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/sign-up-success" element={<SignUpSucceedPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
