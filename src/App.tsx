import React from "react";
import "./GlobalStyles.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Profile } from "features/Profile";
import { PageNotFound } from "features/PageNotFound";
import { TopBar } from "components";
import { LoginScreen } from "features/LoginScreen";

const App = () => (
  <Router>
    {window.location.pathname !== "/" && <TopBar />}
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/profile/:login" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);

export default App;
