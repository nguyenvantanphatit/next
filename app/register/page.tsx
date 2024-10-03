'use client'

import AuthForm from "../components/AuthForm"

export default function RegisterPage() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <AuthForm isLogin={false} />
    </div>
  )
}