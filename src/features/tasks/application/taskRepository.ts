import type { Task } from "../domain/task";

// Application code depends on this port, never on browser or network APIs.
export interface TaskRepository {
    list(): readonly Task[];
    save(task: Task): void;
}
