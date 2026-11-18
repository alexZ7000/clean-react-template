import { afterEach, describe, expect, it } from "bun:test";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { createTaskService } from "../src/features/tasks/application/taskService";
import { InMemoryTaskRepository } from "../src/features/tasks/infrastructure/inMemoryTaskRepository";
import { TasksPage } from "../src/features/tasks/presentation/TasksPage";

afterEach(cleanup);

describe("TasksPage", () => {
    it("adds a task through the application service", () => {
        const service = createTaskService(
            new InMemoryTaskRepository(),
            () => "task-1",
        );
        render(<TasksPage tasks={service} />);

        fireEvent.change(screen.getByRole("textbox", { name: "Task title" }), {
            target: { value: "Plan project" },
        });
        fireEvent.click(screen.getByRole("button", { name: "Add task" }));

        expect(screen.getByText("Plan project")).toBeTruthy();
        expect(service.list()).toHaveLength(1);
    });

    it("shows validation errors without adding a task", () => {
        const service = createTaskService(
            new InMemoryTaskRepository(),
            () => "task-1",
        );
        render(<TasksPage tasks={service} />);

        fireEvent.click(screen.getByRole("button", { name: "Add task" }));

        expect(screen.getByRole("alert").textContent).toBe(
            "Enter a task title.",
        );
        expect(service.list()).toHaveLength(0);
    });
});
