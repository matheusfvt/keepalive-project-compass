import UserProvider from "common/contexts/User";
import Home from "pages/Home";
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
            <UserProvider>
              <Login />
            </UserProvider>
          }
        />
        <Route
          path="/home"
          element={
            <UserProvider>
              <Home />
            </UserProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
