import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
const HomePage = lazy(() => import("./pages/HomePage"));
const ToDoPage = lazy(() => import("./pages/ToDoPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const App = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<ToDoPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/users/:idUser" element={<UserProfile />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
