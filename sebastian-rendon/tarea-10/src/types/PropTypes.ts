export interface ToDoItem {
    id: number;
    title: string;
    description: string;
    priority: number;
    completed: boolean;
    dateCreated: string;
    dateDue: string;
}

export interface ToDoListProps {
    items: ToDoItem[];
}

export interface ToDoItemProps {
    item: ToDoItem;
    onComplete: Function;
}

export interface ToDoForm {
    item: ToDoItem;
    onChange: Function;
    onSubmit: Function;
}

export interface PriorityMap {
    [key: number]: string
}