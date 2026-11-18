import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TasksPage } from "../features/tasks/presentation/TasksPage";
import { tasks } from "./composition";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TasksPage tasks={tasks} />} />
            </Routes>
        </BrowserRouter>
    );
}
