import NextAuth from 'next-auth'
import Providers from 'next-auth/react'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        const user = { id: 1, name: 'Admin', email: 'admin@example.com' } // Aqui você deve buscar o usuário no banco de dados

        if (user) {
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    },
  },
})