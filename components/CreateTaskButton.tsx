import { useTaskStore, Status } from "@/app/store/useStore";
import { useState } from 'react';

export default function CreateTaskButton({status}: {status: Status}) {
    const addTask = useTaskStore((state) => state.addTask);
    const [title, setTitle] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleClick = (e:React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            addTask(title.trim(), status)
            setTitle('');
            setShowForm(false);
        }
    }
    return (
        <button
            className="
                w-full p-2 mt-4 
                bg-green-600 hover:bg-green-700 
                text-white font-semibold 
                rounded-lg shadow-md 
                transition-colors duration-200 
                flex items-center justify-center space-x-2
            "
            onClick={handleClick}
        >
            {/* You'll likely put the "Plus" icon and text here */}
            Create New Task
        </button>
    )
}