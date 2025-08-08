import ExamplePage from "../pages/ExamplePage.tsx";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path={"/"} element={<ExamplePage />} />
        </Routes>
    );
}
