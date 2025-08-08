import ToasterContainer from "@components/ToasterContainer.tsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@router/index.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <ToasterContainer />
            <AppRoutes />
        </BrowserRouter>
    );
}
