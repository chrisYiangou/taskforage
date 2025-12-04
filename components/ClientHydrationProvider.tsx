'use client'

import { useState, useEffect, PropsWithChildren } from "react"
import { useTaskStore } from "@/app/store/useStore";

export default function ClientHydrationProvider({ children }: PropsWithChildren) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const rehydrate = async () => {
            await useTaskStore.persist.rehydrate();
            setMounted(true);
        };
        rehydrate();
    }, []) 

 if (!mounted) {
    // Optional: Render a loading state here
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-900 text-white">
            Loading TaskForge...
        </div>
    );
  }

  return <>{children}</>;
}