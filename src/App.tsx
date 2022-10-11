import RegisterProvider from "common/contexts/Register";
import UserProvider from "common/contexts/User";
import Home from "pages/Home";
import Register from "pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
// import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RegisterProvider>
              <UserProvider>
                <Login />
              </UserProvider>
            </RegisterProvider>
          }
        />
        <Route
          path="/home"
          element={
            <RegisterProvider>
              <UserProvider>
                <Home />
              </UserProvider>
            </RegisterProvider>
          }
        />
        <Route
          path="/register"
          element={
            <RegisterProvider>
              <UserProvider>
                <Register />
              </UserProvider>
            </RegisterProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
