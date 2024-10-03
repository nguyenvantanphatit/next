// src/components/ProductCard.tsx
import React from 'react'
import Link from 'next/link'
import { useCartStore } from '@/lib/store'

interface ProductCardProps {
  id: string
  label: string
  price: number
  slug: string
  en_label: string
  en_slug: string | null
}

const ProductCard: React.FC<ProductCardProps> = ({ id, label, price, slug, en_label, en_slug }) => {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({ id, name: label, price, quantity: 1 })
  }

  return (
    <div className="border p-4 rounded">
      <Link href={`/products/${slug}`}>
        <h2 className="font-semibold">{en_label ? en_label : label}</h2>
      </Link>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard