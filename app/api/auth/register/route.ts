import { NextResponse } from 'next/server'

type User = {
    id: string
    name: string
    username: string
    password: string
}

const users: User[] = []


export async function POST(req: Request) {
    const body = await req.json()
    const { username, password, name } = body

    const existingUser = users.find((user) => user.username === username)
        if (existingUser) {
            return NextResponse.json({ error: 'این نام کاربری قبلاً ثبت شده.' }, { status: 400 })
        }

    const newUser = {
        id: Date.now().toString(),
        username,
        password,
        name,
    }

    users.push(newUser)

    return NextResponse.json({ message: 'ثبت‌نام موفقیت‌آمیز بود.' })
}
