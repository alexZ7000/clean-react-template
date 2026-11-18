import { createTaskService } from "../features/tasks/application/taskService";
import { InMemoryTaskRepository } from "../features/tasks/infrastructure/inMemoryTaskRepository";

// The composition root is the only place that chooses concrete adapters.
export const tasks = createTaskService(new InMemoryTaskRepository(), () =>
    crypto.randomUUID(),
);
