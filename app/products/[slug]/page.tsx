'use client'

import { getProductBySlug } from '@/lib/api'
import { useCartStore } from '@/lib/store'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProductBySlug(params.slug)
  })

  const addItem = useCartStore((state) => state.addItem)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading product</div>

 
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}