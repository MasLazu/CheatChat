import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff4d4f",
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}
