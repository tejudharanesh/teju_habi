// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const token = localStorage.getItem("authToken");

//   return (
//     <Route {...rest} element={token ? <Component /> : <Navigate to="/" />} />
//   );
// };

// export default PrivateRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("authToken");

  return token ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PrivateRoute;
