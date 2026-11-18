import { describe, expect, it } from "bun:test";
import { createTaskService } from "../src/features/tasks/application/taskService";
import { InMemoryTaskRepository } from "../src/features/tasks/infrastructure/inMemoryTaskRepository";

describe("task service", () => {
    it("trims a title and saves a task through its repository port", () => {
        const service = createTaskService(
            new InMemoryTaskRepository(),
            () => "task-1",
        );

        expect(service.create("  Write a test  ")).toEqual({
            id: "task-1",
            title: "Write a test",
        });
        expect(service.list()).toEqual([
            { id: "task-1", title: "Write a test" },
        ]);
    });

    it("rejects a blank title without saving it", () => {
        let idsCreated = 0;
        const service = createTaskService(new InMemoryTaskRepository(), () => {
            idsCreated += 1;
            return "task-1";
        });

        expect(() => service.create("   ")).toThrow("Enter a task title.");
        expect(service.list()).toEqual([]);
        expect(idsCreated).toBe(0);
    });
});
