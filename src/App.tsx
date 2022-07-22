import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Profile } from "features/Profile";
import { PageNotFound } from "features/PageNotFound";

const App = () => (
  <Router>
    <Routes>
      <Route path="/profile/:login" element={<Profile />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);

export default App;
