import type { TaskRepository } from "../application/taskRepository";
import type { Task } from "../domain/task";

// Replace this adapter with an API or database adapter without changing use cases.
export class InMemoryTaskRepository implements TaskRepository {
    private readonly tasks: Task[] = [];

    list(): readonly Task[] {
        return [...this.tasks];
    }

    save(task: Task): void {
        this.tasks.push(task);
    }
}
