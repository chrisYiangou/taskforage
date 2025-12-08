import { useDraggable } from '@dnd-kit/core';
import { Task } from '../app/store/useStore';

export default function TaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-neutral-700 p-4 rounded shadow-md cursor-grab active:cursor-grabbing hover:bg-neutral-600 transition-colors"
    >
      <h3 className="font-semibold">{task.title}</h3>
      {task.description && <p className="text-sm text-gray-400 mt-1">{task.description}</p>}
    </div>
  );
}