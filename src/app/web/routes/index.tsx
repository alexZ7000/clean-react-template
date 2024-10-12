import ExamplePage from "@screens/ExamplePage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<ExamplePage />} />
            </Routes>
        </BrowserRouter>
    );
}
