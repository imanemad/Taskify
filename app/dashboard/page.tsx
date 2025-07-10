"use client";

import { useRouter } from 'next/navigation'
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
    const { data: session, status } = useSession();
    const router = useRouter()

    if (status === "loading") {
        return <p>در حال بارگذاری...</p>;
    }

    if (!session) {
        return( 
            <div>
                <p>شما وارد نشده‌اید. لطفاً وارد شوید.</p>
                <button
                    onClick={() => router.push('/auth/login')} 
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        ورود
                </button>
            </div>
        );
    }

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold">سلام، {session.user?.name}!</h1>
            <button
                onClick={() => signOut()}
                className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                    خروج
            </button>
        </main>
    );
}
