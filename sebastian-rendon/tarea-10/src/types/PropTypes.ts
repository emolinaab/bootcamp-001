export type ToDoList = {
    items: ToDoItem[];
}

export type ToDoItem = {
    id: number;
    title: string;
    description: string;
    priority: number;
    completed: boolean;
    date: Date;
}