import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/lib/store'
import { login, register } from '@/lib/api'
interface AuthFormProps {
  isLogin?: boolean
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin = true }) => {
  const router = useRouter()
  const setToken = useAuthStore((state) => state.setToken)
  const setUser = useAuthStore((state) => state.setUser)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isLogin) {
        const data = await login(formData.email, formData.password)
        setToken(data.jwt)
        setUser(data.user)
      } else {
        const data = await register(formData)
        setToken(data.jwt)
        setUser(data.user)
      }
      router.push('/dashboard')
    } catch (error) {
      console.error('Authentication error:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      {!isLogin && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </>
      )}
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        {isLogin ? 'Login' : 'Register'}
      </button>
    </form>
  )
}

export default AuthForm