'use client'

import { useState, useEffect, PropsWithChildren } from "react"
import { useTaskStore } from "@/app/store/useStore";
import { Loader } from 'lucide-react';

export default function ClientHydrationProvider({ children }: PropsWithChildren) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const rehydrate = () => {
            useTaskStore.persist.rehydrate();
            setMounted(true);
        };
        rehydrate();
    }, []) 

 if (!mounted) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-white">
           <Loader/><span>Loading TaskForge...</span>
        </div>
    );
  }

  return <>{children}</>;
}