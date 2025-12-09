
import { useState } from 'react';
import { PencilIcon, Check, X } from 'lucide-react';

export default function EditCardWidget() {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('Click the pencil to edit this text.');

    const handleSave = () => {
        setIsEditing(false);
        console.log('Saved text:', text);
    }

    const handleCancel = () => {
        setIsEditing(false);
    }


    if (isEditing) {
            return (
                <div className="flex items-center space-x-2 w-full">
                    <input
                        className="grow p-2 bg-neutral-700 rounded-lg
                         text-white border border-neutral-600
                        focus:outline-none focus:border-green-500"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        autoFocus // Allows immediate typing
                    />
                    
                    {/* Save Button */}
                    <button 
                        onClick={handleSave}
                        className="p-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                    >
                        <Check size={20} />
                    </button>
                    
                    {/* Cancel Button */}
                    <button 
                        onClick={handleCancel}
                        className="p-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
            );
        }

        // --- State 2: DISPLAY MODE ---
        return (
            <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-800 w-full text-white">
                <span className="font-medium mr-4">{text}</span>
                
                {/* The Edit Button (Your original code, now functional) */}
                <button 
                    onClick={() => setIsEditing(true)}
                    className="p-1 bg-neutral-700 hover:bg-neutral-600 rounded-lg shadow-md cursor-pointer transition-colors"
                    aria-label="Edit text"
                >
                    <PencilIcon size={20} />
                </button>
            </div>
        );
    }
