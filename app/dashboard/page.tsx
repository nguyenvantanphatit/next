// src/app/dashboard/page.tsx
'use client'

import { useAuthStore } from '@/lib/store'

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user)

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  )
}