export interface Task {
    id: string;
    title: string;
    isCompleted: boolean
}

export type TasksSchema = Task[]