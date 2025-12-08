import { Status } from "@/app/store/useStore";
import { useState } from 'react';
import { Plus } from 'lucide-react';
import CreateTaskCard from "./CreateTaskCard";

export default function CreateTaskButton({status}: {status: Status}) {
    const [ isCreating, setIsCreating ] = useState(false);

    if (isCreating) {
        return (
        <CreateTaskCard 
            status={status} 
            onClose={() => setIsCreating(false)} />
        )
    }

    return (
        <button
            type="button"
            className="
                w-full p-2 mt-4 
                bg-green-600 hover:bg-green-700 
                text-white font-semibold 
                rounded-lg shadow-md 
                transition-colors duration-200 
                flex items-center justify-center space-x-2 
                cursor-pointer
            "
            onClick={() => setIsCreating(true)}
        > <Plus size={20}/>
            Create New Task 
        </button>
   )
}