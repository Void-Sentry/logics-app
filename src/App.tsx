import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Admin,
  Auth,
  Colab,
} from 'layouts/index';

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<Auth />} />
      <Route path="admin/*" element={<Admin />} />
      <Route path="colab/*" element={<Colab />} />
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
};

export default App;
