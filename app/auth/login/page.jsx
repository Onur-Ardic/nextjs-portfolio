'use client'
import { Login } from '@/app/firebase'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import toast from 'react-hot-toast'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const user = await Login(email, password)
      if (!user) return toast.error('Giriş Başarısız')
      router.push('/')
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <div className="bg-gradient-to-tr from-slate-900 to-indigo-900 min-h-screen flex  justify-center  flex-col items-center">
      <div className="form backdrop-blur-sm bg-white/10 p-5 rounded-lg mx-auto flex flex-col justify-center items-center text-white ">
        <form onSubmit={handleSubmit}>
          <div className="input-wrap flex flex-col mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="backdrop-blur-sm bg-white/10 border border-blue-600 p-1 rounded-md outline-none"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-wrap flex flex-col mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="backdrop-blur-sm bg-white/10 border border-blue-600 p-1 rounded-md outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Giriş</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
