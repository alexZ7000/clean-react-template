import type { Task } from "../domain/task";
import { taskTitle } from "../domain/task";
import type { TaskRepository } from "./taskRepository";

export interface TaskService {
    list(): readonly Task[];
    create(title: string): Task;
}

export function createTaskService(
    repository: TaskRepository,
    nextId: () => string,
): TaskService {
    return {
        list: () => repository.list(),
        create: (input) => {
            const title = taskTitle(input);
            const task: Task = { id: nextId(), title };
            repository.save(task);
            return task;
        },
    };
}
