// import React from "react";
// import { AuthProvider } from "./contexts/AuthContext";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import Otp from "./pages/Otp";
// import CompleteProfile from "./pages/CompleteProfile";
// import Test from "./pages/Test";
// import PrivateRoute from "./components/PrivateRoute";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/otp" element={<Otp />} />
//           <Route path="/home" element={<CompleteProfile />} />
//           <Route path="/error" element={<Test />} />
//           <Route path="/" element={<PrivateRoute />}>
//             <Route path="/" element={<Navigate to="/dashboard" />} />
//             <Route path="/dashboard/*" element={<Dashboard />} />
//           </Route>
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Otp from "./pages/Otp";
import CompleteProfile from "./pages/CompleteProfile";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/home" element={<CompleteProfile />} />
          {/* <Route path="/error" element={<Test />} /> */}
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
