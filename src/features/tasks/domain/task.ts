export type Task = Readonly<{
    id: string;
    title: string;
}>;

export function taskTitle(input: string): string {
    const title = input.trim();
    if (!title) {
        throw new Error("Enter a task title.");
    }
    return title;
}
