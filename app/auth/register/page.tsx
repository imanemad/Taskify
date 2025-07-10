'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, name }),
        })

        if (res.ok) {
            router.push('/auth/login')
        } else {
            const data = await res.json()
            setError(data.error || 'خطا در ثبت‌نام')
        }
        
    }

    return (
        <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded shadow">
            <h1 className="text-2xl font-bold mb-6 text-center">ثبت‌نام</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                type="text"
                placeholder="نام"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border p-2 rounded"
                />
                <input
                type="text"
                placeholder="نام کاربری"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border p-2 rounded"
                />
                <input
                type="password"
                placeholder="رمز عبور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
                />

                {error && <p className="text-red-500">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                        ثبت‌ نام 
                </button>
            </form>
        </div>
    )
}
