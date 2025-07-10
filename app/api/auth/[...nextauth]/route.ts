import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
        name: "Credentials",
        credentials: {
            username: { label: "نام کاربری", type: "text", placeholder: "yourusername" },
            password: { label: "رمز عبور", type: "password" }
        },
        async authorize(credentials) {
            // اینجا می‌تونی یوزر و پسورد رو چک کنی
            // برای شروع، یه یوزر ساده بسازیم:
            const user = { id: "1", name: "iman", username: "iman", password: "1234" };

            if (
            credentials?.username === user.username &&
            credentials?.password === user.password
            ) {
            return user;
            }
            return null;
        }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/auth/login" // مسیر صفحه لاگین خودمون
    }
});

export { handler as GET, handler as POST };
