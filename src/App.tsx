import SignUpSucceedPage from "@/pages/templates/SignUpSucceed";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/templates/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageNotFound />} />
      <Route path="/sign-up-success" element={<SignUpSucceedPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
