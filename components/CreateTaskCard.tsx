'use client';

import { useState } from 'react';
import { useTaskStore, Status } from '@/app/store/useStore'; // Adjust path if needed
import { X } from 'lucide-react';

interface Props {
    status: Status;
    onClose: () => void; // 👈 Critical: Function to tell parent to close this card
}

export default function CreateTaskCard({ status, onClose }: Props) {
    const addTask = useTaskStore((state) => state.addTask);
    const [title, setTitle] = useState(''); // No prop needed, starts empty
    
    const handleSubmit = () => {
        if (title.trim()) {
            addTask(title.trim(), status);
            setTitle('');
            onClose(); // 👈 Close the card after adding
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
        if (e.key === 'Escape') {
            onClose(); // 👈 Close on Escape
        }
    };

    return (
        <div className="w-full p-3 mt-4 bg-neutral-700 rounded-lg border border-neutral-600 shadow-xl">
            <input
                autoFocus
                className="w-full bg-transparent text-white placeholder-neutral-400 focus:outline-none mb-3"
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            
            <div className="flex items-center justify-end gap-2">
                <button
                    onClick={onClose} // 👈 Calls the prop function
                    className="p-1 rounded hover:bg-neutral-600 text-neutral-400 hover:text-white transition-colors"
                >
                    <X size={18} />
                </button>
                <button
                    onClick={handleSubmit} // 👈 Fixed naming mismatch
                    className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded transition-colors"
                >
                    Add
                </button>
            </div>
        </div>
    );
}