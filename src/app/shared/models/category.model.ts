export interface Category {
  id: number;
  title: string;
  items: number;
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string;
  date: Date;
}