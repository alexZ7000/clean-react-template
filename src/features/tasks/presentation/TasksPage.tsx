import { type FormEvent, useState } from "react";
import type { TaskService } from "../application/taskService";

type Props = { tasks: TaskService };

export function TasksPage({ tasks }: Props) {
    const [items, setItems] = useState(() => tasks.list());
    const [title, setTitle] = useState("");
    const [error, setError] = useState<string | null>(null);

    function addTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            tasks.create(title);
            setItems(tasks.list());
            setTitle("");
            setError(null);
        } catch (cause) {
            setError(
                cause instanceof Error
                    ? cause.message
                    : "Could not add the task.",
            );
        }
    }

    return (
        <main className="mx-auto max-w-xl px-6 py-16">
            <h1 className="text-3xl font-semibold">Tasks</h1>
            <p className="mt-2 text-slate-600">
                A small working example of domain, application, infrastructure,
                and presentation.
            </p>

            <form
                onSubmit={addTask}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
                <label htmlFor="task-title" className="sr-only">
                    Task title
                </label>
                <input
                    id="task-title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="What needs to be done?"
                    className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2"
                />
                <button
                    type="submit"
                    className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white"
                >
                    Add task
                </button>
            </form>
            {error && (
                <p role="alert" className="mt-3 text-red-700">
                    {error}
                </p>
            )}

            <ul className="mt-8 space-y-2" aria-label="Tasks">
                {items.map((task) => (
                    <li
                        key={task.id}
                        className="rounded-lg border border-slate-200 px-4 py-3"
                    >
                        {task.title}
                    </li>
                ))}
            </ul>
        </main>
    );
}
