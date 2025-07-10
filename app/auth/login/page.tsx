"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            redirect: false,
            username: userInfo.username,
            password: userInfo.password,
        });

        if (res?.error) {
            setError("نام کاربری یا رمز عبور اشتباه است");
        } else {
            router.push("/dashboard");
        }
    };

    return (
        <main className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">ورود به Taskify</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="نام کاربری"
                    value={userInfo.username}
                    onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
                    className="border p-2 rounded"
                    required/>
                <input
                    type="password"
                    placeholder="رمز عبور"
                    value={userInfo.password}
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                    className="border p-2 rounded"
                    required/>
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition cursor-pointer">
                        ورود
                </button>
            </form>
        </main>
    );
}
