import { useDroppable } from '@dnd-kit/core';
import { useTaskStore, Status } from '../app/store/useStore';
import { Task } from '../app/store/useStore';
import TaskCard from './TaskCard';

export default function Column(
    { id, title, tasks }: {id: Status; title: string, tasks: Task[]}) {
        const { setNodeRef } = useDroppable({
            id: id,
        });
return (
    <div className="flex flex-col w-80 bg-neutral-800 rounded-lg p-4 min-h-[500px]">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      
      {/* The Droppable Area */}
      <div ref={setNodeRef} className="flex-1 flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
