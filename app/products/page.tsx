'use client'

import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '@/lib/api'
import ProductCard from '../components/ProductCard'
export default function ProductsPage() {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts()
  })
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading products: {error.message}</div>

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.data.map((product: any) => (
          <ProductCard key={product.id} {...product.attributes} />
        ))}
      </div>
    </div>
  )
}
