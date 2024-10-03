'use client'
import AuthForm from "../components/AuthForm"
export default function LoginPage() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <AuthForm isLogin={true} />
    </div>
  )
}