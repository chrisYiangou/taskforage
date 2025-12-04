'use client'

import { useTaskStore, Status } from '@/app/store/useStore';
import { useEffect, useState } from 'react';
import Column from './Column'; //Make later
import { DndContext, DragEndEvent } from '@dnd-kit/core'

const COLUMNS: { id: Status; title: string }[] = [
    { id: 'TODO', title: 'To Do' },
    { id: 'IN_PROGRESS', title: 'In Progress' },
    { id: 'DONE', title: 'Done' },
];

export default function KanbanBoard() {
    const tasks = useTaskStore((state) => state.tasks);
    const moveTask = useTaskStore((state) => state.moveTask);

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        useTaskStore.persist.rehydrate();
        setMounted(true);
    }, []);

    if (!mounted) return null; //In case of hydration mismatch

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id as string;
        const newStatus = over.id as Status;

        moveTask(taskId, newStatus);
    }
return (
    <div className="p-10 flex gap-8 h-screen w-full bg-neutral-900 text-white overflow-scroll">
      <DndContext onDragEnd={handleDragEnd}>
        {COLUMNS.map((col) => (
          <Column 
            key={col.id} 
            id={col.id} 
            title={col.title} 
            tasks={tasks.filter((task) => task.status === col.id)} 
          />
        ))}
      </DndContext>
    </div>
  );
}


