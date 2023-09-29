//react
import React, { useContext } from "react";

//router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//context
import { AuthContext } from "./context/AuthContext";
//components
import MessagesChat from "./pages/MessagesChat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="news" element={<News />} />
          <Route path="message" element={<MessagesChat />} />
          <Route path="friends" element={<Friends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
