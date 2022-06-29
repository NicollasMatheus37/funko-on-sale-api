import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Store from "./pages/store";
import NotFound from "./pages/notFound";
import Register from "./pages/register";
import Adicionar from "./pages/adicionar";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/store" element={<Store />}></Route>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/adicionar" element={<Adicionar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesApp;
