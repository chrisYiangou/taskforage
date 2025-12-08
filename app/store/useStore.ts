import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE'

export type Task = {
    id: string;
    title: string;
    description?: string;
    status: Status;
};

export type State = {
    tasks: Task[];
    draggedTaskId: string | null; 
};

export type Actions = {
    addTask: (title: string, status: Status) => void;
    removeTask: (id: string) => void;
    updateTask: (id: string, newStatus: Status) => void;
    dragTask: (id: string | null) => void;
    moveTask: (id: string, newStatus: Status) => void;
};

export const useTaskStore = create<State & Actions>()(
  persist(
    (set) => ({
      tasks: [],
      draggedTaskId: null,
      addTask: (title, status) =>
        set((state) => ({
          tasks: [...state.tasks, { id: uuidv4(), title, status }],
        })),
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      updateTask: (id, status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status } : task
          ),
        })),
      dragTask: (id) => set({ draggedTaskId: id }),
      moveTask: (id, newStatus) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status: newStatus } : task
          ),
        })),
    }),
    {
      name: 'task-store', // Unique name for Local Storage
    }
  )
);
